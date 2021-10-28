import type { NextApiRequest, NextApiResponse } from 'next'
import validateUser from 'utils/api/validateUser'
import { serialize } from 'cookie'
import User from 'models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import errorHandler from 'utils/api/errorHandler'
import connectMongo from 'utils/api/connectMongo'

const MAX_AGE = 60 * 60 * 8 // 8 hours

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  const { username, password } = request.body

  try {
    validateUser(username, password)

    await connectMongo()
    const user = await User.findOne({ username })

    if (!user) throw new Error('InvalidCredentials')

    const validPassword: boolean = await bcrypt.compare(password, user.hash)

    if (!validPassword) throw new Error('InvalidCredentials')

    const token = jwt.sign(
      { user_id: user.id },
      process.env.TOKEN_KEY as string,
      {
        expiresIn: MAX_AGE,
      }
    )

    const { tokens } = user

    tokens.length > 20 && tokens.shift()

    tokens.push(token)

    await user.save()

    const cookie = serialize('token', token, {
      maxAge: MAX_AGE,
      expires: new Date(Date.now() + MAX_AGE * 1000),
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })

    response.setHeader('Set-Cookie', cookie)
    response.status(200).json({ message: 'Logged successfully' })
  } catch (error) {
    errorHandler(error, response)
  }
}

export default login

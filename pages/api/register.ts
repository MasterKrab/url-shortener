import type { NextApiRequest, NextApiResponse } from 'next'
import validateUser from 'utils/api/validateUser'
import User from 'models/User'
import encriptPassword from 'utils/api/encriptPassword'
import errorHandler from 'utils/api/errorHandler'
import connectMongo from 'utils/api/connectMongo'

const register = async (request: NextApiRequest, response: NextApiResponse) => {
  const { username, password } = request.body

  try {
    validateUser(username, password)

    await connectMongo()
    const oldUser = await User.findOne({ username })

    if (oldUser)
      return response.status(409).json({ message: 'User already exists' })

    const hash = await encriptPassword(password)

    await User.create({ username, hash, tokens: [] })

    response.status(201).json({ message: 'Created user' })
  } catch (error) {
    errorHandler(error, response)
  }
}

export default register

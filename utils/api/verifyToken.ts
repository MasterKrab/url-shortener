import jwt, { JwtPayload } from 'jsonwebtoken'
import User, { UserModel } from 'models/User'

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    // eslint-disable-next-line camelcase
    user_id: string
    username: string
  }
}

const verifyToken = async (token: string): Promise<UserModel> => {
  const decoded: JwtPayload = jwt.verify(
    token,
    process.env.TOKEN_KEY as string
  ) as JwtPayload

  const { user_id: _id } = decoded

  const user = await User.findOne({ _id, tokens: { $in: [token] } })

  if (!user) throw new Error('JsonWebTokenError')

  return user
}

export default verifyToken

import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserModel } from 'models/User'
import verifyToken from 'utils/api/verifyToken'

const jwtMiddleware = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<UserModel> => {
  const { token } = request.cookies

  return await verifyToken(token)
}

export default jwtMiddleware

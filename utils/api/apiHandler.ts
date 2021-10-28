import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserModel } from 'models/User'
import jwtMiddleware from 'utils/api/jwtMiddleware'
import errorHandler from 'utils/api/errorHandler'
import connectMongo from 'utils/api/connectMongo'

const apiHandler =
  (
    handler: (
      request: NextApiRequest,
      response: NextApiResponse,
      user: UserModel
    ) => Promise<void>
  ) =>
  async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      await connectMongo()
      const user: UserModel = await jwtMiddleware(request, response)

      await handler(request, response, user)
    } catch (error) {
      errorHandler(error, response)
    }
  }

export default apiHandler

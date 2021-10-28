import type { NextApiRequest, NextApiResponse } from 'next'
import apiHandler from 'utils/api/apiHandler'
import User from 'models/User'
import removeTokenCookies from 'utils/api/removeTokenCookies'

const login = apiHandler(
  async (request: NextApiRequest, response: NextApiResponse, { id }) => {
    const { token } = request.cookies

    await User.findOneAndUpdate({ _id: id }, { $pull: { tokens: token } })

    removeTokenCookies(response)
    response.end()
  }
)

export default login

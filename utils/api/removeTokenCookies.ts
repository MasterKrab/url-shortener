import type { NextApiResponse } from 'next'
import { serialize } from 'cookie'

const removeTokenCookies = (response: NextApiResponse) => {
  const cookie = serialize('token', '', {
    maxAge: -1,
    path: '/',
  })

  response.setHeader('Set-Cookie', cookie)
}

export default removeTokenCookies

import type { NextApiResponse } from 'next'

interface Errors {
  InvalidCredentials: (response: NextApiResponse) => void
  InvalidFields: (response: NextApiResponse) => void
  EmptyFields: (response: NextApiResponse) => void
  JsonWebTokenError: (response: NextApiResponse) => void
  TokenExpiredError: (response: NextApiResponse) => void
  DuplicatedHash: (response: NextApiResponse) => void
  default: (response: NextApiResponse) => void
}

const responseError = (
  response: NextApiResponse,
  status: number,
  message: string
) => response.status(status).json({ message })

const ERRORS: Errors = {
  InvalidCredentials: (response: NextApiResponse) =>
    responseError(response, 401, 'Username or password are wrong'),
  EmptyFields: (response: NextApiResponse) =>
    responseError(response, 400, 'All fields are required'),
  InvalidFields: (response: NextApiResponse) =>
    responseError(response, 400, 'Invalid fields'),
  JsonWebTokenError: (response: NextApiResponse) =>
    responseError(response, 401, 'Invalid token'),
  TokenExpiredError: (response: NextApiResponse) =>
    responseError(response, 401, 'Token expired'),
  DuplicatedHash: (response: NextApiResponse) =>
    responseError(response, 409, 'Hash id already used'),
  default: (response: NextApiResponse) =>
    responseError(response, 500, 'Internal server error'),
}

const errorHandler = (error: any, response: NextApiResponse) => {
  const normalizedError:
    | 'InvalidCredentials'
    | 'EmptyFields'
    | 'JsonWebTokenError'
    | 'TokenExpiredError'
    | 'DuplicatedHash' = error.name !== 'Error' ? error.name : error.message

  console.log(error)
  ;(ERRORS[normalizedError] || ERRORS.default)(response)
}

export default errorHandler

import redirectToLogin from 'utils/api/redirectToLogin'

const handleTokenError = (error: any) => {
  if (error.message === 'Token expired' || error.message === 'Invalid token')
    return process.browser ? redirectToLogin() : null

  throw new Error(error)
}

export default handleTokenError

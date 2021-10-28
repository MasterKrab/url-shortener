import Router from 'next/router'

const redirectToLogin = () =>
  Router.push({
    pathname: '/login',
    query: { returnUrl: Router.asPath, logout: true },
  })

export default redirectToLogin

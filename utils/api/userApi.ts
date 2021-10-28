import Router from 'next/router'
import responseHandler from 'utils/api/responseHandler'
import handleTokenError from 'utils/api/handleTokenError'

const apiCall = (
  username: string,
  password: string,
  type: 'login' | 'register'
): Promise<any> =>
  fetch(`/api/${type}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

export const login = (username: string, password: string) =>
  apiCall(username, password, 'login')
    .then(responseHandler)
    .then(() => Router.push((Router.query.returnUrl as string) || '/short'))

export const register = (username: string, password: string) =>
  apiCall(username, password, 'register')
    .then(responseHandler)
    .then(() => {
      Router.push({ pathname: '/login', query: { register: true } })
    })

const apiCallSettings = (
  type: 'change-username' | 'change-password',
  body?: object
): Promise<any> =>
  fetch(`/api/${type}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(responseHandler)
    .catch(handleTokenError)

export const changeUsername = (username: string) =>
  apiCallSettings('change-username', { username }).then(() =>
    Router.push(Router.asPath)
  )

export const changePassword = (password: string, newPassword: string) =>
  apiCallSettings('change-password', { password, newPassword })

export const logout = () =>
  fetch('api/logout').then(() => Router.push('/login'))

export const deleteAccount = () =>
  fetch('api/delete-account').then(() => Router.push('/login'))

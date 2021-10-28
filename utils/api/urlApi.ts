import { UrlModel } from 'models/Url'
import responseHandler from 'utils/api/responseHandler'
import handleTokenError from 'utils/api/handleTokenError'

interface RequestParams {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: object
}

const apiCall = (
  endpoint: string,
  { method, body }: RequestParams = {}
): Promise<any> =>
  fetch(`/api/${endpoint}`, {
    method,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: body && JSON.stringify(body),
  })
    .then(responseHandler)
    .catch(handleTokenError)

export const shortUrl = (url: string, hash: string): Promise<UrlModel> =>
  apiCall('short-url', { method: 'POST', body: { url, hash } })

export const getUserUrls = (): Promise<UrlModel[]> =>
  apiCall('urls')
    .then(({ urls }) => urls)
    .catch(handleTokenError)

export const deleteUrl = (id: string): Promise<any> =>
  apiCall('delete-url', { method: 'DELETE', body: { id } })

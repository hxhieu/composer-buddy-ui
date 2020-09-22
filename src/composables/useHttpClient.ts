import axios, { AxiosError, AxiosResponse } from 'axios'

import { IHttpResponse } from '../models'
import store from '../store'

const createClient = (headers: any = {}) => {
  const { app, auth } = store.state as any
  return axios.create({
    baseURL: `${app.apiBaseUrl}/`,
    headers: {
      ...headers,
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })
}

const parseError = (err: AxiosError<IHttpResponse<any>>) => {
  let msg = 'Unknown error'
  let status = 'UNKNOWN'
  if (err.response) {
    msg = err.response.data.error
    status = `${err.response.status} - ${err.response.statusText}`
  }
  return `${status} - ${msg}`
}

const get = async <T>(api: string): Promise<T> =>
  new Promise((resolve) => {
    createClient()
      .get<IHttpResponse<T>>(api)
      .then((result) => resolve(result.data.data))
      .catch((err: AxiosError<IHttpResponse<any>>) => {
        // TODO: Toast
        alert(parseError(err))
        resolve()
      })
  })

const post = async <T, P>(api: string, payload: P): Promise<T> =>
  new Promise((resolve) => {
    createClient(
      payload instanceof FormData
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' }
    )
      .post<IHttpResponse<T>>(api, payload)
      .then((result) => resolve(result.data.data))
      .catch((err: AxiosError<IHttpResponse<any>>) => {
        // TODO: Toast
        alert(parseError(err))
        resolve()
      })
  })

const patch = async <T, P>(api: string, payload: P): Promise<T> =>
  new Promise((resolve) => {
    createClient(
      payload instanceof FormData
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' }
    )
      .patch<IHttpResponse<T>>(api, payload)
      .then((result) => resolve(result.data.data))
      .catch((err) => {
        // TODO: Toast
        alert(parseError(err))
        resolve()
      })
  })

const del = async <T>(api: string): Promise<T> =>
  new Promise((resolve) => {
    createClient()
      .delete<IHttpResponse<T>>(api)
      .then((result) => resolve(result.data.data))
      .catch((err) => {
        // TODO: Toast
        alert(parseError(err))
        resolve()
      })
  })

export const useHttpClient = () => ({
  get,
  post,
  patch,
  del,
})

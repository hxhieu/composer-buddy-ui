import axios from 'axios'

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

const get = async <T>(api: string): Promise<T> =>
  new Promise((resolve) => {
    createClient()
      .get<IHttpResponse<T>>(api)
      .then((result) => resolve(result.data.data))
      .catch((err) => {})
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
      .catch((err) => {
        // TODO: Toast
        alert(err)
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
        alert(err)
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
        alert(err)
        resolve()
      })
  })

export const useHttpClient = () => ({
  get,
  post,
  patch,
  del,
})

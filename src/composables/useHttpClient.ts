import axios from 'axios'
import store from '../store'
import { IHttpResponse } from '../models'

const createClient = () => {
  const { app, auth } = store.state as any
  return axios.create({
    baseURL: `${app.apiBaseUrl}/`,
    headers: { Authorization: `Bearer ${auth.accessToken}` },
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
    createClient()
      .post<IHttpResponse<T>>(api, payload)
      .then((result) => resolve(result.data.data))
      .catch((err) => {
        // TODO: Toast
        alert(err)
        resolve()
      })
  })

const put = async <T, P>(api: string, payload: P): Promise<T> =>
  new Promise((resolve) => {
    createClient()
      .put<IHttpResponse<T>>(api, payload)
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
  put,
  del,
})

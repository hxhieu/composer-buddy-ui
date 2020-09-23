export interface IHttpResponse<T> {
  error: string
  data: T
}

export interface ILoginRequest {
  user: string
  password: string
}

export interface ICreateProjectResult {
  name: string
}

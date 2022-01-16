import { AxiosRequestConfig } from 'axios'

export type IAxiosRequestConfig = AxiosRequestConfig
export interface IFlatMap {
  [key: string]: unknown
}

export interface IResponse<T> {
  msg: string
  code: number
  data: T
}

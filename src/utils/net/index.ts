import Axios from 'axios'
import { IFlatMap, IAxiosRequestConfig } from '@/types'

const prefix = '/api'
const axios = Axios.create({
  baseURL: prefix
})

axios.interceptors.request.use(
  (onFulfilled) => {
    const token = localStorage.getItem('token')
    if (token) {
      onFulfilled.headers = { ...onFulfilled.headers, token: token }
    }
    return onFulfilled
  },
  (onRejected) => {
    return Promise.reject(onRejected)
  }
)

axios.interceptors.response.use(
  (onFulfilled) => {
    //TODO:
    return onFulfilled
  },
  (onRejected) => {
    return Promise.reject(onRejected)
  }
)

const joinQueryStringToUri = (uri: string, json: IFlatMap) => {
  const url = parseQueryString(json) ? uri + '?' + parseQueryString(json) : uri
  return url
}

const parseQueryString = (querys: IFlatMap): string => {
  if (!querys) return ''
  const tempArea = []
  for (const key in querys) {
    tempArea.push(key + '=' + querys[key])
  }
  const res = tempArea.join('&')
  return res
}

const _get = <T>(uri: string, querys: IFlatMap, config?: IAxiosRequestConfig) => {
  return axios
    .get(joinQueryStringToUri(uri, querys), config)
    .then<T>((res) => res.data)
    .catch((error) => Promise.reject(error.response))
}

const _post = <T>(uri: string, payloads: unknown, config?: IAxiosRequestConfig) => {
  return axios
    .post(uri, payloads, config)
    .then<T>((res) => res.data)
    .catch((error) => Promise.reject(error.response))
}

const _delete = <T>(uri: string, params: IFlatMap, config?: IAxiosRequestConfig) => {
  return axios
    .delete(joinQueryStringToUri(uri, params), config)
    .then<T>((res) => res.data)
    .catch((error) => Promise.reject(error.response))
}

const _put = <T>(uri: string, payloads: IFlatMap, config?: IAxiosRequestConfig) => {
  return axios
    .put(uri, payloads, config)
    .then<T>((res) => res.data)
    .catch((error) => Promise.reject(error.response))
}

const _patch = <T>(uri: string, payloads: unknown, config?: IAxiosRequestConfig) => {
  return axios
    .patch(uri, payloads, config)
    .then<T>((res) => res.data)
    .catch((error) => error.response)
}

const _download = (uri: string, params: IFlatMap, config?: IAxiosRequestConfig) => {
  return axios
    .get(joinQueryStringToUri(uri, params), config)
    .then((res) => res)
    .catch((error) => error.response)
}

export { _get, _post, _delete, _put, _patch, _download, prefix, joinQueryStringToUri }

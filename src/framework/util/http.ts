import axios from 'axios'
// import Cookies from "js-cookie";
import { getToken } from './get-token'

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

http.interceptors.request.use(
  (config: any) => {
    const token = getToken()
    config.headers = {
      ...config.headers,
      Authorization: `${token ? token : 'PUBLIC_AUTHORIZATION_TOKEN'}`,
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    if (error?.response?.status === 401 || error?.response?.status === '401') {
      window.location.href = '/'
    }
    return Promise.reject(error)
  },
)

export default http

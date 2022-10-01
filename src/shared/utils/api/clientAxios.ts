import axios from 'axios'
import { API } from '../constant/api'
import { getAuthToken } from '../storage/auth'

const API_URL = API

const request = axios.create({ baseURL: API_URL })

request.interceptors.request.use(async (config: any) => {
  const token = getAuthToken()
  config.headers['Authorization'] = `Bearer ${token}`
  config.headers['Content-Type'] = 'application/json'
  return config
})

request.interceptors.response.use(async (response: any) => {
  return response
})

export default request

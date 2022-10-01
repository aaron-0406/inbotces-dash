import axiosClient from '../utils/api/clientAxios'

const api = axiosClient.getUri()

const urlApi = `${api}/auth/url`

export const getAuthUrl = async () => {
  return await axiosClient.get(urlApi)
}

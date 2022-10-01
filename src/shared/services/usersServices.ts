import axiosClient from '../utils/api/clientAxios'

const api = axiosClient.getUri()

const urlApi = `${api}/team-member`

export const getUsersAxios = async () => {
  return await axiosClient.get(urlApi)
}

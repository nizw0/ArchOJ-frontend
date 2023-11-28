import { fetchAuthSession } from 'aws-amplify/auth'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: () => true,
})

export const getAxiosInstance = async () => {
  const instance = axiosInstance

  const { idToken } = (await fetchAuthSession()).tokens
  instance.interceptors.request.use(function (config) {
    config.headers.Authorization = idToken ? `Bearer ${idToken}` : ''
    return config
  })

  return instance
}

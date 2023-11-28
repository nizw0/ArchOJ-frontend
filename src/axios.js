import { fetchAuthSession } from 'aws-amplify/auth'
import axios from 'axios'

export const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: () => true,
  })

  instance.interceptors.request.use(async (config) => {
    const { idToken } = (await fetchAuthSession()).tokens
    config.headers.Authorization = idToken ? `Bearer ${idToken}` : ''
    return config
  })

  return instance
}

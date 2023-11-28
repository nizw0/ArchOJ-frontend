import axios from 'axios'
import { handleFetchAuthSession } from './api'

export const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.request.use(async (config) => {
    const session = await handleFetchAuthSession()
    const idToken = session?.tokens?.idToken ?? null
    config.headers.Authorization = idToken ? `Bearer ${idToken}` : ''

    return config
  })

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  return instance
}

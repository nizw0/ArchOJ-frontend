import { axiosInstance } from '@/axios'

const path = '/statistics'

export async function listUsersSolveCounts() {
  try {
    const { data } = await axiosInstance.get(`${path}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

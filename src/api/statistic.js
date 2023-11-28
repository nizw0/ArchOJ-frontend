import { getAxiosInstance } from '@/axios'

const axios = getAxiosInstance()
const path = '/statistics'

export async function listUsersSolveCounts() {
  try {
    const { data } = await axios.get(`${path}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

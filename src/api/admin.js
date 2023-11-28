import { getAxiosInstance } from '@/axios'

const axios = await getAxiosInstance()
const path = '/admin'

export async function importUsers(file) {
  try {
    const formData = new FormData('file', file)

    const { data } = await axios.post(`${path}/import-users`, formData)
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function initUsers() {
  try {
    const { data } = await axios.post(`${path}/init-users`)
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function importProblems(file) {
  try {
    const formData = new FormData('file', file)

    const { data } = await axios.post(`${path}/import-problems`, formData)
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

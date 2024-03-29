import { getAxiosInstance } from '@/axios'

const axios = getAxiosInstance()
const path = '/admin'

export async function importUsers(file) {
  try {
    const { data } = await axios.post(`${path}/import-users`, file, {
      headers: {
        'Content-Type': 'text/csv',
      },
    })
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
    const { data } = await axios.post(`${path}/import-problems`, file, {
      headers: {
        'Content-Type': 'application/zip',
      },
    })
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function importProblemsFromRepo(url) {
  try {
    console.log(url)
    return null
  } catch (err) {
    console.log(err)
    throw err
  }
}

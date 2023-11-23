import { axiosInstance } from '@/axios'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/admin'

export async function importUsers(file) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const formData = new FormData('file', file)

    const { data } = await axiosInstance.post(
      `${path}/import-users`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function initUsers() {
  try {
    const { idToken } = (await fetchAuthSession()).tokens

    const { data } = await axiosInstance.post(
      `${path}/init-users`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function importProblems(file) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const formData = new FormData('file', file)

    const { data } = await axiosInstance.post(
      `${path}/import-problems`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    return data.message
  } catch (err) {
    console.log(err)
    throw err
  }
}

import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/problems/testcases'

export async function listTestcases() {
  try {
    const response = await axiosInstance.get(`${path}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export async function getTestcaseById(id) {
  try {
    const response = await axiosInstance.get(`${path}/${id}`)
    return response.data
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function createTestcase(testcase) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.post(`${path}`, testcase, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

export async function deleteTestcase(id) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.delete(`${path}/${id}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

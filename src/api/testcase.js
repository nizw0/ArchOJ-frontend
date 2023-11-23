import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const basePath = '/problems'
const path = 'testcases'

export async function listTestcases(problemId) {
  const { idToken } = (await fetchAuthSession()).tokens
  try {
    const { data } = await axiosInstance.get(
      `${basePath}/${problemId}/${path}`,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function getTestcase(problemId, testcaseId) {
  try {
    const { data } = await axiosInstance.get(
      `${basePath}/${problemId}/${path}/${testcaseId}`
    )
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function createTestcase({ problemId, testcase }) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.post(
      `${basePath}/${problemId}/${path}`,
      testcase,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function deleteTestcase(problemId, testcaseId) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.delete(
      `${basePath}/${problemId}/${path}/${testcaseId}`,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

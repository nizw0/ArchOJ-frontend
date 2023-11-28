import { getAxiosInstance } from '@/axios'

const axios = getAxiosInstance()
const basePath = '/problems'
const path = 'testcases'

export async function listTestcases(problemId) {
  try {
    const { data } = await axios.get(`${basePath}/${problemId}/${path}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function getTestcase(problemId, testcaseId) {
  try {
    const { data } = await axios.get(
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
    const { data } = await axios.post(
      `${basePath}/${problemId}/${path}`,
      testcase
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
    const { data } = await axios.delete(
      `${basePath}/${problemId}/${path}/${testcaseId}`
    )
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/problems'

export async function listProblems() {
  try {
    const response = await axiosInstance.get(`${path}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export async function getProblemById(id) {
  try {
    const response = await axiosInstance.get(`${path}/${id}`)
    return response.data
  } catch (err) {
    console.log(err.response.data.message)
    throw err
  }
}

export async function adminGetProblemById(id) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const response = await axiosInstance.get(`${path}/${id}`, {
      headers: { Authorization: `Bearer ${idToken}` },
    })
    return response.data
  } catch (err) {
    console.log(err.response.data.message)
    throw err
  }
}

export async function createProblem(problem) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.post(`${path}`, problem, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

export async function updateProblem(problem) {
  const { id } = problem
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.patch(`${path}/${id}`, problem, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

export async function deleteProblem(id) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.delete(`${path}/${id}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

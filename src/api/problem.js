import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/problems'

export async function listProblems() {
  try {
    const { data } = await axiosInstance.get(`${path}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function getProblemById(id) {
  try {
    const { data } = await axiosInstance.get(`${path}/${id}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function adminGetProblemById(id) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.get(`${path}/${id}`, {
      headers: { Authorization: `Bearer ${idToken}` },
    })
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function createProblem(problem) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.post(`${path}`, problem, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function updateProblem(problem) {
  try {
    const { id } = problem
    const { idToken } = (await fetchAuthSession()).tokens
    const data = await axiosInstance.patch(`${path}/${id}`, problem, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function deleteProblem(id) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.delete(`${path}/${id}`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

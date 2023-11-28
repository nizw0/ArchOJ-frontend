import { getAxiosInstance } from '@/axios.js'

const axios = getAxiosInstance()
const path = '/problems'

export async function listProblems() {
  try {
    const { data } = await axios.get(`${path}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function getProblemById(id) {
  try {
    const { data } = await axios.get(`${path}/${id}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function adminGetProblemById(id) {
  try {
    const { data } = await axios.get(`${path}/${id}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function createProblem(problem) {
  try {
    const { data } = await axios.post(`${path}`, problem)
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
    const data = await axios.patch(`${path}/${id}`, problem)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function deleteProblem(id) {
  try {
    const { data } = await axios.delete(`${path}/${id}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

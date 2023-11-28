import { getAxiosInstance } from '@/axios.js'

const axios = await getAxiosInstance()
const path = '/submissions'

export async function listSubmissions() {
  try {
    const { data } = await axios.get(`${path}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function getSubmissionById(id) {
  try {
    const { data } = await axios.get(`${path}/${id}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function createSubmission(submission) {
  try {
    const { data } = await axios.post(`${path}`, submission)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function deleteSubmission(id) {
  try {
    const { data } = await axios.delete(`${path}/${id}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

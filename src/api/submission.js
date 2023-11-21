import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/submissions'

export async function listSubmissions() {
  try {
    const response = await axiosInstance.get(`${path}`)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function getSubmissionById(id) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const response = await axiosInstance.get(`${path}/${id}`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
    return response.data
  } catch (err) {
    console.log(err.response.data.message)
    throw err
  }
}

export async function createSubmission(submission) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.post(`${path}`, submission, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

export async function deleteSubmission(id) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.delete(`${path}/${id}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

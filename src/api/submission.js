import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/submissions'

export async function listSubmissions() {
  try {
    const { data } = await axiosInstance.get(`${path}`)
    return data.data
  } catch (err) {
    const { data } = err.response
    console.log(data.message)
    throw data
  }
}

export async function getSubmissionById(id) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.get(`${path}/${id}`, {
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

export async function createSubmission(submission) {
  try {
    const { idToken } = (await fetchAuthSession()).tokens
    const { data } = await axiosInstance.post(`${path}`, submission, {
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

export async function deleteSubmission(id) {
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

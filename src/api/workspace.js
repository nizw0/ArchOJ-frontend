import { axiosInstance } from '@/axios.js'
import { fetchAuthSession } from 'aws-amplify/auth'

const path = '/workspaces'

export async function getWorkspaceByAuth() {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.get(`${path}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

export async function createWorkspace() {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.post(
    `${path}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  )
  return response.data
}

export async function deleteWorkspace(id) {
  const { idToken } = (await fetchAuthSession()).tokens
  const response = await axiosInstance.delete(`${path}/${id}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.data
}

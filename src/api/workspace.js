import { getAxiosInstance } from '@/axios.js'

const axios = await getAxiosInstance()
const path = '/workspaces'

export async function getWorkspaceByAuth() {
  const response = await axios.get(`${path}`)
  return response.data
}

export async function createWorkspace() {
  const response = await axios.post(`${path}`)
  return response.data
}

export async function deleteWorkspace(id) {
  const response = await axios.delete(`${path}/${id}`)
  return response.data
}

import { getAxiosInstance } from '@/axios.js'

const axios = getAxiosInstance()
const path = '/workspaces'

export async function getWorkspaceByAuth() {
  const { data } = await axios.get(`${path}`)
  return data
}

export async function createWorkspace() {
  const { data } = await axios.post(`${path}`)
  return data
}

export async function deleteWorkspace(id) {
  const { data } = await axios.delete(`${path}/${id}`)
  return data
}

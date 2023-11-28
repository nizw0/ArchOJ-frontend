import { getAxiosInstance } from '@/axios.js'

const axios = getAxiosInstance()
const path = '/workspaces'

export function getWorkspaceByAuth() {
  const { data } = axios.get(`${path}`)
  return data
}

export function createWorkspace() {
  const { data } = axios.post(`${path}`)
  return data.data
}

export function deleteWorkspace(id) {
  const { data } = axios.delete(`${path}/${id}`)
  return data.data
}

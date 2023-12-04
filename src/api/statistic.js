import { getAxiosInstance } from '@/axios'

const axios = getAxiosInstance()
const path = '/statistics'

export async function getProblemCounts() {
  try {
    const { data } = await axios.get(`${path}`, {
      params: {
        action: 'getProblemCounts',
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function listUsersSolveCounts() {
  try {
    const { data } = await axios.get(`${path}`, {
      params: {
        action: 'listUsersSolveCounts',
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function getUsersSolveCounts(userId) {
  try {
    const { data } = await axios.get(`${path}`, {
      params: {
        action: 'getUserSolveCounts',
        userId,
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function getUserAccessRate(userId) {
  try {
    const { data } = await axios.get(`${path}`, {
      params: {
        action: 'getUserAccessRate',
        userId,
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

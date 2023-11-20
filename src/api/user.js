import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth'

export async function getUser() {
  try {
    const user = await getCurrentUser()
    return user
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes()
    return userAttributes
  } catch (err) {
    console.log(err)
    return {}
  }
}

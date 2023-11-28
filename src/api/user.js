import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
  updateUserAttributes,
} from 'aws-amplify/auth'

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

export async function handleUpdateUserAttributes({ name, email }) {
  try {
    await updateUserAttributes({ userAttributes: { name, email } })
  } catch (err) {
    console.log(err)
  }
}

export async function handleFetchAuthSession() {
  try {
    return await fetchAuthSession()
  } catch (err) {
    return null
  }
}

import {
  autoSignIn,
  confirmResetPassword,
  confirmSignIn,
  getCurrentUser,
  resetPassword,
  signIn,
  signOut,
  updatePassword,
} from 'aws-amplify/auth'

export async function getUser() {
  try {
    const user = await getCurrentUser()
    return user
  } catch (err) {
    console.log(err)
  }
}

export async function handleSignIn({
  username,
  password = null,
  newPassword = null,
  confirmationCode = null,
}) {
  try {
    const { isSignedIn, nextStep } = await signIn({
      username,
      password: password || newPassword,
    })
    if (isSignedIn) return null

    console.log(nextStep.signInStep)
    switch (nextStep.signInStep) {
      case 'DONE': {
        return null
      }
      case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED': {
        if (newPassword == null) return nextStep.signInStep

        const { isSignedIn } = await confirmSignIn({
          challengeResponse: newPassword,
        })
        if (isSignedIn) return null
        break
      }
      case 'RESET_PASSWORD': {
        if (confirmationCode == null) return nextStep.signInStep

        await confirmResetPassword({
          username,
          confirmationCode,
          newPassword,
        })
        return 'SIGN_IN'
      }
    }
  } catch (err) {
    console.log('error signing in', err)
  }
}

export async function handleAutoSignIn() {
  try {
    const signInOutput = await autoSignIn()
    console.log(signInOutput)
    // handle sign-in steps
  } catch (err) {
    console.log(err)
  }
}

export async function handleSignOut(global = false) {
  try {
    await signOut({ global })
  } catch (err) {
    console.log('error signing out: ', err)
  }
}

export async function handleResetPassword(username) {
  try {
    const { isPasswordReset, nextStep } = await resetPassword({ username })
    if (isPasswordReset) return null

    console.log(nextStep.resetPasswordStep)
    switch (nextStep.resetPasswordStep) {
      case 'DONE': {
        console.log('Successfully reset password.')
        return null
      }
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE': {
        const codeDeliveryDetails = nextStep.codeDeliveryDetails
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        )
        return nextStep.resetPasswordStep
      }
    }
  } catch (err) {
    console.log('error reseting: ', err)
  }
}

export async function handleConfirmResetPassword({
  username,
  confirmationCode,
  newPassword,
}) {
  try {
    await confirmResetPassword({ username, confirmationCode, newPassword })
  } catch (err) {
    console.log(err)
  }
}

export async function handleUpdatePassword(oldPassword, newPassword) {
  try {
    await updatePassword({ oldPassword, newPassword })
  } catch (err) {
    console.log(err)
  }
}

import {
  autoSignIn,
  confirmResetPassword,
  confirmSignIn,
  resetPassword,
  signIn,
  signOut,
  updatePassword,
} from 'aws-amplify/auth'
import { redirect } from 'react-router'

export async function handleSignIn({ username, password, newPassword = '' }) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password })
    if (isSignedIn) return true

    console.log(nextStep.signInStep)
    switch (nextStep.signInStep) {
      case 'DONE': {
        return true
      }
      case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED': {
        if (newPassword === '') return redirect('/complete-password')

        const response = await confirmSignIn({ challengeResponse: newPassword })
        if (response.isSignedIn) return true
        break
      }
      default: {
        break
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

export async function handleSignOut({ global = false }) {
  try {
    await signOut({ global })
  } catch (err) {
    console.log('error signing out: ', err)
  }
}

export async function handleResetPassword(username) {
  try {
    const output = await resetPassword({ username })
    handleResetPasswordNextSteps(output)
  } catch (error) {
    console.log(error)
  }
}

function handleResetPasswordNextSteps(output) {
  const { nextStep } = output
  switch (nextStep.resetPasswordStep) {
    case 'CONFIRM_RESET_PASSWORD_WITH_CODE': {
      const codeDeliveryDetails = nextStep.codeDeliveryDetails
      console.log(
        `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
      )
      confirmResetPassword()
      // Collect the confirmation code from the user and pass to confirmResetPassword.
      break
    }
    case 'DONE': {
      console.log('Successfully reset password.')
      break
    }
  }
}

export async function handleConfirmResetPassword({
  username,
  confirmationCode,
  newPassword,
}) {
  try {
    await confirmResetPassword({ username, confirmationCode, newPassword })
  } catch (error) {
    console.log(error)
  }
}

export async function handleUpdatePassword(oldPassword, newPassword) {
  try {
    await updatePassword({ oldPassword, newPassword })
  } catch (err) {
    console.log(err)
  }
}

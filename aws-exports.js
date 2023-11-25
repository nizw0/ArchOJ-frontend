/** @type {import('aws-amplify').ResourcesConfig} */
export default {
  Auth: {
    Cognito: {
      userPoolId: process.env.USER_POOL_ID,
      userPoolClientId: process.env.USER_POOL_CLIENT_ID,
    },
  },
}

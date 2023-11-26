/** @type {import('aws-amplify').ResourcesConfig} */
export default {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.USER_POOL_ID,
      userPoolClientId: import.meta.env.USER_POOL_CLIENT_ID,
    },
  },
}

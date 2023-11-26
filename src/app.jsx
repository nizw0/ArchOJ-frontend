import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Amplify } from 'aws-amplify'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { RecoilRoot } from 'recoil'
import amplifyConfig from './aws-exports.js'
import Loading from './components/loading'
import { queryClient } from './query'
import { router } from './router'

Amplify.configure(amplifyConfig)
console.log(amplifyConfig.Auth.Cognito)
console.log(process.env)
console.log(import.meta.env)

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </RecoilRoot>
  )
}

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { RecoilRoot } from 'recoil'
import Loading from './components/loading'
import { queryClient } from './query'
import { router } from './router'
import StateLayer from './state'

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <StateLayer>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </StateLayer>
      </Suspense>
    </RecoilRoot>
  )
}

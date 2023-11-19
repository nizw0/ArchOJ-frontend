import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Loading from './components/loading'
import { router } from './router'

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </RecoilRoot>
  )
}

import { signInState } from '@/atoms'
import DashboardStats from '@/components/dashboard-stats'
import DashboardTable from '@/components/dashboard-table'
import { useListSubmissions } from '@/query'
import { useRecoilValue } from 'recoil'

export default function Home() {
  const isSignIn = useRecoilValue(signInState)
  // TODO: API for dashboard features.
  const { isSuccess, data: submissions } = useListSubmissions()

  return (
    <div className="mx-auto bg-white">
      <div className="px-6 sm:space-y-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {!isSignIn ? (
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to ArchOJ.
            </h2>
          ) : (
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome back! User.
            </h2>
          )}
        </div>
        {isSignIn && isSuccess && (
          <>
            <DashboardStats />
            <DashboardTable submissions={submissions} />
          </>
        )}
      </div>
    </div>
  )
}

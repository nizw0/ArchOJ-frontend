import { signInState } from '@/atoms'
import DashboardStats from '@/components/dashboard-stats'
import DashboardTable from '@/components/dashboard-table'
import { useRecoilValue } from 'recoil'

export default function Home() {
  const isSignIn = useRecoilValue(signInState)

  return (
    <div className="mx-auto bg-white">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {isSignIn ? 'Welcome back! User.' : 'Welcome to ArchOJ.\n'}
          </h2>
        </div>
        {isSignIn && (
          <>
            <DashboardStats />
            <DashboardTable />
          </>
        )}
      </div>
    </div>
  )
}

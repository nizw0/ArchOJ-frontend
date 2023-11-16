import DashboardStats from '@/components/dashboard-stats'
import DashboardTable from '@/components/dashboard-table'

export default function Home() {
  return (
    <div className="mx-auto bg-white">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome back! User.
          </h2>
        </div>
        <DashboardStats />
        <DashboardTable />
      </div>
    </div>
  )
}

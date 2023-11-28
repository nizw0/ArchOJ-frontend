const data = {
  solve: 237,
  total: 500,
  accessRate: 0.63,
}

export default function DashboardStats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Solve counts</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {data.solve}
              <p className="text-sm text-gray-500">/{data.total}</p>
            </div>
          </dd>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">
            Accepted Rates
          </dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {data.accessRate.toFixed(2) * 100}%
            </div>
          </dd>
        </div>
      </dl>
    </div>
  )
}

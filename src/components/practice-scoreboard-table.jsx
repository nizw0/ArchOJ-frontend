const users = Array.from({ length: 100 }, (_, i) => {
  const v = {
    name: 'admin',
    solveProblemsCount: 5,
    totalProblemsCount: 1000,
  }
  return v
})

export default function PracticeScoreboardTable({
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Rank
          </h1>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                scope="col"
              >
                Order
              </th>
              <th
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                Name
              </th>
              <th
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                scope="col"
              >
                Accepted Counts
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {users
              .slice(
                (currentPage - 1) * 10,
                Math.min(users.length, currentPage * 10)
              )
              .map((user, i) => (
                <tr className="hover:bg-gray-100" key={i + 1}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm text-gray-500 sm:w-auto sm:max-w-none sm:pl-0">
                    {(currentPage - 1) * 10 + i + 1}
                  </td>
                  <td className="px-3 py-4 text-sm font-medium text-gray-900 sm:text-gray-500">
                    {user.name}
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {user.solveProblemsCount}/{user.totalProblemsCount}
                    </dd>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {user.solveProblemsCount}/{user.totalProblemsCount}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

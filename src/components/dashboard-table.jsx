import { clsx } from 'clsx'

const submissions = Array.from({ length: 5 }, (_, i) => {
  const v = {
    id: '1',
    problemId: '1',
    problemTitle: 'MYSQL n+1 problem',
    userId: '1',
    language: 'CPP',
    runtime: '2.13s',
    status: 'Accepted',
    time: '5 days ago',
  }
  v.id = i + 1
  return v
})

export default function DashboardTable() {
  return (
    <div className="mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Latest activity
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:table-cell"
                      scope="col"
                    >
                      Time Submitted
                    </th>
                    <th
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Problem Name
                    </th>
                    <th
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Status
                    </th>
                    <th
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Runtime
                    </th>
                    <th
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Language
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {submissions.map((submission) => (
                    <tr key={submission.id}>
                      <td className="hidden whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:table-cell">
                        {submission.time}
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-gray-900 sm:text-gray-500">
                        {submission.problemTitle}
                      </td>
                      <td
                        className={clsx(
                          'px-3 py-4 text-sm font-medium',
                          submission.status === 'Accepted'
                            ? 'text-green-600'
                            : 'text-red-600'
                        )}
                      >
                        {submission.status}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {submission.runtime}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {submission.language}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

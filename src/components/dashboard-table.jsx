import { clsx } from 'clsx'
import { useEffect, useState } from 'react'

export default function DashboardTable({ submissions }) {
  const [latestSubmissions, setLatestSubmissions] = useState([])

  useEffect(() => {
    if (submissions.length)
      setLatestSubmissions(
        submissions.sort((a, b) => a.timestamp > b.timestamp).slice(0, 5)
      )
  }, [submissions])

  return (
    <div className="mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">
            Latest activity
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5">
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
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:hidden"
                      scope="col"
                    >
                      Env
                    </th>
                    <th
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                      scope="col"
                    >
                      Runtime
                    </th>
                    <th
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                      scope="col"
                    >
                      Language
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {latestSubmissions.map((submission) => (
                    <tr key={submission.id}>
                      <td className="hidden whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:table-cell">
                        {new Date(submission.timestamp).toLocaleString()}
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-gray-900 sm:text-gray-500">
                        {submission.problemName}
                      </td>
                      <td
                        className={clsx(
                          'px-3 py-4 text-sm font-medium',
                          submission.result === 'Accepted'
                            ? 'text-green-600'
                            : submission.status
                              ? 'text-red-600'
                              : 'text-gray-600'
                        )}
                      >
                        {submission.status ? submission.result : 'pending'}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {submission.runtime}
                        <dl className="font-normal sm:hidden">
                          <dt className="sr-only sm:hidden">Language</dt>
                          <dd className="mt-1 truncate text-gray-500 lg:hidden">
                            {submission.language}
                          </dd>
                        </dl>
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                        {submission.language}
                        <br />
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

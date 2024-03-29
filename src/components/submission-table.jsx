import { clsx } from 'clsx'
import { useNavigate } from 'react-router'

export default function SubmissionTable({
  currentPage,
  setCurrentPage,
  submissions,
}) {
  const navigate = useNavigate()

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Submissions
            </h1>
          </div>
        </div>
        <div className="-mx-4 mt-8 sm:-mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  className="hidden px-4 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
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
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  scope="col"
                >
                  Runtime
                </th>
                <th
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  scope="col"
                >
                  Language
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {submissions &&
                submissions
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .slice(
                    (currentPage - 1) * 10,
                    Math.min(submissions.length, currentPage * 10)
                  )
                  .map((submission) => (
                    <tr
                      className="hover:bg-gray-100"
                      key={submission.id}
                      onClick={() => navigate(`${submission.id}`)}
                    >
                      <td className="hidden w-full max-w-0 p-4 text-sm text-gray-500 sm:table-cell sm:w-auto sm:max-w-none">
                        {new Date(submission.timestamp).toLocaleString()}
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-gray-900 sm:text-gray-500">
                        {submission.problemName}
                        <dd className="mt-1 truncate text-gray-500 sm:hidden">
                          {new Date(submission.timestamp).toLocaleString()}
                        </dd>
                      </td>
                      <td
                        className={clsx(
                          'px-3 py-4 text-sm font-medium',
                          submission.result === 'Accepted'
                            ? 'text-green-600'
                            : 'text-red-600'
                        )}
                      >
                        {submission.result || 'pending'}
                        <dl className="font-normal lg:hidden">
                          <dt className="sr-only">Runtime</dt>
                          <dt className="sr-only sm:hidden">Language</dt>
                          <dd className="mt-1 truncate text-gray-500 lg:hidden">
                            {submission.runtime}
                          </dd>
                          <dd className="mt-1 truncate text-gray-500 lg:hidden">
                            {submission.language}
                          </dd>
                        </dl>
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                        {submission.runtime}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                        {submission.language}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

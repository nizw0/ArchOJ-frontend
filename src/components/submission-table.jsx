import { clsx } from 'clsx'

const submissions = Array.from({ length: 10 }, (_, i) => {
  const v = {
    id: '1',
    problemId: '1',
    problemTitle: 'MYSQL n+1 problem',
    userId: '1',
    language: 'c',
    runtime: '1 ms',
    status: 'Accepted',
    time: '5 days ago',
  }
  v.id = i + 1
  return v
})

export default function SubmissionTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Submissions
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                className="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
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
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td className="hidden w-full max-w-0 py-4 pl-4 pr-3 text-sm text-gray-500 sm:table-cell sm:w-auto sm:max-w-none sm:pl-0">
                  {submission.time}
                </td>
                <td className="px-3 py-4 text-sm font-medium text-gray-900 sm:text-gray-500">
                  {submission.problemTitle}
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">
                    {submission.time}
                  </dd>
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
  )
}

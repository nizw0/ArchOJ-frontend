import { useListTestcases } from '@/query'
import clsx from 'clsx'
import { useNavigate, useParams } from 'react-router'
import Loading from './loading'

export default function TestcaseTable({ isSlideOpen, setIsSlideOpen }) {
  const { problemId } = useParams()
  const { isSuccess, data: testcases } = useListTestcases(problemId)
  const navigate = useNavigate()

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="sm:flex sm:items-center">
            <div className="flex justify-between sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Testcases
              </h1>
              <button
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                onClick={() => setIsSlideOpen(!isSlideOpen)}
              >
                New
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="-mx-4 mt-4 sm:-mx-0">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    scope="col"
                  >
                    Id
                  </th>
                  <th
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Input
                  </th>
                  <th
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Output
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {isSuccess &&
                  testcases.map((testcase) => (
                    <tr
                      key={testcase.id}
                      className={clsx(
                        testcase.isSample
                          ? 'bg-gray-200 hover:bg-gray-300'
                          : 'hover:bg-gray-100'
                      )}
                      onClick={() => navigate(testcase.id)}
                    >
                      <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-gray-900 sm:table-cell sm:w-1/12">
                        {testcase.id}
                      </td>
                      <td className="max-w-0 truncate whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-500 sm:w-1/2">
                        {testcase.input}
                      </td>
                      <td className="max-w-0 truncate whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:w-1/2">
                        {testcase.output}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

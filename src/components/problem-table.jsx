import { adminState } from '@/atoms'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

export default function ProblemTable({
  problems,
  isSlideOpen,
  setIsSlideOpen,
  currentPage,
  setCurrentPage,
}) {
  const isAdmin = useRecoilValue(adminState)
  const navigate = useNavigate()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Problems
          </h1>
        </div>
        {isAdmin && (
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
              onClick={() => setIsSlideOpen(!isSlideOpen)}
            >
              New
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="-mx-4 mt-4 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                scope="col"
              >
                Id
              </th>
              <th
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                Name
              </th>
              <th
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                scope="col"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {problems.length ? (
              problems
                .slice(
                  (currentPage - 1) * 10,
                  Math.min(problems.length, currentPage * 10)
                )
                .map((problem) => (
                  <tr
                    className="hover:bg-gray-100"
                    key={problem.id}
                    onClick={() => navigate(`${problem.id}`)}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                      {problem.id.substring(0, 8)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-500">
                      {problem.name}
                    </td>
                    <td className="hidden max-w-sm truncate whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {problem.description}
                    </td>
                  </tr>
                ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router'

const problems = Array.from({ length: 5 }, (_, i) => {
  const v = {
    id: i + 1,
    input: '1\n5 3',
    output: '9',
  }
  return v
})

export default function TestcaseTable() {
  const navigate = useNavigate()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Testcases
          </h1>
        </div>
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
                Input
              </th>
              <th
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                scope="col"
              >
                Output
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {problems.map((problem) => (
              <tr
                className="hover:bg-gray-100"
                key={problem.id}
                onClick={() => navigate(`${problem.id}`)}
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                  {problem.id}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-500">
                  {problem.input}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {problem.output}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

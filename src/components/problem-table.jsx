const problems = Array.from({ length: 10 }, (_, i) => {
  const v = {
    id: i + 1,
    name: 'MYSQL n+1 problem',
    description: 'This is a SQL problem',
    tags: 'Array, String',
  }
  return v
})

export default function ProblemTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Problems
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
          >
            Upload
          </button>
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
                Title
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
            {problems.map((problem) => (
              <tr className="hover:bg-gray-100" key={problem.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                  {problem.id}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-500">
                  {problem.name}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {problem.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

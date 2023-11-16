const problems = [
  {
    id: 1,
    name: 'A simple Question',
    code: 'A',
  },
]

const teams = [
  {
    rank: '1',
    name: 'Developer',
    score: '100',
    solves: [
      {
        status: 'Accepted',
      },
    ],
  },
]

export default function CompetitionScoreboardTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Scoreboard
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    scope="col"
                  >
                    Rank
                  </th>
                  <th
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Team
                  </th>
                  <th
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Score
                  </th>
                  {problems.map((problem) => (
                    <th
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                      key={problem.id}
                      scope="col"
                    >
                      {problem.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {teams.map((team) => (
                  <tr className="divide-x divide-gray-200" key={team.score}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                      {team.rank}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {team.name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {team.score}
                    </td>
                    {team.solves.map((solve) => (
                      <td
                        className="whitespace-nowrap p-4 text-sm text-gray-500"
                        key={team.name}
                      >
                        {solve.status}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

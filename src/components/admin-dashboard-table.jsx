import { useImportUsers, useInitUsers } from '@/query'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const actions = [
  {
    id: '1',
    name: "Initiate users' environments",
    comment: 'This action would create env for users.',
    useExec: useInitUsers,
  },
  {
    id: '2',
    name: 'Import users by csv file',
    comment: 'This action would create users by the csv file given.',
    useExec: useImportUsers,
  },
  {
    id: '3',
    name: 'Import problems',
    comment: 'This action would import problems you upload.',
    useExec: () => {},
  },
]

export default function AdminDashboardTable() {
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-6 text-gray-900">
        Admin Dashboard
      </h1>
      <ul
        className="-mx-2 mt-8 divide-y divide-gray-100 rounded-lg border-2 border-gray-100"
        role="list"
      >
        {actions.map((action) => (
          <li
            className="relative flex justify-between gap-x-6 px-2 py-5 hover:shadow-md"
            key={action.id}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 ">
                  <Link to={`/action/${action.id}`}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {action.name}
                  </Link>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  {action.comment}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

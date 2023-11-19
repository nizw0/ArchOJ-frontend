import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link, useParams } from 'react-router-dom'

const actions = [
  {
    name: 'Create a new enviroment',
    comment: 'This action would create a new app.',
  },
]

export default function AdminDashboardTable() {
  const { actionId } = useParams()

  return (
    <div>
      <h1 className="text-2xl font-semibold leading-6 text-gray-900">
        Admin Dashboard
      </h1>
      <ul
        className="-mx-2 mt-4 divide-y divide-gray-100 rounded-lg border-2 border-gray-100 px-2 hover:shadow-md"
        role="list"
      >
        {actions.map((action) => (
          <li
            className="relative flex justify-between gap-x-6 py-5"
            key={action.comment}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 ">
                  <Link to={`/action/${actionId}`}>
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

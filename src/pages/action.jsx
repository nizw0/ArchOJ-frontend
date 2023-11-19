import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const actions = [
  {
    id: '1',
    name: 'Create a new enviroment',
    comment: 'This action would create a new app.',
  },
]

export default function Action() {
  const { actionId } = useParams()
  const [action, setAction] = useState({})

  useEffect(() => {
    setAction(actions.find((action) => action.id === actionId))
  }, [actionId, action, setAction])

  return (
    <div className="bg-white px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-base leading-7 text-gray-700">
        <p className="text-lg font-semibold leading-7 text-indigo-600">
          Action
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {action?.name}
        </h1>
        <p className="mt-6 text-xl leading-8">{action?.comment}</p>
        <div className="mt-8 flex flex-row justify-center">
          <button
            className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
            type="button"
            onClick={() => {}}
          >
            Execute
          </button>
        </div>
      </div>
    </div>
  )
}

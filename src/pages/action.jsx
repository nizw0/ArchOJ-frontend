import { useImportUsers } from '@/query'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const actions = [
  {
    id: '1',
    name: 'Import users by csv file',
    comment: 'This action would create users by the csv file given.',
    useExec: useImportUsers,
  },
  {
    id: '2',
    name: "Initiate users' environments",
    comment: 'This action would create env for users.',
    useExec: () => {},
  },
  {
    id: '3',
    name: 'Import problems',
    comment: 'This action would import problems you upload.',
    useExec: () => {},
  },
  {
    id: '4',
    name: 'Create a new enviroment',
    comment: 'This action would create a new app.',
    useExec: () => {},
  },
]

export default function Action() {
  const { actionId } = useParams()
  const action = actions[actionId - 1]
  const [file, setFile] = useState(null)
  const exec = action.useExec()
  const navigate = useNavigate()

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
        <form
          className="mt-8 flex flex-col items-center justify-center space-y-4"
          onSubmit={async (e) => {
            e.preventDefault()
            await exec.mutateAsync(file)
            navigate(-1)
          }}
        >
          {actionId === '1' && (
            <div>
              <label className="sr-only" htmlFor="file">
                Choose file
              </label>
              <input
                accept=".csv"
                className="mt-2 block w-full rounded-lg border border-gray-200 text-sm shadow-sm file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-2 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                id="file"
                name="file"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0])
                }}
              />
            </div>
          )}

          <div>
            <button
              className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
              disabled={action.id === '4'}
              type="submit"
            >
              Execute
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

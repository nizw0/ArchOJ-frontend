import {
  importProblems,
  importProblemsFromRepo,
  importUsers,
  initUsers,
} from '@/api'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const actions = [
  {
    id: '1',
    name: "Initiate users' environments",
    comment: 'This action would create env for users.',
  },
  {
    id: '2',
    name: 'Import users by csv file',
    comment: 'This action would create users by the csv file given.',
  },
  {
    id: '3',
    name: 'Import problems',
    comment: 'This action would import problems you upload.',
  },
  {
    id: '4',
    name: 'Import problems from Github repo',
    comment: 'This action would import problems from Github repo.',
  },
]

const options = [
  {
    name: 'default problem set',
    url: '',
  },
]

export default function Action() {
  const { actionId } = useParams()
  const action = actions[actionId - 1]
  const [file, setFile] = useState(null)
  const [option, setOption] = useState(options[0])
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
            if (action.id === '1') await initUsers()
            else if (action.id === '2') await importUsers(file)
            else if (action.id === '3') await importProblems(file)
            else if (action.id === '4') await importProblemsFromRepo(option.url)
            navigate(-1)
          }}
        >
          {action.id === '2' && (
            <div>
              <label className="sr-only" htmlFor="file">
                Choose file
              </label>
              <input
                accept="text/csv"
                className="mt-2 block w-full rounded-lg border border-gray-200 text-sm shadow-sm file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-2 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                id="file"
                name="file"
                type="file"
                onChange={async (e) => {
                  setFile(e.target.files[0])
                }}
              />
            </div>
          )}

          {action.id === '3' && (
            <div>
              <label className="sr-only" htmlFor="file">
                Choose file
              </label>
              <input
                accept="application/zip"
                className="mt-2 block w-full rounded-lg border border-gray-200 text-sm shadow-sm file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-2 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                id="file"
                name="file"
                type="file"
                onChange={async (e) => {
                  setFile(e.target.files[0])
                }}
              />
            </div>
          )}

          {action.id === '4' && (
            <Listbox disabled value={option} onChange={setOption}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                    repo url
                  </Listbox.Label>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <span className="block h-6 truncate">{option.name}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      show={open}
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options.map((item) => (
                          <Listbox.Option
                            key={item.name}
                            value={item.url}
                            className={clsx(
                              'flex flex-row items-center justify-center py-2',
                              item.name === option.name
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900'
                            )}
                          >
                            {
                              <>
                                <span
                                  className={clsx(
                                    'block truncate',
                                    item.name === option.name
                                      ? 'font-semibold'
                                      : 'font-normal'
                                  )}
                                >
                                  {item.name}
                                </span>
                              </>
                            }
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          )}

          <div>
            <button
              className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
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

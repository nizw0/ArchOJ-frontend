import { useCreateTestcase } from '@/query'
import { Dialog, Switch, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router'

export default function TestcaseSlide({ isOpen, setIsOpen, problemId }) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isSample, setIsSample] = useState(false)
  const createTestcase = useCreateTestcase()
  const navigate = useNavigate()

  return (
    <Transition.Root as={Fragment} className="z-50" show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      await createTestcase.mutateAsync({
                        problemId,
                        testcase: { input, output, isSample },
                      })
                      navigate(0)
                    }}
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            New Problem
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              type="button"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                className="block text-sm font-medium leading-6 text-gray-900"
                                htmlFor="input"
                              >
                                Input
                              </label>
                              <div className="mt-2">
                                <textarea
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  id="input"
                                  name="input"
                                  rows={10}
                                  type="text"
                                  onChange={(e) => setInput(e.target.value)}
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                className="block text-sm font-medium leading-6 text-gray-900"
                                htmlFor="output"
                              >
                                Output
                              </label>
                              <div className="mt-2">
                                <textarea
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  id="output"
                                  name="output"
                                  rows={10}
                                  type="text"
                                  onChange={(e) => setOutput(e.target.value)}
                                />
                              </div>
                            </div>

                            <Switch.Group
                              as="div"
                              className="flex items-center justify-between"
                            >
                              <span className="flex flex-grow flex-col">
                                <Switch.Label
                                  passive
                                  as="span"
                                  className="text-sm font-medium leading-6 text-gray-900"
                                >
                                  Is it a sample testcase?
                                </Switch.Label>
                                <Switch.Description
                                  as="span"
                                  className="text-sm text-gray-500"
                                >
                                  Set true if this is a sample testacse.
                                </Switch.Description>
                              </span>
                              <Switch
                                checked={isSample}
                                className={clsx(
                                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
                                  isSample ? 'bg-indigo-600' : 'bg-gray-200'
                                )}
                                onChange={setIsSample}
                              >
                                <span
                                  aria-hidden="true"
                                  className={clsx(
                                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                                    isSample ? 'translate-x-5' : 'translate-x-0'
                                  )}
                                />
                              </Switch>
                            </Switch.Group>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        type="button"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type="submit"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

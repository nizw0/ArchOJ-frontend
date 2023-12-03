import { useCreateSubmission } from '@/query'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import SelectMenus from './select-menus'

const languageItems = [
  { id: 0, name: null },
  { id: 1, name: 'c' },
  { id: 2, name: 'cpp' },
  { id: 3, name: 'javascript' },
  { id: 4, name: 'python' },
]
function blobToText(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsText(blob)
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
  })
}

export default function SubmissionModal({ isOpen, setIsOpen, problemId = '' }) {
  const [id, setId] = useState(problemId)
  const [file, setFile] = useState(null)
  const [language, setLanguage] = useState(languageItems[0])
  const createSubmission = useCreateSubmission()

  useEffect(() => {
    setId(problemId)
  }, [problemId])

  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-visible rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="mt-0 space-y-2 text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Submit
                  </Dialog.Title>
                  <form
                    className="mt-2"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const code = await blobToText(file)
                      await createSubmission.mutateAsync({
                        problemId: id,
                        code,
                        language: language.name,
                      })
                      setIsOpen(false)
                    }}
                  >
                    <div className="mt-2">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="problemId"
                      >
                        Problem Id
                      </label>
                      <input
                        className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={problemId}
                        id="problemId"
                        name="problemId"
                        type="text"
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="file"
                      >
                        File
                      </label>
                      <label className="sr-only" htmlFor="file">
                        Choose file
                      </label>
                      <input
                        className="mt-2 block w-full rounded-lg border border-gray-200 text-sm shadow-sm file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-2 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                        id="file"
                        name="file"
                        type="file"
                        onChange={(e) => setFile(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <SelectMenus
                        items={languageItems}
                        selected={language}
                        setSelected={setLanguage}
                      />
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type="submit"
                        onClick={() => setIsOpen(false)}
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

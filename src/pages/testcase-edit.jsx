import Loading from '@/components/loading'
import { useListTestcases } from '@/query'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function TestcaseEdit() {
  const { problemId, testcaseId } = useParams()
  const { isSuccess, data: testcases } = useListTestcases(problemId)
  const [testcase, setTestcase] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) setTestcase(testcases.find((v) => v.id === testcaseId))
  }, [isSuccess, testcases, testcaseId])

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {testcase.id}
            </h1>
            <div className="flex flex-row space-x-4">
              <button
                className="block rounded-md bg-slate-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                type="button"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <p className="-mt-2 px-2 pb-4 text-xl font-medium text-gray-500">
                Input
              </p>
              <textarea
                className="block h-72 w-full resize-y whitespace-pre-wrap rounded-md border-0 py-1.5 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                defaultValue={testcase.input}
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <p className="-mt-2 px-2 pb-4 text-xl font-medium text-gray-500">
                Output
              </p>
              <textarea
                className="block h-72 w-full resize-y whitespace-pre-wrap rounded-md border-0 py-1.5 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                defaultValue={testcase.output}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

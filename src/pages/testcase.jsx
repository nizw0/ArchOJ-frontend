import Loading from '@/components/loading'
import { useListTestcases } from '@/query'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function Testcase() {
  const { problemId, testcaseId } = useParams()
  const { isSuccess, data: testcases } = useListTestcases(problemId)
  const [testcase, setTestcase] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess)
      setTestcase(
        testcases.find((testcase) => {
          return testcase.id === testcaseId
        })
      )
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
            <button
              className="mr-4 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
              type="button"
              onClick={() => navigate('edit')}
            >
              Edit
            </button>
          </div>
          <div className="mt-2">
            {testcase.isSample && <p>This is a sample testcase.</p>}
          </div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">
                Input
              </dt>
              <dd className="mt-1 whitespace-pre-wrap text-xl font-semibold tracking-tight text-gray-900">
                {testcase.input}
              </dd>
            </div>
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">
                Output
              </dt>
              <dd className="mt-1 whitespace-pre-wrap text-xl font-semibold tracking-tight text-gray-900">
                {testcase.output}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </>
  )
}

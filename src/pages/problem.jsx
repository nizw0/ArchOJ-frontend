import { adminState } from '@/atoms'
import ProblemTabs from '@/components/problem-tabs'
import ProblemTestcaseTable from '@/components/problem-testcase-table'
import { clsx } from 'clsx'
import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

export default function Problem() {
  const [page, setPage] = useState(1)
  const isAdmin = useRecoilValue(adminState)
  const problem = useLoaderData()
  const navigate = useNavigate()

  return (
    <div className="-mt-8 bg-white px-0 lg:px-8">
      <ProblemTabs page={page} setPage={setPage} />

      <div
        className={clsx(
          'mx-auto max-w-3xl text-base leading-7 text-gray-700',
          page !== 1 && 'hidden'
        )}
      >
        <div className="flex flex-row justify-between">
          <div className="mx-4 mt-8 max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Easy
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {problem.name}
            </h1>
            <p className="mt-4 text-xl leading-8">{problem.description}</p>
          </div>
          {isAdmin && (
            <div className="mt-4 flex flex-col justify-between space-y-2 py-8 sm:flex-row sm:items-center sm:space-y-0 sm:py-0">
              <button
                className="mr-4 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
                type="button"
                onClick={() => navigate('testcases')}
              >
                View testcases
              </button>
              <button
                className="mr-4 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
                type="button"
                onClick={() => navigate('edit')}
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <ProblemTestcaseTable />
      </div>

      <div className={clsx('h-screen', page !== 2 && 'hidden')}>
        <iframe
          className="mt-4 h-full w-full"
          src="https://africau.edu/images/default/sample.pdf"
        />
      </div>
    </div>
  )
}

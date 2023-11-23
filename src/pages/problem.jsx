import { adminState } from '@/atoms'
import Loading from '@/components/loading'
import ProblemTabs from '@/components/problem-tabs'
import ProblemTestcaseTable from '@/components/problem-testcase-table'
import { useGetProblem } from '@/query'
import { clsx } from 'clsx'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useRecoilValue } from 'recoil'

export default function Problem() {
  const [page, setPage] = useState(1)
  const isAdmin = useRecoilValue(adminState)
  const { problemId } = useParams()
  const { isSuccess, data: problem } = useGetProblem(problemId)
  const navigate = useNavigate()

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div className="-mt-8 bg-white px-0 lg:px-8">
          <ProblemTabs page={page} setPage={setPage} />

          <div
            className={clsx(
              'mx-auto max-w-4xl text-base leading-7 text-gray-700',
              page !== 1 && 'hidden'
            )}
          >
            <div>
              <div className="mx-4 mt-8 max-w-4xl text-base leading-7 text-gray-700">
                {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                  Easy
                </p> */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="line-clamp-1 max-w-sm sm:max-w-5xl">
                    <h1 className="break-words text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {problem.name}
                    </h1>
                  </div>
                  {isAdmin && (
                    <div className="y-8 flex flex-row justify-between space-x-8 sm:space-y-0 sm:py-0">
                      <button
                        className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
                        type="button"
                        onClick={() => navigate('testcases')}
                      >
                        View testcases
                      </button>
                      <button
                        className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
                        type="button"
                        onClick={() => navigate('edit')}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <p className="prose-lg prose-gray mt-4 whitespace-pre-wrap">
                  {problem.description}
                </p>
              </div>
            </div>
            <ProblemTestcaseTable testcases={problem.testcases} />
          </div>

          <div className={clsx('h-screen', page !== 2 && 'hidden')}>
            <iframe className="mt-4 h-full w-full" src={problem.fileUrl} />
          </div>
        </div>
      )}
    </>
  )
}

import ProblemTabs from '@/components/problem-tabs'
import { clsx } from 'clsx'
import { useState } from 'react'

const problem = {
  name: 'This is question name',
  description: 'Testing description.',
}

export default function Problem() {
  const [page, setPage] = useState(1)

  return (
    <div className="-mt-8 bg-white px-6 lg:px-0">
      <ProblemTabs page={page} setPage={setPage} />

      <div
        className={clsx(
          'mx-4 mt-8 max-w-3xl text-base leading-7 text-gray-700',
          page === 1 ? 'block' : 'hidden'
        )}
      >
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Easy
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {problem.name}
        </h1>
        <p className="mt-4 text-xl leading-8">{problem.description}</p>
      </div>
      <div className={clsx('h-screen', page === 2 ? 'block' : 'hidden')}>
        <iframe
          className="h-full w-full"
          src="https://africau.edu/images/default/sample.pdf"
        />
      </div>
    </div>
  )
}

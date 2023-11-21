import clsx from 'clsx'

export default function Submissionsubmissions({ submission }) {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm font-medium leading-6 text-gray-500">Id</p>
          <p className="mt-2 flex items-baseline gap-x-2">
            <span className="text-4xl font-semibold tracking-tight">
              {submission.id}
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-4 pb-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-500">
              Language
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight">
                {submission.language}
              </span>
            </p>
          </div>
          <div className="px-4 pb-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-500">
              Runtime
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight">
                {submission.runtime}
              </span>
            </p>
          </div>
          <div className="px-4 pb-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-500">
              Status
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span
                className={clsx(
                  'text-4xl font-semibold tracking-tight',
                  submission.result === 'Accepted'
                    ? 'text-green-600'
                    : 'text-red-600'
                )}
              >
                {submission.result || 'pending'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

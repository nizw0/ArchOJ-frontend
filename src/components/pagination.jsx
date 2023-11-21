import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid'
import { clsx } from 'clsx'

export default function Pagination({
  currentPage,
  setCurrentPage,
  itemsCount,
}) {
  const firstPage = 1
  const lastPage =
    Number((itemsCount / 10).toFixed()) + (itemsCount % 10 ? 1 : 0)
  const pages = []

  for (let page = 1; page <= lastPage; page++) {
    pages.push(
      <a
        key={page}
        className={clsx(
          'inline-flex items-center px-4 pt-4 text-sm font-medium',
          page === currentPage
            ? 'border-t-2 border-indigo-500 text-indigo-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        )}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </a>
    )
  }

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          onClick={() => {
            if (currentPage - 1 >= firstPage) setCurrentPage(currentPage - 1)
          }}
        >
          <ArrowLongLeftIcon
            aria-hidden="true"
            className="mr-3 h-5 w-5 text-gray-400"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">{pages}</div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          onClick={() => {
            if (currentPage + 1 <= lastPage) setCurrentPage(currentPage + 1)
          }}
        >
          Next
          <ArrowLongRightIcon
            aria-hidden="true"
            className="ml-3 h-5 w-5 text-gray-400"
          />
        </a>
      </div>
    </nav>
  )
}

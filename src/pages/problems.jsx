import Loading from '@/components/loading'
import Pagination from '@/components/pagination'
import ProblemSlide from '@/components/problem-slide'
import ProblemTable from '@/components/problem-table'
import { useListProblems } from '@/query'
import { Suspense, useEffect, useState } from 'react'

export default function Problems() {
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const { isSuccess, data: problems } = useListProblems()

  useEffect(() => {
    if (isSuccess) setItemsCount(problems.length)
  }, [isSuccess, problems])

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div>
          <ProblemSlide isOpen={isSlideOpen} setIsOpen={setIsSlideOpen} />
          <Suspense fallback={<Loading />}>
            <ProblemTable
              currentPage={currentPage}
              isSlideOpen={isSlideOpen}
              problems={problems}
              setCurrentPage={setCurrentPage}
              setIsSlideOpen={setIsSlideOpen}
            />
          </Suspense>
          <Pagination
            currentPage={currentPage}
            itemsCount={itemsCount}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  )
}

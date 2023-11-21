import Pagination from '@/components/pagination'
import ProblemSlide from '@/components/problem-slide'
import ProblemTable from '@/components/problem-table'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

export default function Problems() {
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const problems = useLoaderData()

  useEffect(() => {
    setItemsCount(problems.length)
  }, [itemsCount, setItemsCount, problems])

  return (
    <>
      <ProblemSlide isOpen={isSlideOpen} setIsOpen={setIsSlideOpen} />
      <ProblemTable
        currentPage={currentPage}
        isSlideOpen={isSlideOpen}
        problems={problems}
        setCurrentPage={setCurrentPage}
        setIsSlideOpen={setIsSlideOpen}
      />
      <Pagination
        currentPage={currentPage}
        itemsCount={itemsCount}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

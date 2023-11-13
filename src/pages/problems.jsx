import Pagination from '@/components/pagination'
import ProblemSlide from '@/components/problem-slide'
import ProblemTable from '@/components/problem-table'
import { useState } from 'react'

export default function Problems() {
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <ProblemSlide isOpen={isSlideOpen} setIsOpen={setIsSlideOpen} />
      <ProblemTable
        currentPage={currentPage}
        isSlideOpen={isSlideOpen}
        setCurrentPage={setCurrentPage}
        setIsSlideOpen={setIsSlideOpen}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

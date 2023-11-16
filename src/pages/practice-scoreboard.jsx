import Pagination from '@/components/pagination'
import PracticeScoreboardTable from '@/components/practice-scoreboard-table'
import { useState } from 'react'

export default function PracticeScoreboard() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <PracticeScoreboardTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

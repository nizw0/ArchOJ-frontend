import Pagination from '@/components/pagination'
import SubmissionTable from '@/components/submission-table'
import { useState } from 'react'

export default function Submissions() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <SubmissionTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

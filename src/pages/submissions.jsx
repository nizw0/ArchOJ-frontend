import Pagination from '@/components/pagination'
import SubmissionTable from '@/components/submission-table'
import { useState } from 'react'
import { useLoaderData } from 'react-router'

export default function Submissions() {
  const [currentPage, setCurrentPage] = useState(1)
  const submissions = useLoaderData()

  return (
    <>
      <SubmissionTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        submissions={submissions}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

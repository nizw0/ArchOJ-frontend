import Pagination from '@/components/pagination'
import SubmissionTable from '@/components/submission-table'
import { useState } from 'react'
// import { useLoaderData } from 'react-router'

export default function Submissions() {
  const [currentPage, setCurrentPage] = useState(1)
  // const submissions = useLoaderData()
  const submissions = Array.from({ length: 100 }, (_, i) => {
    const v = {
      id: '1',
      problemId: '1',
      problemTitle: 'MYSQL n+1 problem',
      userId: '1',
      language: 'CPP',
      runtime: '2.13s',
      status: 'Accepted',
      time: '5 days ago',
    }
    v.id = i + 1
    return v
  })

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

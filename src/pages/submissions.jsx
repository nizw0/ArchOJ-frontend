import Loading from '@/components/loading'
import Pagination from '@/components/pagination'
import SubmissionTable from '@/components/submission-table'
import { useListSubmissions } from '@/query'
import { useEffect, useState } from 'react'

export default function Submissions() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const { isSuccess, data: submissions } = useListSubmissions()

  useEffect(() => {
    if (isSuccess) setItemsCount(submissions.length)
  }, [isSuccess, submissions])

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div>
          <SubmissionTable
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            submissions={submissions}
          />
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

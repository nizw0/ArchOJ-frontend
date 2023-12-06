import { userAttributesState } from '@/atoms'
import Loading from '@/components/loading'
import Pagination from '@/components/pagination'
import SubmissionTable from '@/components/submission-table'
import { useListSubmissions } from '@/query'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function Submissions() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const user = useRecoilValue(userAttributesState)
  const [userSubmissions, SetUserSubmissions] = useState([])
  const { isSuccess, data: submissions } = useListSubmissions()

  useEffect(() => {
    if (isSuccess) {
      const sub = user.sub
      SetUserSubmissions(
        submissions.filter((submission) => submission.userId === sub)
      )
      setItemsCount(submissions.length)
    }
  }, [isSuccess, submissions, user.sub])

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div>
          <SubmissionTable
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            submissions={userSubmissions}
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

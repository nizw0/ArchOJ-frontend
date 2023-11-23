import Pagination from '@/components/pagination'
import RankingTable from '@/components/practice-scoreboard-table'
import { useListUsersSolveCounts } from '@/query'
import { useEffect, useState } from 'react'

export default function Ranking() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const { isSuccess, data: userSolveCounts } = useListUsersSolveCounts()

  useEffect(() => {
    if (isSuccess) setItemsCount(userSolveCounts.length)
  }, [isSuccess, userSolveCounts])

  return (
    <>
      {isSuccess && (
        <>
          <RankingTable
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            userSolveCounts={userSolveCounts}
          />
          <Pagination
            currentPage={currentPage}
            itemsCount={itemsCount}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  )
}

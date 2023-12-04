import Pagination from '@/components/pagination'
import RankingTable from '@/components/practice-scoreboard-table'
import { useGetProblemCounts, useListUsersSolveCounts } from '@/query'
import { useEffect, useState } from 'react'

export default function Ranking() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const { isSuccess: isListSolvesSuccess, data: userSolveCounts } =
    useListUsersSolveCounts()
  const { isSuccess: isGetProblemSuccess, data: problemCounts } =
    useGetProblemCounts()

  useEffect(() => {
    if (isListSolvesSuccess) setItemsCount(userSolveCounts.length)
  }, [isListSolvesSuccess, userSolveCounts])

  return (
    <>
      {isListSolvesSuccess && isGetProblemSuccess && (
        <>
          <RankingTable
            currentPage={currentPage}
            problemCounts={problemCounts.count}
            setCurrentPage={setCurrentPage}
            userSolveCounts={userSolveCounts.counts}
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

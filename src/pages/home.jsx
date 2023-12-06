import { signInState, userAttributesState } from '@/atoms'
import DashboardStats from '@/components/dashboard-stats'
import DashboardTable from '@/components/dashboard-table'
import {
  useGetProblemCounts,
  useGetUserAccessRate,
  useGetUsersSolveCounts,
  useListSubmissions,
} from '@/query'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function Home() {
  const isSignIn = useRecoilValue(signInState)
  const userAttributes = useRecoilValue(userAttributesState)
  const [userSubmissions, setUserSubmissions] = useState([])
  const { isSuccess: isGetUserSuccess, data: userSolves } =
    useGetUsersSolveCounts(userAttributes.sub)
  const { isSuccess: isGetProblemSuccess, data: problem } =
    useGetProblemCounts()
  const { isSuccess: isGetUserAccessRateSuccess, data: user } =
    useGetUserAccessRate(userAttributes.sub)
  const { isSuccess: isListSubmissionsSuccess, data: submissions } =
    useListSubmissions()

  useEffect(() => {
    if (isListSubmissionsSuccess) {
      const sub = userAttributes.sub
      setUserSubmissions(
        submissions.filter((submission) => submission.userId === sub)
      )
    }
  }, [isListSubmissionsSuccess, submissions, userAttributes.sub])

  return (
    <div className="mx-auto bg-white">
      <div className="px-6 sm:space-y-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {!isSignIn ? (
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to ArchOJ.
            </h2>
          ) : (
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {`Welcome back! ${userAttributes.name}`}
            </h2>
          )}
        </div>
        {isSignIn && isListSubmissionsSuccess && (
          <>
            {isGetProblemSuccess &&
              isGetUserSuccess &&
              isGetUserAccessRateSuccess && (
                <>
                  <DashboardStats
                    data={{
                      solve: userSolves.count,
                      total: problem.count,
                      accessRate: Number(user.accessRate),
                    }}
                  />
                </>
              )}
            <DashboardTable submissions={userSubmissions} />
          </>
        )}
      </div>
    </div>
  )
}

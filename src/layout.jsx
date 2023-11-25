import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { getUser, getUserAttributes } from './api/index.js'
import { adminState, userAttributesState, userState } from './atoms'
import Sidebar from './components/sidebar'
import SubmissionModal from './components/submission-modal'

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [problemId, setProblemId] = useState('')
  const setUser = useSetRecoilState(userState)
  const setUserAttributes = useSetRecoilState(userAttributesState)
  const setIsAdmin = useSetRecoilState(adminState)

  useEffect(() => {
    const updateState = async () => {
      const user = await getUser()
      setUser(user)

      const userAttributes = await getUserAttributes()
      setUserAttributes(userAttributes)
      setIsAdmin(!!userAttributes['custom:isAdmin'] || false)
    }

    updateState()
  }, [setUser, setUserAttributes, setIsAdmin])

  return (
    <>
      <SubmissionModal
        isOpen={isModalOpen}
        problemId={problemId}
        setIsOpen={setIsModalOpen}
      />
      <Sidebar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setProblemId={setProblemId}
      />
    </>
  )
}

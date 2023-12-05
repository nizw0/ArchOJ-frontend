import { useState } from 'react'
import Sidebar from './components/sidebar'
import SubmissionModal from './components/submission-modal'

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [problemId, setProblemId] = useState('')

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

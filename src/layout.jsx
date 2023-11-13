import { useState } from 'react'
import Sidebar from './components/sidebar'
import SubmissionModal from './components/submission-modal'

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <SubmissionModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <Sidebar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

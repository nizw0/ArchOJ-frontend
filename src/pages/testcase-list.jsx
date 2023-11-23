import TestcaseSlide from '@/components/testcase-slide'
import TestcaseTable from '@/components/testcase-table'
import { useState } from 'react'
import { useParams } from 'react-router'

export default function TestcaseList() {
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  const { problemId } = useParams()

  return (
    <>
      <TestcaseSlide
        isOpen={isSlideOpen}
        problemId={problemId}
        setIsOpen={setIsSlideOpen}
      />
      <TestcaseTable
        isSlideOpen={isSlideOpen}
        setIsSlideOpen={setIsSlideOpen}
      />
    </>
  )
}

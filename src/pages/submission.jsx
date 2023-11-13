import { useParams } from 'react-router-dom'

export default function Submission() {
  const { id } = useParams()
  return (
    <>
      <p>{id}</p>
    </>
  )
}

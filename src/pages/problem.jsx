import { useParams } from 'react-router-dom'

export default function Problem() {
  const { id } = useParams()
  return (
    <>
      <p>{id}</p>
    </>
  )
}

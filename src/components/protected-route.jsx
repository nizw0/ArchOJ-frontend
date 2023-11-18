import { getUser } from '@/api/authentication'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Loading from './loading'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true)
      try {
        const user = await getUser()
        if (!user) navigate('/')
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    loadUser()
  }, [navigate])

  return loading ? <Loading /> : children
}

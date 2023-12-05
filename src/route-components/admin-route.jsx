import { adminState } from '@/atoms'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

export default function AdminRoute({ children }) {
  const isAdmin = useRecoilValue(adminState)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) navigate('/')
  })

  return <>{children}</>
}

import { signInState } from '@/atoms'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'

export default function UserRoute({ children }) {
  const isSignIn = useRecoilValue(signInState)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignIn) navigate('/')
  })

  return <>{children}</>
}

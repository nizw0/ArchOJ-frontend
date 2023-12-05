import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { getUser, getUserAttributes } from './api'
import { adminState, userAttributesState, userState } from './atoms'

export default function StateLayer({ children }) {
  const setUser = useSetRecoilState(userState)
  const setUserAttributes = useSetRecoilState(userAttributesState)
  const setIsAdmin = useSetRecoilState(adminState)

  useEffect(() => {
    const updateState = async () => {
      const user = await getUser()
      setUser(user)
      setIsAdmin(false)

      const userAttributes = await getUserAttributes()
      setUserAttributes(userAttributes)
      if (userAttributes['custom:isAdmin'] != null)
        setIsAdmin(userAttributes['custom:isAdmin'] === 'true')
    }

    updateState()
  }, [setUser, setUserAttributes, setIsAdmin])

  return <>{children}</>
}

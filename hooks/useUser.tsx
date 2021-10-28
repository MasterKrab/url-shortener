import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { UserModel } from 'models/User'
import responseHandler from 'utils/api/responseHandler'

const USER_STATES = {
  NONE: undefined,
  NO_AUTHORIZED: null,
}

const useUser = (): [UserModel | undefined | null, boolean] => {
  const [user, setUser] = useState<UserModel | undefined | null>(
    USER_STATES.NONE
  )
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const router = useRouter()

  const fetchUser = () =>
    fetch('/api/user')
      .then(responseHandler)
      .then(setUser)
      .catch(() => setUser(USER_STATES.NO_AUTHORIZED))

  useEffect(() => {
    setTimeout(fetchUser, 0)
  }, [])

  useEffect(() => {
    router.pathname === '/user' && user && fetchUser()

    if (router.query.logout) {
      setUser(USER_STATES.NONE)
      setIsLoaded(false)
    }
  }, [router])

  useEffect(() => {
    user !== USER_STATES.NONE && setIsLoaded(true)
  }, [user])

  return [user, isLoaded]
}

export default useUser

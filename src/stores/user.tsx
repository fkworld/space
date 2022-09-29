import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

type User = {
  username: string
}

type UserContext = {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

const DEFAULT_USER: User = {
  username: '访客',
}

const UserContext = createContext<UserContext>({
  user: DEFAULT_USER,
  setUser: () => undefined,
})

export const UserContextProvider: FC<{
  children: JSX.Element
}> = (props) => {
  const { children } = props

  const [user, setUser] = useState(DEFAULT_USER)

  const value = useMemo<UserContext>(() => {
    return { user, setUser }
  }, [user, setUser])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const { user, setUser } = useContext(UserContext)

  return { user, setUser }
}

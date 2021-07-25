import React, { useContext, useState, createContext, FC } from 'react'
import { Post } from '../types/posts'

type StateContextType = {
  posts: Post[] | null
  dark: boolean
  setPosts: React.Dispatch<React.SetStateAction<Post[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const StateContext = createContext({} as StateContextType)
export const StateProvider: FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <StateContext.Provider value={{ posts, setPosts, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = (): StateContextType => useContext(StateContext)

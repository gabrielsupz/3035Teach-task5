import { TypeTheme } from '../App'
import { createContext } from 'react'
type Context = {
  theme: TypeTheme
  setTheme: React.Dispatch<React.SetStateAction<TypeTheme>>
}
export const ThemeContext = createContext({} as Context)

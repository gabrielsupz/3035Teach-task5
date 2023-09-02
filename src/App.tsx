import './styles/style.css'
import { RegisterPage } from './components/RegisterPage'

import { useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

export type TypeTheme = {
  currentTheme: 'light' | 'dark'
}
export const App = () => {
  const [theme, setTheme] = useState<TypeTheme>({
    currentTheme: 'light'
  })
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <RegisterPage />
      </ThemeContext.Provider>
    </>
  )
}

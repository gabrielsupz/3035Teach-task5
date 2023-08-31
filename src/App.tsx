import { useState } from 'react'
import './style.css'
import { RegisterPage } from './components/RegisterPage'

export type TypeTheme = {
  currentTheme: 'light' | 'dark'
}

function App() {
  const [theme, setTheme] = useState<TypeTheme>({
    currentTheme: 'light'
  })

  const handleThemeChange = () => {
    const newTheme = theme.currentTheme === 'light' ? 'dark' : 'light'
    setTheme({ currentTheme: newTheme })
    console.log('mudando tema')
  }

  return (
    <>
      <button
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        onClick={() => handleThemeChange()}
      >
        Change Theme
      </button>
      <RegisterPage theme={theme} />
    </>
  )
}

export default App

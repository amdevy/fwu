'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Ctx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void }

const ThemeContext = createContext<Ctx | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    const stored = (localStorage.getItem('fw_theme') as Theme | null) || 'light'
    setThemeState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('fw_theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeState,
        toggle: () => setThemeState((t) => (t === 'light' ? 'dark' : 'light')),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}

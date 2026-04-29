import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="group w-10 h-10 rounded-full bg-white/60 dark:bg-[rgba(26,35,26,0.6)] backdrop-blur-md border border-white/50 dark:border-white/10 text-[#2D3A2D] dark:text-[#E8F5E9] hover:bg-[#E8F5E9] dark:hover:bg-[rgba(129,199,132,0.2)] hover:text-[#5B8C5A] dark:hover:text-[#81C784] transition-all duration-300 shadow-sm flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className="transition-transform duration-300 ease-out group-hover:rotate-45">
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </span>
    </button>
  )
}

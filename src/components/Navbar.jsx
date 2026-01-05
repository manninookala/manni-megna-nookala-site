import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [activeId, setActiveId] = useState('#about')

  // Sync theme with document & localStorage
  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const initial = stored ?? 'dark'
    setTheme(initial)
    if (initial === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (!theme) return
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120 // offset for navbar
      let current = '#about'

      links.forEach((link) => {
        const el = document.querySelector(link.href)
        if (!el) return
        const top = el.offsetTop
        if (scrollY >= top) {
          current = link.href
        }
      })

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col gap-2 text-sm text-slate-800 md:flex-row md:items-center md:gap-4 dark:text-slate-200">
      {links.map((link) => {
        const isActive = activeId === link.href
        return (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClick}
              className={`group relative inline-flex items-center rounded-full px-3 py-1 text-base font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-violet-100 text-violet-800 shadow-[0_0_18px_rgba(167,139,250,0.6)] dark:bg-slate-900/80 dark:text-white'
                  : 'text-slate-700 hover:text-violet-800 hover:bg-violet-50 hover:shadow-[0_0_14px_rgba(167,139,250,0.45)] dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900/60'
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-300 transition-transform duration-200 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </a>
          </li>
        )
      })}
    </ul>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/80 text-slate-900 backdrop-blur dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <motion.a
          href="#top"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-sky-300 text-base font-bold text-white dark:from-violet-500 dark:to-sky-400">
            M
          </span>
          <span className="hidden sm:inline">Megna</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-700 dark:border-slate-500/60 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-violet-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4 text-amber-300" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-700 dark:border-slate-500/60 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-violet-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4 text-amber-300" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-800 shadow-sm transition hover:border-violet-400 hover:text-violet-700 dark:border-slate-600/70 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-violet-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="border-t border-slate-200 bg-white/95 px-4 pb-4 pt-2 shadow-lg dark:border-white/10 dark:bg-slate-950/95">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </header>
  )
}


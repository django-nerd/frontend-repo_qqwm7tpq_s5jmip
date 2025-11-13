import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">Invoicer AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/features" className={navLinkClass}>Features</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            <a href="/test" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900">Status</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 text-sm hover:text-slate-900">Sign in</a>
            <a href="#" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
              Start free
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/features" className={navLinkClass} onClick={() => setOpen(false)}>Features</NavLink>
            <div />
            <NavLink to="/pricing" className={navLinkClass} onClick={() => setOpen(false)}>Pricing</NavLink>
            <a href="/test" className="block px-3 py-2 rounded-md text-sm text-slate-600" onClick={() => setOpen(false)}>Status</a>
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="text-slate-600 text-sm">Sign in</a>
              <a href="#" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2 rounded-md">
                Start free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

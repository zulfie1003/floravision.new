import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Home' },
    { label: 'Plants Type', dd: true },
    { label: 'More' },
    { label: 'Contact' },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[64px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/src/assests/logo.svg" alt="FloraVision logo" className="size-52 mt-36" />
          <span className="text-white font-semibold text-[28px] tracking-wide"></span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href="#"
              className="flex items-center gap-1 text-white/70 hover:text-white text-[13.5px] transition-colors duration-200">
              {l.label}
              {l.dd && <FiChevronDown size={13} className="opacity-60" />}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-[18px]">
          <button aria-label="Search"  className="text-white/65 hover:text-white transition-colors"><FiSearch  size={19}/></button>
          <button aria-label="Cart"    className="text-white/65 hover:text-white transition-colors"><FiShoppingCart size={19}/></button>
          <button aria-label="Menu"    className="text-white/65 hover:text-white transition-colors" onClick={() => setOpen(true)}><FiMenu size={20}/></button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div key="bg" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 bg-black/55 z-40" onClick={() => setOpen(false)} />
            <motion.aside key="dr"
              initial={{ x:'100%' }} animate={{ x:0 }} exit={{ x:'100%' }}
              transition={{ type:'tween', duration:0.26 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-[#0c1a0d] border-l border-white/10 flex flex-col p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <img src="/src/assests/logo.svg" alt="FloraVision logo" className="w-7 h-7" />
                  <span className="text-white font-semibold text-[15px]">FloraVision.</span>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/65 hover:text-white"><FiX size={22}/></button>
              </div>
              <nav className="flex flex-col gap-6">
                {links.map(l => (
                  <a key={l.label} href="#" onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 text-white/70 hover:text-white text-[15px] transition-colors">
                    {l.label}{l.dd && <FiChevronDown size={14}/>}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

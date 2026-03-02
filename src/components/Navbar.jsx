import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronRight, Search, BookOpen, Layout, Box,
  Building2, Rocket, ChevronDown, Moon, Sun, Newspaper, Command, Menu,
  Cpu, Zap, ShieldCheck, Globe, Github, Code2, Library
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setIsSearchOpen(true); }
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.addEventListener('scroll', onScroll);
    window.addEventListener('keydown', onKey);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [theme]);

  const toggleTheme = () => {
    const n = theme === 'dark' ? 'light' : 'dark';
    setTheme(n);
    localStorage.setItem('theme', n);
  };

  const dropLinks = [
    {
      name: 'Templates',
      desc: 'Pre-built starters for rapid development.',
      icon: <Box className="w-5 h-5 text-blue-500" />,
      href: '#'
    },
    {
      name: 'Seishiro API',
      desc: 'Powerful engine documentation and guides.',
      icon: <Cpu className="w-5 h-5 text-cyan-500" />,
      href: 'https://nakikoneko.gitbook.io/seishiroapi'
    },
    {
      name: 'Source Code',
      desc: 'Explore the core framework on GitHub.',
      icon: <Github className="w-5 h-5 text-indigo-500" />,
      href: 'https://github.com/untrustnova/nova'
    },
    {
      name: 'Blog',
      desc: 'Latest news and technical articles.',
      icon: <Newspaper className="w-5 h-5 text-purple-500" />,
      href: '#'
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-[100] flex flex-col items-center pointer-events-none">
      <div className="w-full bg-blue-600 text-white py-2 text-center text-[10px] font-bold tracking-[0.1em] uppercase relative pointer-events-auto">
        Nova.js 1.0 Beta <ChevronRight className="inline w-3 h-3 ml-1" />
      </div>

      <div className={`w-full px-4 transition-all duration-300 pointer-events-auto ${isScrolled ? 'fixed top-2 mt-0' : 'mt-4 md:mt-6'}`}>
        <nav className={`mx-auto w-full max-w-[1350px] transition-all duration-300 border ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-foreground/10 py-2 px-4 sm:px-6 rounded-2xl shadow-2xl'
            : 'bg-foreground/5 backdrop-blur-md border-foreground/5 py-3 px-4 sm:px-8 rounded-2xl'
          }`}>
          <div className="flex items-center justify-between">
            {/* Left: Logo & Primary Links */}
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2 shrink-0">
                <img src="/images/nova.png" alt="Logo" className="h-5 sm:h-6 w-auto" />
                <span className="text-base sm:text-lg font-bold tracking-tight">Nova.js</span>
              </a>

              <div className="hidden lg:flex items-center gap-1">
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium opacity-60 hover:opacity-100 hover:bg-foreground/5 rounded-full transition-all">
                  <BookOpen size={14} className="text-blue-500" /> Docs
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium opacity-60 hover:opacity-100 hover:bg-foreground/5 rounded-full transition-all">
                  <Globe size={14} className="text-blue-500" /> Showcase
                </a>

                <div className="relative" ref={dropdownRef}>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center gap-2 px-4 py-2 text-[13px] font-medium transition-all rounded-full hover:bg-foreground/5 ${isDropdownOpen ? 'opacity-100 bg-foreground/5' : 'opacity-60'}`}>
                    <Library size={14} className="text-blue-500" /> Resources <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 25 }} className="absolute top-full left-0 mt-3 w-[450px] bg-background border border-foreground/10 rounded-2xl p-3 shadow-2xl z-[120]">
                        <div className="grid grid-cols-2 gap-2">
                          {dropLinks.map((l) => (
                            <a key={l.name} href={l.href} target={l.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex items-start gap-4 p-3 rounded-xl hover:bg-foreground/5 transition-all group">
                              <div className="mt-1 p-2 rounded-lg bg-foreground/5 border border-foreground/5 group-hover:border-foreground/10 transition-all">{l.icon}</div>
                              <div>
                                <div className="text-[14px] font-semibold flex items-center gap-1">
                                  {l.name}
                                  <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                                <div className="text-[11px] opacity-50 leading-relaxed mt-0.5">{l.desc}</div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-3 bg-foreground/5 border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/10 px-3 sm:px-4 py-2 rounded-xl transition-all">
                <Search size={18} className="text-blue-500" />
                <span className="hidden sm:inline text-[13px] text-foreground/40 font-medium pr-4">Search documentation...</span>
                <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded bg-foreground/10 text-[10px] font-mono opacity-60"><Command size={10} /> K</div>
              </button>
              <div className="flex items-center gap-1">
                <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-foreground/5 transition-all">
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden border-t border-foreground/5 mt-2">
                <div className="py-4 flex flex-col gap-1">
                  <a href="#" className="flex items-center gap-3 p-4 rounded-xl hover:bg-foreground/5 font-semibold text-sm"><BookOpen size={18} className="text-blue-500" /> Docs</a>
                  <a href="#" className="flex items-center gap-3 p-4 rounded-xl hover:bg-foreground/5 font-semibold text-sm"><Globe size={18} className="text-blue-500" /> Showcase</a>
                  {dropLinks.map(l => (
                    <a key={l.name} href={l.href} target={l.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl hover:bg-foreground/5 font-semibold text-sm">{React.cloneElement(l.icon, { size: 18 })} {l.name}</a>
                  ))}
                  <button className="mx-4 mt-2 bg-blue-500/10 text-blue-500 border border-blue-500/20 py-4 rounded-2xl font-bold">Get Started Free</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-md flex items-start justify-center pt-[15vh] px-4 pointer-events-auto" onClick={() => setIsSearchOpen(false)}>
            <motion.div initial={{ scale: 0.98, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, y: 10 }} transition={{ type: "spring", damping: 25, stiffness: 400 }} className="w-full max-w-2xl bg-background border border-foreground/10 rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="flex items-center p-6 border-b border-foreground/5">
                <Search className="text-blue-500 mr-4" size={24} />
                <input autoFocus placeholder="Search documentation..." className="bg-transparent border-none outline-none text-xl w-full text-foreground" />
                <button onClick={() => setIsSearchOpen(false)} className="p-2 opacity-40 hover:opacity-100"><X size={20} /></button>
              </div>
              <div className="p-12 text-center opacity-40 text-sm">No recent searches</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

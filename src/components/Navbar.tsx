import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SyntexLogo } from './SyntexLogo';
import { navItems } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['solutions', 'integration', 'projects', 'industries', 'partners', 'about', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md border-b border-line'
            : 'bg-transparent'
        }`}
        style={{ height: scrolled ? 64 : 88 }}
      >
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="flex items-center"
            aria-label="Syntex Technologies home"
          >
            <SyntexLogo
              variant="dark"
              className={`transition-all duration-500 ${scrolled ? 'h-9' : 'h-11'}`}
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium tracking-wide2 uppercase transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-ink-900'
                    : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden items-center gap-2 text-[13px] font-medium tracking-wide2 uppercase text-ink-900 transition-colors hover:text-ink-500 lg:flex"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center text-ink-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-900 lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-6">
                <SyntexLogo variant="light" className="h-8" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                    className="flex items-center justify-between border-b border-ink-700 py-5 text-3xl font-display font-light text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-ink-500" />
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navItems.length * 0.06, duration: 0.5 }}
                  className="flex items-center justify-between border-b border-ink-700 py-5 text-3xl font-display font-light text-white"
                >
                  Contact
                  <ArrowUpRight className="h-5 w-5 text-ink-500" />
                </motion.a>
              </nav>

              <div className="px-6 py-8 text-sm text-ink-400">
                <p className="font-mono text-xs tracking-wide2 uppercase text-ink-500">
                  Windhoek, Namibia
                </p>
                <p className="mt-2 text-ink-400">Synergy to Excel</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

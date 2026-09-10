import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/capabilities/', label: 'Capabilities' },
  { to: '/products/', label: 'Products' },
  { to: '/materials/', label: 'Materials' },
  { to: '/about/', label: 'About' },
  { to: '/blog/', label: 'Blog' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const current = pathname.replace(/\/+$/, '') || '/';

  return (
    <header className="glass sticky top-0 z-50">
      <div className="page-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight">
          <span className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-black"
            style={{ background: 'var(--color-accent)' }}>T</span>
          Taily Metal
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                current === to
                  ? 'text-gray-900 bg-gray-200/60'
                  : 'text-[#64748b] hover:text-gray-900 hover:bg-gray-100/60'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact/" className="btn-primary text-sm py-2.5 px-5">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="lg:hidden text-gray-900 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t" style={{ borderColor: 'var(--color-border)' }}>
          <div className="page-container py-4 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  current === to
                    ? 'text-gray-900 bg-gray-200/60'
                    : 'text-[#64748b] hover:text-gray-900 hover:bg-gray-100/60'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact/"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm justify-center mt-2"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

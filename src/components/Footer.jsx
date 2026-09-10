import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-lg mb-4">
              <span className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-black"
                style={{ background: 'var(--color-accent)' }}>T</span>
              Taily Metal
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--color-text-body)' }}>
              ISO 9001 certified manufacturer specializing in custom cold heading, CNC machining, and stamping solutions since 2001.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: '/products', label: 'Products' },
                { to: '/capabilities', label: 'Capabilities' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm flex items-center gap-1 hover:text-gray-900 transition-colors"
                  style={{ color: 'var(--color-text-body)' }}>
                  <ChevronRight size={12} /> {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: 'var(--color-text-body)' }}>
              <span className="flex items-center gap-2"><MapPin size={14} /> Dongguan, Guangdong, China</span>
              <span className="flex items-center gap-2"><Phone size={14} /> 0086-0769-83481151</span>
              <span className="flex items-center gap-2"><Mail size={14} /> cherry@tl-screw.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text-body)' }}>
          <span>&copy; {new Date().getFullYear()} Dongguan Taily Metal Co., Ltd. All rights reserved.</span>
          <span>ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  );
}

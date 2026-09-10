import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, Clock, Send, Smartphone } from 'lucide-react';

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const phone = '+8615173427277';
  const waLink = `https://wa.me/${phone.replace(/\+/g, '')}`;
  const tgLink = `https://t.me/${phone}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup Card */}
      {open && (
        <div className="card p-6 w-72 animate-in slide-in-from-bottom-4 duration-200 shadow-2xl"
          style={{ borderColor: 'rgba(0,102,204,0.3)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 font-bold text-sm">Global Contact</h3>
            <button onClick={() => setOpen(false)} className="text-[#64748b] hover:text-gray-900 transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors hover:brightness-110"
            style={{ background: '#25D366' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="text-white font-semibold text-sm">WhatsApp (Urgent)</span>
          </a>

          {/* Telegram */}
          <a
            href={tgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors hover:brightness-110"
            style={{ background: '#0088cc' }}
          >
            <Send size={20} className="text-white fill-white" />
            <span className="text-white font-semibold text-sm">Telegram (Global)</span>
          </a>

          <div className="space-y-2.5 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
            <div className="flex items-center gap-3 text-sm font-bold" style={{ color: 'var(--color-accent)' }}>
              <Phone size={14} />
              0086-0769-83481151
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-body)' }}>
              <Smartphone size={14} style={{ color: 'var(--color-accent)' }} />
              +86 151 7342 7277
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-body)' }}>
              <Mail size={14} style={{ color: 'var(--color-accent)' }} />
              cherry@tl-screw.com
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-body)' }}>
              <Clock size={14} style={{ color: 'var(--color-accent)' }} />
              Online 24/7 (Global Support)
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Simplified (No constant pulse) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-3.5 rounded-full shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg group relative overflow-hidden"
        style={{
          background: open ? '#1a1c23' : 'linear-gradient(135deg, #ffdb00 0%, #e6b800 100%)',
          border: open ? '1px solid var(--color-border)' : '1px solid rgba(255,255,255,0.2)',
          boxShadow: open ? '0 10px 30px rgba(0,0,0,0.5)' : '0 4px 12px rgba(0,0,0,0.1)',
        }}
        aria-label={open ? 'Close contact' : 'Contact us'}
      >
        {open ? (
          <X size={20} className="text-white" />
        ) : (
          <div className="flex items-center gap-2 relative z-10">
            <MessageCircle size={20} className="text-gray-900" />
            <span className="text-gray-900 font-black text-sm tracking-tight">Get in Touch</span>
          </div>
        )}
      </button>
    </div>
  );
}

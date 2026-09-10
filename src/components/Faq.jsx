export default function Faq({ items = [], title = 'Frequently Asked Questions', subtitle }) {
  return (
    <section className="section">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">{title}</h2>
          {subtitle && <p className="section-subtitle mt-3 mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <details
              key={i}
              className="group border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <summary
                className="cursor-pointer list-none flex items-center justify-between gap-4 py-4 text-sm font-semibold select-none hover:text-[#c47a4a] transition-colors"
                style={{ color: 'var(--color-text-strong)' }}
              >
                <span>{item.q}</span>
                <span className="text-lg transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                  style={{ color: 'var(--color-accent)' }}>↓</span>
              </summary>
              <div className="pb-5 text-sm leading-relaxed text-gray-500 animate-in fade-in slide-in-from-top-1 duration-200">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

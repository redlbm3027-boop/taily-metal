import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import TechnicalRef from '../components/TechnicalRef';
import { categories } from '../data/categories';
import { productsFaqs } from '../data/faqs';

export default function Products() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // SEO Meta Tags Injection
    const updateMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.setAttribute('content', content);
    };

    document.title = "Precision Products | Custom Fasteners & Metal Parts | Taily Metal";
    updateMeta('description', "Explore Taily Metal's precision fastener product line, including cold headed fasteners, nuts, washers, and CNC precision parts for Automotive, Solar, and Electronics industries.");
    updateMeta('keywords', "Custom Bolts, Precision Screws, Cold Heading Products, CNC Metal Parts, Fastener Categories, Industrial Hardware China");
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', "https://www.taily-metal.com/products/");

    // OG Tags
    updateMeta('og:url', "https://www.taily-metal.com/products/", 'property');
    updateMeta('og:title', "Precision Products | Custom Fasteners & Metal Parts | Taily Metal", 'property');
    updateMeta('og:description', "Custom-engineered fasteners from cold heading to CNC — every part built to your drawing, your standard, your application.", 'property');
  }, []);

  return (
    <>
      <PageHero
        title="Precision Products"
        subtitle="Custom-engineered fasteners from cold heading to CNC — every part built to your drawing, your standard, your application."
      />

      <section className="section">
        <div className="page-container">
          {/* Category cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="card cursor-pointer transition-all duration-300 relative overflow-hidden"
                style={active === i ? { borderColor: 'var(--color-accent)', boxShadow: '0 8px 32px rgba(44,62,80,0.12)', borderWidth: '2px' } : {}}
                onClick={() => setActive(i)}
              >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: active === i ? 'var(--color-accent)' : 'var(--color-text-strong)' }}>{cat.name}</h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-body)' }}>{cat.desc}</p>
                      <span className="inline-block text-xs font-medium px-2 py-1 rounded-sm"
                        style={{ background: 'var(--color-bg-base)', color: 'var(--color-text-body)' }}>
                        {cat.specs}
                      </span>
                      <div className="mt-4">
                        <Link to={`/products/${cat.slug}/`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                          style={{ background: 'var(--color-accent-warm)', color: '#ffffff', boxShadow: '0 4px 12px rgba(196, 122, 74, 0.3)' }}>
                          View details <ArrowRight size={15} strokeWidth={3} />
                        </Link>
                      </div>
                    </div>
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${active === i ? '' : ''}`}
                    style={{ background: active === i ? 'var(--color-accent)' : 'var(--color-border)' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Active category showcase */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-sm overflow-hidden"
              style={{ border: '1px solid var(--color-border)', background: '#fff' }}>
              <img
                key={active}
                src={categories[active].image}
                alt={categories[active].alt}
                className="w-full h-full object-contain aspect-[3/2] animate-in fade-in duration-300"
                loading="lazy"
              />
            </div>
            
            {/* Capability highlights based on the images */}
            <div className="flex flex-col justify-center">
              <div className="label-tag mb-6">Custom Showcase</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-strong)' }}>
                {categories[active].name} Capabilities
              </h3>
              <ul className="space-y-4">
                {[
                  'Manufactured according to your technical drawings (STP, DWG, PDF)',
                  'Wide range of head styles: Hex, Flange, Socket, Torx, and Specials',
                  'Tight tolerances up to +/- 0.01mm for precision components',
                  'Multiple material options and professional surface treatments',
                  '100% inspection and batch traceability available',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-body)' }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 rounded-sm" style={{ background: 'var(--color-bg-base)', border: '1px solid var(--color-border)' }}>
                <p className="text-xs italic leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                  The assortment above demonstrates our capacity for custom geometries and high-precision finishing. Send us your requirements for a quote.
                </p>
              </div>
            </div>
          </div>

          {/* Product Resources */}
          <div className="mt-12 p-8 rounded-sm text-center" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-strong)' }}>Product Resources</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-body)' }}>
              Download our catalog and company profile for detailed specifications and capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/catalog/" className="btn-primary text-sm">
                <Download size={16} /> Browse Product Catalog
              </Link>
              <Link to="/company-profile/" className="btn-secondary text-sm">
                <Download size={16} /> Browse Company Profile
              </Link>
            </div>
          </div>

          {/* Materials + CTA */}
          <div className="mt-8 p-8 rounded-sm" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-accent)' }}>
                  Material Options
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Carbon Steel', 'Stainless Steel 304/316', 'Alloy Steel', 'Brass', 'Aluminum', 'Titanium'].map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-sm text-xs font-medium"
                      style={{ background: 'var(--color-bg-base)', color: 'var(--color-text-body)' }}>
                      {m}
                    </span>
                  ))}
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mt-6 mb-2" style={{ color: 'var(--color-accent)' }}>
                  Surface Finishes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Zinc Plated', 'Hot-dip Galvanized', 'Dacromet', 'Black Oxide', 'Nickel Plated', 'Passivated'].map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-sm text-xs font-medium"
                      style={{ background: 'var(--color-bg-base)', color: 'var(--color-text-body)' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[200px]">
                <Link to="/catalog/" className="btn-primary text-sm justify-center">
                  <Download size={16} /> Browse Catalog Online
                </Link>
                <Link to="/contact/" className="btn-secondary text-sm justify-center">
                  Request Custom Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Manufacturing Process (Flowchart Style) */}
          <div className="mt-8 p-8 md:p-12 rounded-sm" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
            <div className="flex items-center gap-3 mb-10 border-b-2 pb-2 w-fit" style={{ borderColor: 'var(--color-accent)' }}>
              <span className="text-xl font-bold" style={{ color: 'var(--color-text-strong)' }}>生产工艺</span>
              <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>Technical process</span>
            </div>
            
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <svg className="w-full min-w-[600px] h-auto" viewBox="0 0 680 900" role="img" style={{ display: 'block' }}>
                <title>Taily Metal Technical Production Process Flowchart</title>
                <defs>
                  <marker id="arrow-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                  </marker>
                </defs>
                
                {/* Nodes & Arrows - Row 1 */}
                <g transform="translate(190, 80)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">线材</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Feed in</text>
                </g>
                <path d="M 245 80 L 315 80" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(380, 80)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">检查</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Material inspection</text>
                </g>
                
                {/* Row 2: Heading */}
                <path d="M 380 135 L 380 175" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(380, 240)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">打头</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Heading</text>
                </g>
                
                {/* Secondary Machining & Clamping */}
                <path d="M 325 240 L 255 240" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(190, 240)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">二次加工</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Secondary machining</text>
                </g>
                
                <path d="M 435 240 L 505 240" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(570, 240)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">合模</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Clamping</text>
                </g>
                
                {/* Threading */}
                <path d="M 380 295 L 380 335" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <path d="M 570 295 L 390 380" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <path d="M 190 295 L 370 380" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(380, 400)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">搓牙</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Threading</text>
                </g>
                
                {/* Heat Treatment & Surface Treatment */}
                <path d="M 190 350 L 190 295" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(190, 560)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">热处理</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Heat treatment</text>
                </g>
                <path d="M 325 400 L 225 515" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <path d="M 245 560 L 315 560" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <path d="M 380 455 L 380 495" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(380, 560)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">表面处理</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Surface treatment</text>
                </g>
                
                {/* Anti-slipping & Baking */}
                <path d="M 435 560 L 505 560" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(570, 560)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">防松处理</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Anti-slipping patch</text>
                </g>
                <path d="M 380 615 L 380 655" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <path d="M 570 615 L 435 700" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(380, 720)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">除氢</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Baking</text>
                </g>
                
                {/* QA & Packaging & Shipping */}
                <path d="M 325 720 L 255 720" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(190, 720)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">检查</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">QA</text>
                </g>
                <path d="M 190 775 L 190 825 L 225 825" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(290, 825)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">包装</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Packaging</text>
                </g>
                <path d="M 345 825 L 415 825" stroke="#475569" strokeWidth="1.2" fill="none" markerEnd="url(#arrow-blue)" />
                <g transform="translate(480, 825)">
                  <circle r="55" fill="#fff" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <text y="-8" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-strong)">出货</text>
                  <text y="12" textAnchor="middle" fontSize="10" fill="var(--color-accent)">Shipping</text>
                </g>
              </svg>
            </div>
          </div>
          
          <TechnicalRef />
        </div>
      </section>

      <Faq
        items={productsFaqs}
        title="Fastener & Product FAQs"
        subtitle="Quick answers on standards, samples, tolerances, and custom quoting."
      />
    </>
  );
}

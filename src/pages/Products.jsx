import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronDown, ChevronUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import TechnicalRef from '../components/TechnicalRef';
import { categories } from '../data/categories';
import { productsFaqs } from '../data/faqs';

export default function Products() {
  const [isProcessOpen, setIsProcessOpen] = useState(false);

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
          {/* Category cards - Simplified to direct links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={`/products/${cat.slug}/`}
                className="card group hover:border-var(--color-accent) transition-all duration-300 p-0 overflow-hidden flex flex-col sm:flex-row"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="sm:w-48 shrink-0 bg-white p-4">
                  <img src={cat.image} alt={cat.alt} className="w-full h-full object-contain aspect-square group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#c47a4a] transition-colors">{cat.name}</h3>
                  <p className="text-sm leading-relaxed mb-4 text-gray-500">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-sm text-gray-600">
                      {cat.specs}
                    </span>
                    <span className="text-[#c47a4a] text-sm font-bold flex items-center gap-1">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Technical Guides CTA - Replaces redundant chips */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-sm bg-gray-50 border border-dashed border-gray-200 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#1a1f2e]">Expert Material Guide</h4>
                <p className="text-sm text-gray-500 mb-6">Compare carbon steel, stainless 304/316, and exotic alloys for your specific application requirements.</p>
              </div>
              <Link to="/materials/" className="btn-secondary text-sm w-fit">
                Explore Materials <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-8 rounded-sm bg-gray-50 border border-dashed border-gray-200 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#1a1f2e]">Technical Catalog</h4>
                <p className="text-sm text-gray-500 mb-6">Download our complete 2026 product catalog with full dimensional specifications and surface treatment options.</p>
              </div>
              <Link to="/catalog/" className="btn-primary text-sm w-fit">
                Download Catalog <Download size={16} />
              </Link>
            </div>
          </div>

          {/* Manufacturing Process (Expandable Flowchart) */}
          <div className="mt-8 rounded-sm overflow-hidden" style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
            <button 
              onClick={() => setIsProcessOpen(!isProcessOpen)}
              className="w-full p-8 md:p-10 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-8" style={{ background: 'var(--color-accent)' }} />
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold" style={{ color: 'var(--color-text-strong)' }}>生产工艺</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>Technical process</span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-body)' }}>
                    Explore our professional manufacturing workflow and quality control loops.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--color-accent)' }}>
                {isProcessOpen ? 'Collapse' : 'Expand'}
                {isProcessOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isProcessOpen ? 'max-h-[1200px] border-t opacity-100' : 'max-h-0 opacity-0'}`} style={{ borderColor: 'var(--color-border)' }}>
              <div className="p-8 md:p-12 overflow-x-auto">
                <svg className="w-full min-w-[600px] h-auto mx-auto" viewBox="0 0 680 900" role="img" style={{ display: 'block' }}>
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

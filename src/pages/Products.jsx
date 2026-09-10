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

          {/* Manufacturing Process */}
          <div className="mt-8 p-8 md:p-12 rounded-sm" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-strong)' }}>From Drawing To Production</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-body)' }}>
                A streamlined manufacturing workflow designed for precision, speed, and cost-efficiency.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                {[
                  { step: 'Step 1', title: 'Drawing Review', desc: 'Detailed analysis of your STP/DWG files for manufacturing feasibility.' },
                  { step: 'Step 2', title: 'Engineering Optimization', desc: 'Expert suggestions on material and process to reduce your unit cost.' },
                  { step: 'Step 3', title: 'Tooling Development', desc: 'In-house precision die fabrication tailored to your specific geometry.' },
                  { step: 'Step 4', title: 'Mass Production', desc: 'High-speed multi-station cold heading with continuous quality monitoring.' },
                  { step: 'Step 5', title: 'Inspection & Shipment', desc: '100% AOI optical sorting and professional export packaging.' }
                ].map((item, i, arr) => (
                  <div key={i} className="w-full flex flex-col items-center">
                    <div className="w-full md:flex items-center gap-6 p-6 rounded-sm bg-white border border-dashed border-gray-200 hover:border-solid hover:border-[#c47a4a]/30 transition-all">
                      <div className="text-xs font-black uppercase tracking-widest text-[#c47a4a] mb-2 md:mb-0 md:w-24 shrink-0">{item.step}</div>
                      <div className="flex-1">
                        <div className="text-lg font-bold text-[#1a1f2e] mb-1">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="py-2 text-[#c47a4a]/40">
                        <ArrowRight size={24} className="rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
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

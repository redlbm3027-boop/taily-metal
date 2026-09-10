import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import Faq from '../components/Faq';
import BannerSlider from '../components/BannerSlider';
import { homeFaqs } from '../data/faqs';
import { useEffect } from 'react';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500M+', label: 'Annual Capacity (pcs)' },
  { value: '50+', label: 'Export Countries' },
  { value: 'ISO 9001', label: 'Certified Quality' },
];

export default function Home() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // SEO Meta Tags Injection
    const updateMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.setAttribute('content', content);
    };

    document.title = "Taily Metal | Custom Fasteners & Cold Heading Manufacturer";
    updateMeta('description', "Custom Fastener Manufacturer in China — ISO 9001 certified manufacturer specializing in cold heading production of precision bolts, screws, and metal parts. Exporting to 50+ countries.");
    updateMeta('keywords', "Custom Fastener Manufacturer China, Cold Heading Factory, Precision Bolts Supplier, Industrial Fastener Solutions, OEM Fastener China, Multi-station Cold Heading, Precision CNC Turning, Custom Metal Stamping, Global Fastener Export");
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', "https://www.taily-metal.com/");

    // OG Tags
    updateMeta('og:url', "https://www.taily-metal.com/", 'property');
    updateMeta('og:title', "Taily Metal | Custom Fasteners & Cold Heading Manufacturer", 'property');
    updateMeta('og:description', "ISO 9001 certified. Multi-station Cold Heading, CNC machining, stamping. Exporting precision fasteners to 50+ countries since 2001.", 'property');

    return () => {
      const existing = document.getElementById('faq-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <>
      <BannerSlider />
      
      {/* Core Industry Solutions */}
      <section className="section">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-heading">Core Industry Solutions</h2>
            <p className="section-subtitle mt-3 mx-auto">
              Strategic fastener manufacturing for global high-growth industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: 'https://sc02.alicdn.com/kf/Aab965ac7f50349c68e517647b4c11dc9x.png', alt: 'Full solar panel mounting bolt assembly', label: 'Solar & Renewable Energy', desc: 'Dacromet and HDG coated mounting hardware designed for harsh environments.' },
              { src: 'https://sc02.alicdn.com/kf/A5116e59c0a5245b1aa05452f3a683f4bk.png', alt: 'Full automotive flanged bolt Grade 12.9', label: 'Automotive & EV Solutions', desc: 'Grade 12.9 engine bolts and lightweight fasteners for EV power packs.' },
              { src: 'https://sc02.alicdn.com/kf/A0779eb83a36f47439a1290456cbae6a6r.png', alt: 'Full precision brass furniture screw', label: 'Home Office', desc: 'Decorative brass screws and custom hardware for ergonomic office furniture.' },
              { src: 'https://sc02.alicdn.com/kf/Ad2a8c2e823db4ac092148a0241ed2a8dz.png', alt: 'Full M1.2 precision micro screw', label: 'Precision Electronics', desc: 'Consistent M1.2 micro-screws for automated electronics assembly lines.' },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-sm overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                <img src={item.src} alt={item.alt} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
                <div className="absolute inset-0 p-5 flex flex-col justify-end"
                  style={{ background: 'linear-gradient(transparent, rgba(26,31,46,0.95))' }}>
                  <span className="text-white text-base font-bold tracking-wide block mb-1">{item.label}</span>
                  <p className="text-white/80 text-[11px] leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Video Section */}
      <section style={{ background: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="page-container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-sm overflow-hidden relative shadow-2xl"
              style={{ border: '1px solid var(--color-border)' }}>
              <video
                className="w-full"
                controls
                preload="none"
                poster="https://sc02.alicdn.com/kf/Addc2281798d449faafccb7b2bc769e13X.png"
              >
                <source src="/factory-tour.mp4" type="video/mp4" />
              </video>
            </div>

            <div>
              <div className="label-tag mb-6">Real Manufacturer</div>
              <h2 className="section-heading mb-4">Inside Taily Metal</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-body)' }}>
                Our 15,000+ sqm facility in Dongguan houses over 130 advanced production machines. 
                We combine high-speed cold heading with precision CNC & Stamping to deliver 500M+ high-precision parts annually.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.slice(1, 4).map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-sm" style={{ background: 'var(--color-bg-base)', border: '1px solid var(--color-border)' }}>
                    <div className="text-lg md:text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-sm bg-blue-50/50 border border-blue-100">
                <p className="text-xs italic leading-relaxed text-blue-800">
                  "To become the most trusted custom fastener partner for global manufacturers -- 
                  combining cold heading expertise with relentless quality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-heading">Featured Case Study</h2>
            <p className="section-subtitle mt-3 mx-auto">
              How we solve complex technical challenges for our global manufacturing partners.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center card p-0 overflow-hidden">
            <div className="h-full min-h-[300px]">
              <img
                src="https://sc02.alicdn.com/kf/Af0a1a31ea86d419da62566862bd416f0e.png"
                alt="Automated electronics assembly line"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="label-tag mb-6" style={{ background: 'rgba(196,122,74,0.1)', color: '#c47a4a', border: '1px solid rgba(196,122,74,0.2)' }}>
                Electronics & Precision
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1a1f2e]">Eliminating Assembly Bottlenecks for Wearable Tech</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-body)' }}>
                A leading electronics manufacturer faced a 8% manual rework rate due to M1.2 micro screw inconsistencies. Taily Metal implemented tungsten dies and 100% AOI sorting to reduce the jam rate to near-zero.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="text-xl font-bold" style={{ color: '#c47a4a' }}>0.01%</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500">Assembly Jam Rate</div>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: '#c47a4a' }}>+15%</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500">Throughput Increase</div>
                </div>
              </div>
              <Link to="/blog/case-study-m1.2-electronics-fasteners/" className="btn-primary text-sm py-3 px-6">
                Read Full Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Manufacturers Worldwide */}
      <section style={{ background: 'var(--color-bg-surface)' }}>
        <div className="page-container py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-heading">Trusted by Manufacturers Worldwide</h2>
            <p className="section-subtitle mt-3 mx-auto">
              Long-term partnerships built on consistent quality, on-time delivery and honest communication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'Taily has been our fastener supplier for over 6 years. Their cold heading quality is consistent batch after batch, and lead times have never slipped.', name: 'Procurement Manager', company: 'Automotive OEM · Germany', initials: 'KG', color: '#c47a4a' },
              { quote: 'We moved 4 fastener SKUs from two suppliers to Taily. One partner, one invoice, zero quality complaints in 18 months. Their QC reports are excellent.', name: 'Supply Chain Director', company: 'Industrial Equipment · USA', initials: 'RJ', color: '#2c3e50' },
              { quote: 'Fast sampling — 9 days from drawing to sample. The engineering team even suggested a material change that cut our unit cost by 11%.', name: 'R&D Lead', company: 'Hardware Brand · Netherlands', initials: 'MV', color: '#3b6e8f' },
            ].map((t, i) => (
              <div key={i} className="card flex flex-col">
                <div className="text-3xl mb-3" style={{ color: t.color, fontFamily: 'Georgia, serif' }}>“</div>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--color-text-strong)' }}>{t.quote}</p>
                <div className="flex items-center gap-3" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-text-strong)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-body)' }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Simplified Selection */}
      <Faq items={homeFaqs.slice(0, 4)} />

      {/* Ready to Start Your Project? */}
      <section style={{ background: 'var(--color-bg-surface)' }}>
        <div className="page-container py-20 text-center max-w-2xl mx-auto">
          <h2 className="section-heading">Ready to Start Your Project?</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Send us your drawings or specifications and receive a competitive quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact/" className="btn-primary">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link to="/products/" className="btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

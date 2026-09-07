import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://sc02.alicdn.com/kf/Hcd70baeb1e2a46a8a4bd3c731c264e1fO.jpg',
    label: 'Automotive & Energy Solutions',
    title: 'High-Strength Performance',
    desc: 'Grade 12.9 bolts and Dacromet-coated fasteners for EV batteries and solar power systems.'
  },
  {
    image: 'https://sc02.alicdn.com/kf/H3865f9b84b8a423f84699b66c62a4f0f4.jpg',
    label: 'High-Tech Electronics',
    title: 'Precision at the Micro-Scale',
    desc: 'M1.2 Phillips micro screws and custom hardware for high-speed automated assembly lines.'
  },
  {
    image: 'https://sc02.alicdn.com/kf/A1d5f8a4420c240a88b93af185951eb41u.png',
    label: 'Infrastructure & OEM',
    title: 'Engineered for Durability',
    desc: 'DIN, JIS & ISO compliant structural bolts and custom hardware for global infrastructure projects.'
  }
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-[#1a1f2e]">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.label}
            className="w-full h-full object-cover opacity-60 object-center"
          />
          {/* Subtle industrial blueprint overlay on top of images */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(26,31,46,0.9) 0%, rgba(26,31,46,0.4) 50%, rgba(26,31,46,0.2) 100%)' }} />
        </div>
      ))}

      <div className="page-container relative z-10 py-20 w-full">
        <div className="max-w-3xl">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="label-tag mb-8 border-white/20 text-[#c47a4a] bg-white/5 backdrop-blur-sm">
              Global Standard Compliant (DIN, JIS, ISO)
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.04em] mb-8">
              China Custom Fasteners <br /> & Precision Parts
            </h1>
            
            {/* Features Row */}
            <div className="flex flex-wrap gap-6 mb-10 text-white/90">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#c47a4a] font-bold">MOQ</span>
                <span className="text-lg font-bold">1 Pieces</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#c47a4a] font-bold">Sample Lead Time</span>
                <span className="text-lg font-bold">3-15 Days</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#c47a4a] font-bold">Shipping To</span>
                <span className="text-lg font-bold">50+ Countries</span>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[120px]">
              <div key={current} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="text-sm font-black uppercase tracking-[0.2em] text-white/50 mb-3">{slides[current].label}</div>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mb-10">
                  {slides[current].desc}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary border-none" style={{ background: '#c47a4a' }}>
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/capabilities" className="btn-secondary border-white/20 text-white hover:border-white hover:text-white">
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 transition-all duration-300 rounded-full ${i === current ? 'w-12 bg-[#c47a4a]' : 'w-6 bg-white/20'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

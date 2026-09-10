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
    }, 8000); // Slow down carousel to 8s to stabilize LCP
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] h-[80vh] flex items-center overflow-hidden bg-[#1a1f2e]">
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
            fetchpriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Subtle industrial blueprint overlay on top of images */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(26,31,46,0.9) 0%, rgba(26,31,46,0.4) 50%, rgba(26,31,46,0.2) 100%)' }} />
        </div>
      ))}

      <div className="page-container relative z-10 py-12 md:py-20 w-full">
        <div className="max-w-3xl">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="label-tag mb-6 md:mb-8 border-white/20 text-[#c47a4a] bg-white/5 backdrop-blur-sm text-[10px] md:text-xs">
              Global Standard Compliant (DIN, JIS, ISO)
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4 md:mb-6">
              Custom Cold Headed <br className="hidden sm:block" /> Fasteners Manufacturer
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#c47a4a] font-bold leading-relaxed max-w-2xl mb-6 md:mb-8">
              Reduce machining cost by up to 35% with high-speed cold heading solutions.
            </p>

            {/* Trust Points Row */}
            <div className="flex flex-col gap-2 md:gap-3 mb-8 md:mb-10 text-white/90">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-base md:text-xl">✅</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">20+ Years Manufacturing Experience</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-base md:text-xl">✅</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">500M+ Parts Produced Annually</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-base md:text-xl">✅</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">ISO 9001 Certified Quality System</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link to="/contact/" className="btn-primary border-none text-sm md:text-base py-3 md:py-4 px-6 md:px-8 w-full sm:w-auto text-center" style={{ background: '#c47a4a' }}>
                Upload Your Request <ArrowRight size={18} className="ml-2 inline" />
              </Link>
              <Link to="/capabilities/" className="btn-secondary border-white/20 text-white hover:border-white hover:text-white text-sm md:text-base py-3 md:py-4 px-6 md:px-8 w-full sm:w-auto text-center">
                Explore Capabilities
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

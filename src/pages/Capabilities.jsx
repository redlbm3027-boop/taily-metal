import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cog, PenTool, Factory, FlaskConical } from 'lucide-react';
import PageHero from '../components/PageHero';

const timeline = [
  { icon: <PenTool size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Design & Engineering', desc: 'Our engineers review your drawings and optimize for manufacturability. We support STP, DWG, PDF, and hand sketches.' },
  { icon: <Cog size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Tooling & Setup', desc: 'In-house tooling workshop with CNC tool grinders, EDM, and custom die fabrication for rapid turnaround.' },
  { icon: <Factory size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Production', desc: 'Multi-shift production across high-speed cold heading, thread rolling, CNC, and automated stamping lines.' },
  { icon: <FlaskConical size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Quality Control', desc: 'Full inspection per ISO 9001: dimensional checks, hardness testing, and surface inspection.' },
];

const equipment = [
  'Multi-station Cold Heading Machines',
  'Mold closing machine',
  'Thread Rolling Machines',
  'CNC Turning Centers',
  'CNC Milling Machines',
  'Automatic Stamping Presses',
];

const certs = [
  { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
  { name: 'RoHS Compliant', desc: 'Restriction of Hazardous Substances' },

];

export default function Capabilities() {
  return (
    <>
      <PageHero
        title="Manufacturing Capabilities"
        subtitle="From concept to delivery, our integrated manufacturing process ensures quality at every step."
      />

      {/* Process Timeline */}
      <section className="section">
        <div className="page-container">
          <h2 className="section-heading text-center mb-14">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {timeline.map((step, i) => (
              <div key={i} className="card text-center relative">
                <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'var(--color-accent)', color: '#fff' }}>
                  {i + 1}
                </span>
                <div className="mb-4 inline-flex">{step.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-body)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section style={{ background: 'var(--color-bg-surface)' }}>
        <div className="page-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">Production Equipment</h2>
              <p className="section-subtitle mb-8">
                Our 15,000+ sqm facility is optimized for high-speed cold heading and precision CNC machining, providing a robust hardware foundation for custom projects.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {equipment.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-body)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--color-accent)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {/* Factory Image */}
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                <img
                  src="https://sc02.alicdn.com/kf/Af2f9a1461eb24f909a6fddbd7690022a6.png"
                  alt="Cold heading machines production line"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              {/* Certifications */}
              <div className="grid grid-cols-2 gap-4">
                {certs.map((cert) => (
                  <div key={cert.name} className="card text-center py-6">
                    <div className="text-sm font-bold text-gray-900 mb-1">{cert.name}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-body)' }}>{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance System - Specific Tests */}
      <section className="section">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label-tag mb-6">Precision Manufacturing</div>
              <h2 className="section-heading mb-4">Quality Assurance System</h2>
              <p className="section-subtitle mb-8">
                Our multi-stage inspection protocol ensures that every batch meets the highest standards for dimensional accuracy and mechanical performance.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Dimensional Inspection', desc: 'Precision measurement of diameters, lengths, and thread pitches using digital calipers and projectors.' },
                  { title: 'Hardness Testing', desc: 'Rockwell or Vickers hardness testing to verify material tempering and heat treatment consistency.' },
                  { title: 'Surface Inspection', desc: 'Detailed visual and instrumental check for plating thickness, smoothness, and coating integrity.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 rounded-sm bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent-warm)' }} className="mt-1" />
                    <div>
                      <div className="text-base font-bold text-[#1a1f2e]">{item.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Main Dimensional - Big */}
              <div className="col-span-2 group relative rounded-sm overflow-hidden border border-gray-200 shadow-sm h-60">
                <img src="https://sc02.alicdn.com/kf/A961c3a86dea344078c3ae9419cfbbef1C.png" alt="Dimensional Inspection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider">Dimensional</div>
              </div>
              {/* Hardness */}
              <div className="group relative rounded-sm overflow-hidden border border-gray-200 shadow-sm h-40">
                <img src="https://sc02.alicdn.com/kf/A36798e98604344848037344007833077e.png" alt="Hardness Testing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider">Hardness</div>
              </div>
              {/* Optical - New */}
              <div className="group relative rounded-sm overflow-hidden border border-gray-200 shadow-sm h-40">
                <img src="https://sc02.alicdn.com/kf/Hbd172298c1f34c389864527b7abdb4656.jpg" alt="Optical Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider">Optical</div>
              </div>
              {/* AOI - New */}
              <div className="group relative rounded-sm overflow-hidden border border-gray-200 shadow-sm h-40">
                <img src="https://sc02.alicdn.com/kf/H1e5ac3176b144fa1b8dc96abf88a192aq.jpg" alt="AOI Sorting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider">AOI System</div>
              </div>
              {/* Surface/Salt Spray - New */}
              <div className="group relative rounded-sm overflow-hidden border border-gray-200 shadow-sm h-40">
                <img src="https://sc02.alicdn.com/kf/H11a6721dc7ca4766a8a451cfab3a10580.jpg" alt="Surface Inspection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider">Surface</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Delivery */}
      <section className="section">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-heading">Logistics & Delivery</h2>
            <p className="section-subtitle mt-3 mx-auto">
              Clear shipping terms, honest lead times and export-ready packaging — from our factory to your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Shipping Terms', desc: 'FOB Shenzhen / CIF / DDP to major ports worldwide. We handle documentation, export licenses and customs clearance.', items: ['FOB / CIF / DDP', 'Export documents', 'Customs handled'] },
              { title: 'Lead Times', desc: 'Samples in 7-10 days, production in 15-30 days depending on quantity and process. We commit to dates — and keep them.', items: ['Samples: 7-10 days', 'Production: 15-30 days', 'On-time tracking'] },
              { title: 'Packaging', desc: 'Export-standard cartons with palletizing, shrink wrap and moisture protection. Kitting, barcoding and custom labeling available.', items: ['Export cartons', 'Palletizing + shrink wrap', 'Barcode / custom labels'] },
              { title: 'Global Reach', desc: 'Exporting to 50+ countries with reliable sea, air and express freight partners. Real-time tracking provided on every order.', items: ['50+ countries', 'Sea / Air / Express', 'Shipment tracking'] },
            ].map((c, i) => (
              <div key={i} className="card">
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text-strong)' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-body)' }}>{c.desc}</p>
                <div className="space-y-2">
                  {c.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-body)' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--color-accent)' }} /> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="page-container text-center max-w-2xl mx-auto">
          <h2 className="section-heading">Have a Complex Project?</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Our engineering team is ready to review your requirements and provide a tailored solution.
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

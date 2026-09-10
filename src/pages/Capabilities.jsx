import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cog, PenTool, Factory, FlaskConical } from 'lucide-react';
import PageHero from '../components/PageHero';

const timeline = [
  { icon: <PenTool size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Design & Engineering', desc: 'Our engineers review your drawings and optimize for manufacturability. We support STP, DWG, PDF, and hand sketches.' },
  { icon: <Cog size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Tooling & Setup', desc: 'In-house tooling workshop with CNC tool grinders, EDM, and custom die fabrication for rapid turnaround.' },
  { icon: <Factory size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Production', desc: 'Multi-shift production across high-speed cold heading, thread rolling, CNC, and automated stamping lines.' },
  { icon: <FlaskConical size={24} style={{ color: 'var(--color-accent)' }} />, title: 'Quality Control', desc: 'Full inspection per ISO 9001: dimensional checks, hardness testing, tensile testing, and salt spray.' },
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

      {/* Quality Assurance (Simplified & Merged) */}
      <section className="section">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-tag mb-6">Precision Manufacturing</div>
              <h2 className="section-heading mb-4">Quality Assurance System</h2>
              <p className="section-subtitle mb-8">
                Every batch undergoes rigorous multi-stage inspection to ensure dimensional precision and material integrity before shipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Dimensional Inspection', 'Hardness Testing', 'Tensile Testing', 'Salt Spray Test', 'Surface Finish Check'].map((q) => (
                  <div key={q} className="flex items-center gap-3 p-3 rounded-sm bg-gray-50 border border-gray-100">
                    <CheckCircle2 size={16} style={{ color: 'var(--color-accent-warm)' }} />
                    <span className="text-sm font-semibold text-gray-700">{q}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-sm overflow-hidden border border-gray-200">
                <img src="https://sc02.alicdn.com/kf/A961c3a86dea344078c3ae9419cfbbef1C.png" alt="QC measurement" className="w-full aspect-square object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-sm overflow-hidden border border-gray-200">
                  <img src="https://sc02.alicdn.com/kf/Ab020d1325bcb4d3abd8e377d63952e2dp.png" alt="Salt spray test" className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className="rounded-sm overflow-hidden border border-gray-200">
                  <img src="https://sc02.alicdn.com/kf/A02e59a23fc9d4de4b9fb9bf85e6e57bez.png" alt="Thread inspection" className="w-full aspect-[4/3] object-cover" />
                </div>
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

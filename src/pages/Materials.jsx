import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import PageHero from '../components/PageHero';

const materials = [
  {
    name: 'Carbon Steel',
    grades: '4.8 / 8.8 / 10.9',
    strength: '400 - 1000 MPa',
    corrosion: 'Poor (needs plating)',
    cost: '$',
    best: 'General-purpose, furniture, machinery, construction',
    note: 'The workhorse. Always pair with zinc, galvanizing or Dacromet finish.',
  },
  {
    name: 'Stainless Steel 304',
    grades: 'A2-70 / A2-80',
    strength: '700 - 800 MPa',
    corrosion: 'Excellent',
    cost: '$$$',
    best: 'Food, pharmaceutical, outdoor, marine-adjacent',
    note: 'Most common stainless. Resists rust without plating.',
  },
  {
    name: 'Stainless Steel 316',
    grades: 'A4-70 / A4-80',
    strength: '700 - 800 MPa',
    corrosion: 'Superior',
    cost: '$$$$',
    best: 'Coastal, chemical plants, harsh chloride environments',
    note: 'Adds molybdenum for maximum corrosion resistance.',
  },
  {
    name: 'Alloy Steel',
    grades: '10.9 / 12.9',
    strength: '1000 - 1200 MPa',
    corrosion: 'Poor (needs coating)',
    cost: '$$',
    best: 'Heavy machinery, engines, structural bolting',
    note: 'Heat-treated for high strength. Dacromet recommended to avoid hydrogen embrittlement.',
  },
  {
    name: 'Brass',
    grades: 'H62 / H65',
    strength: '300 - 500 MPa',
    corrosion: 'Good',
    cost: '$$$$',
    best: 'Plumbing, electrical terminals, decorative hardware',
    note: 'Excellent conductivity. Softer, limited to lower-load applications.',
  },
  {
    name: 'Aluminum',
    grades: '6061 / 7075',
    strength: '250 - 500 MPa',
    corrosion: 'Good',
    cost: '$$$',
    best: 'Aerospace, electronics, outdoor gear, lightweight assemblies',
    note: '1/3 the weight of steel. Watch galvanic corrosion with steel contacts.',
  },
];

export default function Materials() {
  return (
    <>
      <PageHero
        title="Fastener Materials"
        subtitle="Compare strength, corrosion resistance and cost across the materials we manufacture every day."
      />

      {/* Comparison table */}
      <section className="section">
        <div className="page-container">
          <div className="overflow-x-auto rounded-sm" style={{ border: '1px solid var(--color-border)' }}>
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse', minWidth: '760px' }}>
              <thead>
                <tr style={{ background: 'var(--color-accent)' }}>
                  {['Material', 'Grades', 'Strength', 'Corrosion', 'Relative Cost', 'Best For'].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-white font-semibold text-xs uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materials.map((m, i) => (
                  <tr key={m.name} style={{ background: i % 2 === 0 ? 'var(--color-bg-surface)' : 'var(--color-bg-base)' }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: 'var(--color-text-strong)' }}>{m.name}</td>
                    <td className="px-5 py-4" style={{ color: 'var(--color-text-body)' }}>{m.grades}</td>
                    <td className="px-5 py-4" style={{ color: 'var(--color-text-body)' }}>{m.strength}</td>
                    <td className="px-5 py-4" style={{ color: m.corrosion === 'Superior' || m.corrosion === 'Excellent' ? '#1a7a4f' : m.corrosion === 'Good' ? '#8a6d1a' : '#b3442c' }}>
                      {m.corrosion}
                    </td>
                    <td className="px-5 py-4 font-mono" style={{ color: 'var(--color-text-body)' }}>{m.cost}</td>
                    <td className="px-5 py-4" style={{ color: 'var(--color-text-body)' }}>{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            * Strength values are indicative tensile ranges. Exact properties depend on grade, heat treatment and standard (ISO / DIN / ASTM).
          </p>
        </div>
      </section>

      {/* Engineering Tips & Notes */}
      <section style={{ background: 'var(--color-bg-surface)' }}>
        <div className="page-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="section-heading mb-6">Expert Material Insights</h2>
              <div className="space-y-4">
                {materials.slice(0, 3).map((m) => (
                  <div key={m.name} className="card py-5 h-full">
                    <div className="text-base font-bold mb-1.5" style={{ color: 'var(--color-text-strong)' }}>{m.name}</div>
                    <p className="text-sm text-gray-500">{m.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="section-heading mb-6">Engineering Decision Tip</h2>
              <div className="flex-1 p-8 rounded-sm bg-[#1a1f2e] text-white flex flex-col justify-center">
                <Info size={32} className="text-[#c47a4a] mb-6" />
                <p className="text-lg leading-relaxed font-medium mb-6">
                  "Most fastener failures aren't due to poor material, but poor <span className="text-[#c47a4a]">pairing</span> of material + finish for the target environment."
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#c47a4a]" /> Strength vs. Cost
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#c47a4a]" /> Corrosion Logic
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#c47a4a]" /> Weight Savings
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#c47a4a]" /> Cert Compliance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="page-container text-center max-w-2xl mx-auto">
          <h2 className="section-heading">Need Material Guidance?</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Send us your drawing or application details and receive a material + finish recommendation with pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary">
              Ask Our Engineers <ArrowRight size={18} />
            </Link>
            <Link to="/capabilities" className="btn-secondary">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

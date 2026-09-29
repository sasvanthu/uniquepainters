import { Link } from 'react-router-dom';
import BrandsSection from '../../components/BrandsSection';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const UNIQUE = [
  { 
    title: 'High-Reflectance Cool Roof Coatings', 
    desc: 'Specialized elastomeric and ceramic thermal barrier coatings that reflect up to 85% of solar heat, dropping indoor warehouse temperatures by 5°C to 8°C.' 
  },
  { 
    title: 'Corrosion & Rust Treatment for Metal Sheets', 
    desc: 'Deep mechanical de-rusting followed by zinc-rich anti-corrosive epoxy primers to permanently halt oxidation on corrugated Galvalume, GI, and asbestos sheets.' 
  },
  { 
    title: 'Zero Downtime Scheduling', 
    desc: 'We execute shed painting in phased zones or during night shifts and weekends, ensuring zero disruption to daily warehouse storage, forklifts, and logistics operations.' 
  },
  { 
    title: 'Certified Rigging & High-Access Safety', 
    desc: 'Trained painters equipped with safety harnesses, lifelines, scaffolding, and mobile boom lifts fully complying with industrial safety protocols.' 
  },
  { 
    title: 'High-Volume Airless Spray Equipment', 
    desc: 'Commercial-grade airless spray units allowing rapid, uniform coverage over tens of thousands of square feet with optimal paint transfer efficiency.' 
  },
  { 
    title: 'Up to 10-Year Protection Warranty', 
    desc: 'Comprehensive multi-year warranty covering peeling, flaking, and corrosion breakdown with top industrial paint brands.' 
  },
];

const REVIEWS = [
  { 
    name: 'Suresh Narayanan', 
    title: 'Logistics Facility Manager, Sriperumbudur', 
    desc: 'Unique Painters repainted our 45,000 sq.ft. warehouse shed roof and exterior cladding. The thermal reduction was immediate and the finish is outstanding.' 
  },
  { 
    name: 'Balaji Venkatesan', 
    title: 'Plant Operations Head, Ambattur', 
    desc: 'Professional team that adhered strictly to our factory safety rules. Completed the anti-rust treatment and roof coating 2 days ahead of schedule.' 
  },
  { 
    name: 'Gopinath Krishnan', 
    title: 'Warehouse Owner, Madhavaram', 
    desc: 'Clear quotation, genuine industrial grade paints, and daily progress logs. Excellent service for commercial industrial sheds.' 
  },
  { 
    name: 'M. Anand Kumar', 
    title: 'Supply Chain Director, Oragadam', 
    desc: 'Clean execution without disturbing our 24/7 dispatch dock operations. Highly recommended for heavy commercial shed painting.' 
  },
];

const FAQS = [
  { 
    q: 'How do you paint warehouse roofs without disrupting daily operations?', 
    a: 'We work in designated, cordoned-off safety sectors or schedule painting during non-peak hours, weekends, or night shifts. Our airless sprayers use controlled pressure to eliminate overspray over stored inventory.' 
  },
  { 
    q: 'What type of paint is best for corrugated metal warehouse sheds in Chennai?', 
    a: 'For coastal and industrial environments like Chennai, we use zinc-phosphate epoxy primers paired with heavy-duty aliphatic polyurethane (PU) or elastomeric solar heat-reflective topcoats that withstand humidity, salt air, and intense UV rays.' 
  },
  { 
    q: 'Can roof painting reduce heat inside the warehouse?', 
    a: 'Yes. Our specialized high-SRI (Solar Reflective Index) cool roof coatings reflect solar radiation away from the metal roof, lowering roof surface temperatures by up to 20°C and reducing ambient indoor temperatures by 5°C to 8°C.' 
  },
  { 
    q: 'What is the surface preparation process for rusted shed roofs?', 
    a: 'We perform high-pressure water blasting to eliminate grime, followed by wire-brushing or mechanical power grinding to remove existing rust scale down to bare steel before applying rust-converting epoxy primer.' 
  },
  { 
    q: 'Do you provide a warranty on warehouse shed painting in Chennai?', 
    a: 'Yes. Depending on the coating specification selected, we provide 5 to 10-year manufacturer-backed and workmanship warranties against peeling, blistering, and corrosion.' 
  },
];

export default function WarehouseShed() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              WAREHOUSE SHED PAINTING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Warehouse Shed <br className="mobile-break" /><span className="accent-circle">Painting</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Heavy-duty anti-corrosion, heat-reflective, and weather-proof painting solutions for industrial sheds, godowns, and logistics parks across Chennai.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🛡️ Rust &amp; Weather Shield</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>❄️ Cool Roof Heat Barrier</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#a78bfa', color: '#082f49', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>⏱️ Zero Downtime</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Warehouse Assessment <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="/images/warehouse_shed_hero.jpg" 
          alt="Warehouse Shed Painting Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>
            Why Choose Our Warehouse Shed Painting
          </h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px', textAlign: 'left' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/warehouse_roof_paint.jpg" alt="Anti-Corrosive Roof Coating" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Anti-Corrosive Roof Coating</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Eliminates rust and seals leaky joints on corrugated GI, Galvalume &amp; metal sheets.</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/industrial_space.webp" alt="Heat-Reflective Cool Roof" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Thermal Barrier Tech</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>High SRI coatings reducing ambient indoor warehouse temperature by 5°C to 8°C.</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/climate-resistant.webp" alt="Industrial Durability" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Heavy-Duty Exterior Cladding</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Industrial polyurethane finishes protecting external walls from intense heat, heavy monsoon rain, and pollution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Warehouse Shed Solutions We Offer</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Corrugated Metal Roof Painting</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                Complete restoration of industrial roofing sheets with chemical rust conversion, high-adhesion zinc primers, and UV-resistant elastomeric waterproofing membranes.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Wall Cladding &amp; PEB Structures</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                Pre-Engineered Building (PEB) sidewall painting, steel columns, canopies, and loading bays using high-durability weather-shield coatings.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Internal Ceiling &amp; Purlin Coating</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                Brightening warehouse interiors with reflective white airless spray coatings on purlins, rafters, and undersides of roof sheets to maximize internal illumination and cut power bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Our Industrial Process</h2>
          <div className="responsive-grid-auto">
            {[
              { t: 'Safety & Site Audit', d: 'Comprehensive roof integrity check, rust assessment, and safety rigging setup.' },
              { t: 'Surface Prep & De-Rusting', d: 'High-pressure power washing, mechanical wire brushing, and rust chemical converter.' },
              { t: 'Anti-Corrosion Priming', d: 'Application of high-performance zinc phosphate / epoxy industrial primer.' },
              { t: 'Airless Topcoat Spray', d: 'Dual coats of aliphatic PU or cool-roof elastomeric paint with DFT micron verification.' }
            ].map((step, i) => (
              <div key={i} style={{ border: 'var(--brutalist-border)', padding: '32px', position: 'relative', background: 'var(--white)', color: 'var(--blue-900)' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '20px', background: 'var(--orange-500)', color: 'var(--white)', padding: '4px 12px', fontWeight: 900, borderRadius: '20px', border: 'var(--brutalist-border)' }}>
                  STEP {i + 1}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '16px', marginBottom: '12px' }}>{step.t}</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CONSULTATION / TECHNICAL BANNER ──────────────── */}
      <section className="brutalist-section" style={{ padding: '100px 0', background: 'var(--orange-500)', borderBottom: '4px solid var(--blue-900)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '24px', textTransform: 'uppercase' }}>
            Free Site Inspection &amp; Coating Specification
          </h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)', lineHeight: 1.5, marginBottom: '32px' }}>
            Every warehouse has unique exposure conditions. Our technical painting engineers conduct a detailed on-site survey in Chennai to calculate surface area, assess rust levels, and provide a tailored coating system with transparent per-sq-ft rates.
          </p>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '1.25rem' }}>
            Schedule Warehouse Inspection
          </Link>
        </div>
      </section>

      {/* ── 6. WHY WE ARE UNIQUE ────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '48px', textTransform: 'uppercase' }}>
            Why We Are Unique
          </h2>
          <div style={{ borderTop: '4px solid var(--blue-900)' }}>
            {UNIQUE.map((item, idx) => (
              <div className="swiss-row" key={idx} style={{ background: idx % 2 === 0 ? 'var(--gray-50)' : 'var(--white)', padding: '32px 0' }}>
                <h3 className="swiss-row-title" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', color: idx % 2 === 0 ? 'var(--orange-500)' : 'var(--blue-900)' }}>{item.title}</h3>
                <p className="swiss-row-desc" style={{ fontSize: '1.1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HAPPY CUSTOMERS (REVIEWS) ───────────────────── */}
      <section className="brutalist-section block-gray" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Trusted By Industrial Leaders</h2>
          <div className="responsive-grid-auto">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '32px', boxShadow: '6px 6px 0 var(--orange-500)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#FFD400', fontSize: '1.25rem', marginBottom: '12px' }}>★★★★★</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '12px' }}>{rev.title}</h3>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gray-800)', flexGrow: 1, marginBottom: '20px' }}>"{rev.desc}"</p>
                <div style={{ borderTop: '2px solid var(--gray-200)', paddingTop: '12px', fontWeight: 800, color: 'var(--blue-900)' }}>
                  {rev.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ───────────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FAQS.map((faq, idx) => (
              <details key={idx} style={{ background: 'var(--gray-50)', border: 'var(--brutalist-border)', padding: '20px', cursor: 'pointer' }}>
                <summary style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--blue-900)', outline: 'none' }}>{faq.q}</summary>
                <p style={{ marginTop: '12px', fontSize: '1.1rem', fontWeight: 500, color: 'var(--gray-800)', lineHeight: 1.5 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. BRANDS ───────────────────────────────────────── */}
      <BrandsSection />

      {/* ── 10. CTA ─────────────────────────────────────────── */}
      <section className="block-orange" style={{ padding: '100px 0', textAlign: 'center', borderTop: '4px solid var(--blue-900)' }}>
        <div className="container">
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Ready to Protect Your Warehouse?</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)', marginBottom: '32px' }}>
            Call Chennai’s leading industrial shed painting contractors for a free site assessment today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
              Request Industrial Quotation <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

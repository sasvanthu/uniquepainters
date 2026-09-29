import { Link } from 'react-router-dom';
import BrandsSection from '../../components/BrandsSection';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const UNIQUE = [
  { 
    title: 'Certified Applicators for Top Chemical Brands', 
    desc: 'Authorized application partners for Asian Paints Industrial Coatings, Fosroc, Sika, BASF Master Builders, and Dr. Fixit epoxy and polyurethane systems.' 
  },
  { 
    title: 'Heavy-Duty Forklift & Load Bearing Capacity', 
    desc: 'High compressive strength exceeding 50 N/mm², engineered to withstand constant heavy forklift traffic, pallet trucks, and machinery vibrations without cracking.' 
  },
  { 
    title: 'Seamless, Joint-Free & Hygienic', 
    desc: 'Non-porous, monolithic resin finish preventing bacterial growth, dust generation, and liquid penetration. Ideal for pharma, food processing, and hospital cleanrooms.' 
  },
  { 
    title: 'Chemical & Thermal Shock Resistance', 
    desc: 'PU resin screeds withstand temperatures up to 120°C, extreme thermal cycling, aggressive acids, alkalis, solvent spills, and frequent steam washdowns.' 
  },
  { 
    title: 'Mechanical Diamond Grinding Prep', 
    desc: 'Heavy triple-head planetary diamond floor grinders opening concrete pores to achieve CSP-2 to CSP-4 profile for maximum epoxy mechanical bonding.' 
  },
  { 
    title: 'Complete Industrial Safety Line Marking', 
    desc: 'High-visibility safety walkway demarcations, forklift pathways, hazard hatchings, and parking bays compliant with 5S and OSHA standards.' 
  },
];

const REVIEWS = [
  { 
    name: 'S. Shanmugam', 
    title: 'Operations Director, Ambattur Auto Ancillary', 
    desc: 'Unique Painters installed 25,000 sq.ft. of 3mm self-leveling epoxy flooring in our machine shop. The floor finish is mirror-glossy and handles our 3-ton forklifts easily.' 
  },
  { 
    name: 'Dr. V. Raghavan', 
    title: 'Quality Head, Pharmaceutical Labs, Guindy', 
    desc: 'Flawless cleanroom PU flooring with coved skirting. Passed all GMP and cleanroom particle validation checks seamlessly.' 
  },
  { 
    name: 'K. Venkatesan', 
    title: 'Warehouse Head, Sriperumbudur Logistics Park', 
    desc: 'Completed our high-bay warehouse flooring with yellow forklift lane demarcations over a long holiday weekend. Extremely durable work.' 
  },
  { 
    name: 'M. Jayakumar', 
    title: 'Commercial Showroom Owner, Anna Salai', 
    desc: 'The decorative metallic epoxy floor they laid in our retail showroom looks ultra-luxurious. Our customers always compliment the glossy shine.' 
  },
];

const FAQS = [
  { 
    q: 'What is the main difference between Epoxy and Polyurethane (PU) flooring?', 
    a: 'Epoxy is hard, rigid, and offers exceptional compressive strength and mirror-like gloss, making it ideal for warehouses, auto shops, and retail showrooms. Polyurethane (PU) is more flexible, handles extreme thermal shocks (hot water, cold storage), and resists organic acids, making it perfect for food processing, chemical plants, and heavy-impact areas.' 
  },
  { 
    q: 'What thickness of Epoxy or PU flooring is required for my facility?', 
    a: 'For light foot traffic and dust-proofing, 0.5mm to 1mm epoxy coating is adequate. For medium industrial use and pallet jacks, 2mm to 3mm self-leveling epoxy is recommended. For heavy forklift traffic, chemical exposure, or heavy machinery, 3mm to 5mm heavy-duty PU screed is required.' 
  },
  { 
    q: 'How long does Epoxy / PU flooring take to cure before operations can resume?', 
    a: 'Light foot traffic can usually resume after 24 hours. Full cure for heavy forklifts, pallet trucks, and chemical exposure typically requires 48 to 72 hours depending on ambient temperature and formulation.' 
  },
  { 
    q: 'Can epoxy flooring be applied over old, uneven, or damaged concrete floors?', 
    a: 'Yes. We perform diamond grinding to remove old coatings and grease, repair all surface spalls, potholes, and cracks with epoxy mortar, and level the floor before applying the self-leveling epoxy system.' 
  },
  { 
    q: 'Do you offer anti-static (ESD) or anti-skid epoxy flooring?', 
    a: 'Yes. We install specialized copper-taped conductive ESD (Electro-Static Discharge) epoxy flooring for electronic assembly plants and server rooms, as well as textured anti-skid quartz broadcast finishes for wet areas and vehicle ramps.' 
  },
];

export default function EpoxyPuFlooring() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              EPOXY &amp; PU FLOORING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Epoxy &amp; PU <br className="mobile-break" /><span className="accent-circle">Flooring</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Seamless, high-gloss, chemical-resistant epoxy and polyurethane heavy-duty flooring solutions for factories, warehouses, and commercial spaces across Chennai.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🚜 Forklift Tough</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>✨ High-Gloss Mirror Finish</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#a78bfa', color: '#082f49', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🧪 Chemical &amp; Oil Proof</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Flooring Estimate <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="/images/epoxy_pu_hero.jpg" 
          alt="Epoxy and PU Flooring Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>
            Why Choose Our Epoxy &amp; PU Flooring
          </h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px', textAlign: 'left' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/epoxy_floor_work.jpg" alt="Seamless Self-Leveling Epoxy" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Self-Leveling Seamless Resin</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>100% solid joint-free finish that eliminates concrete dusting, stains, and dirt accumulation.</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/industrial_space.webp" alt="Heavy Forklift Load Capacity" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Forklift &amp; Heavy Impact Proof</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>High compressive strength engineered for continuous heavy pallet trucks, forklifts, and factory machinery.</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/commercial_space.webp" alt="Chemical Resistance & Line Marking" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Chemical Shield &amp; 5S Marking</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Impervious to oil, acids, diesel, solvents, with laser-straight yellow walkways and hazard bays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Flooring Solutions We Deliver</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Self-Leveling Epoxy Flooring (2-4mm)</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                Mirror-like, high-gloss resin finish for automotive workshops, pharmaceutical cleanrooms, laboratories, and modern manufacturing units.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Heavy-Duty PU Concrete Screed</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                Extreme thermal and chemical resistant polyurethane screeds (3mm to 6mm) designed for food processing, dairies, cold storage, and chemical processing zones.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>5S Safety Line &amp; Walkway Marking</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                High-visibility polyurethane aisle marking, forklift gangways, hazard zones, zebra crossings, and parking demarcation complying with global safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Our Precision Installation Process</h2>
          <div className="responsive-grid-auto">
            {[
              { t: 'Diamond Grinding', d: 'Heavy floor grinders remove surface laitance and open concrete pores for maximum mechanical bond.' },
              { t: 'Substrate & Crack Repair', d: 'Epoxy putty and chemical stitch repair of cracks, spalls, and expansion joints.' },
              { t: 'Penetrating Primer', d: 'Low-viscosity 100% solid epoxy primer deeply saturating concrete to eliminate outgassing.' },
              { t: 'Resin Screed & De-airing', d: 'Precision squeegee screeding and spiked-roller de-airing for flawless mirror leveling.' }
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
            Book Free Concrete Moisture &amp; Hardness Test
          </h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)', lineHeight: 1.5, marginBottom: '32px' }}>
            A long-lasting resin floor begins with accurate concrete diagnosis. Our flooring specialists conduct moisture meter readings, rebound hammer hardness tests, and site profiling anywhere in Chennai before proposing specifications.
          </p>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '1.25rem' }}>
            Schedule Concrete Testing
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
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>What Our Clients Say</h2>
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
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Upgrade to World-Class Flooring</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)', marginBottom: '32px' }}>
            Transform your factory, warehouse, or showroom with heavy-duty epoxy and PU flooring.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
              Request Flooring Quotation <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

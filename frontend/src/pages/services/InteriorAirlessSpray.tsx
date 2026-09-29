import { Link } from 'react-router-dom';
import BrandsSection from '../../components/BrandsSection';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const UNIQUE = [
  { 
    title: 'Commercial Graco Airless Sprayers', 
    desc: 'Equipped with top-of-the-line piston airless spray pumps and fine-finish RAC X tips delivering 3300 PSI atomization with zero splatter or ripple lines.' 
  },
  { 
    title: 'Flawless Factory-Grade Wall Finish', 
    desc: 'Eliminates roller stipples, brush marks, and overlap seams, providing an ultra-smooth, uniform silk or matte finish across every wall and ceiling.' 
  },
  { 
    title: '4X Faster Completion Timelines', 
    desc: 'Airless spray application coats expansive spaces in hours rather than days, dramatically accelerating move-in schedules for homes and offices.' 
  },
  { 
    title: 'Laser-Precision Masking & Protection', 
    desc: 'Multi-layer static poly film, heavy kraft floor runners, and premium painter’s tape ensuring zero paint overspray on flooring, glass, and joinery.' 
  },
  { 
    title: 'Exposed Duct & Ceiling Specialists', 
    desc: 'Expertise in modern industrial-loft styling, spraying open-plenum ceilings, exposed HVAC ducts, cable trays, and electrical conduits in sleek matte black or white.' 
  },
  { 
    title: 'Dust-Free Mechanized Surface Prep', 
    desc: 'Integrated HEPA-vacuum orbital wall sanders smoothing joint compounds and drywall seams before primer spray for showroom-quality results.' 
  },
];

const REVIEWS = [
  { 
    name: 'Archana Krishnaswamy', 
    title: 'Principal Architect, Alwarpet', 
    desc: 'Unique Painters airless-sprayed the open-grid ceiling and walls of our 8,000 sq.ft. studio. The matte black duct finish was flawless with zero roller texture.' 
  },
  { 
    name: 'V. Sundararaman', 
    title: 'Villa Owner, ECR Chennai', 
    desc: 'The finish on our double-height living room walls is like glass. Their masking was thorough and they handed over the house completely clean.' 
  },
  { 
    name: 'Naveen Chawla', 
    title: 'Fitout Contractor, OMR Tech Park', 
    desc: 'They covered 35,000 sq.ft. of drywall with primer and two topcoats in just 3 days. Extremely fast, consistent, and dependable.' 
  },
  { 
    name: 'Deepika Mohan', 
    title: 'Interior Designer, Anna Nagar', 
    desc: 'Airless spray painting changed the aesthetic of our luxury apartment project. No brush marks anywhere. Highly impressed with their craftsmanship.' 
  },
];

const FAQS = [
  { 
    q: 'How does airless spray painting differ from traditional roller painting?', 
    a: 'Airless spray atomizes paint at high pressure without compressed air, creating a micro-fine, uniform fan of paint. This achieves a completely flat, velvet-smooth finish with zero roller stipple, ridges, or brush lap marks.' 
  },
  { 
    q: 'How do you prevent overspray from damaging floors and furniture?', 
    a: 'We spend up to 60% of our preparation time in comprehensive masking. We use static-cling plastic sheeting, zip-wall barriers, and heavy-duty floor protection sealed with low-tack precision tape to guarantee zero overspray.' 
  },
  { 
    q: 'Can airless spray painting be used in occupied apartments?', 
    a: 'Yes, provided furniture is clustered and covered. However, it is most advantageous during new fit-outs, renovations, repainting empty homes, or for commercial spaces and exposed ceilings where speed and perfection are required.' 
  },
  { 
    q: 'Can you spray paint exposed ceilings and HVAC ducts black or grey?', 
    a: 'Absolutely. We specialize in painting exposed open ceilings, industrial roof decks, galvanized ductwork, sprinkler pipes, and acoustic tiles in matte black, charcoal, or bright white for modern cafes, gyms, and offices.' 
  },
  { 
    q: 'Which paint types work best with airless sprayers?', 
    a: 'We spray premium acrylic emulsions, luxury washable enamels, PU finishes, and anti-fungal primers from Asian Paints (Royale), Berger, and Dulux, achieving maximum paint adhesion and durability.' 
  },
];

export default function InteriorAirlessSpray() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              AIRLESS SPRAY PAINTING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Interior Airless <br className="mobile-break" /><span className="accent-circle">Spray Painting</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Ultra-smooth, zero-lap-mark factory finish for luxury interiors, drywall, high ceilings, and exposed commercial spaces in Chennai.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>✨ Mirror-Smooth Finish</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>⚡ 4X Rapid Speed</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#a78bfa', color: '#082f49', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🚫 Zero Roller Stipple</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Airless Estimate <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="/images/airless_spray_hero.jpg" 
          alt="Interior Airless Spray Painting Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>
            Why Choose Airless Spray Painting
          </h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px', textAlign: 'left' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/airless_spray_detail.jpg" alt="Ultra-Fine Atomization" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Flawless Uniform Finish</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Zero roller texture, brush splatters, or uneven patches. Pure velvet or satin smoothness.</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/painter_living_room.webp" alt="Fast Turnaround" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Rapid Project Turnaround</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Covers large square footage up to 4 times faster than rollers, cutting project timelines in half.</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/luxury_teal_bedroom.jpg" alt="Ceiling & Duct Specialists" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Exposed Ceilings &amp; Ducts</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Effortlessly covers complex HVAC ducting, cable trays, rafters, and high architectural ceilings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Airless Spray Services We Offer</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Luxury Interior Wall Spraying</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                High-end interior wall and ceiling painting with Asian Paints Royale or Berger Silk, providing an immaculate, ripple-free finish fit for luxury residences.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Exposed Ceilings &amp; Ductwork</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                Specialized airless coating of open-concept office ceilings, commercial retail spaces, gyms, and cafes in matte black, industrial grey, or white.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>New Construction &amp; Drywall</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>
                High-speed primer and multi-coat finish spraying on gypsum boards, POP plaster, and interior drywall for commercial buildings and villa developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Our Precision Spraying Process</h2>
          <div className="responsive-grid-auto">
            {[
              { t: 'Laser Masking & Cover', d: 'Comprehensive masking of floors, windows, switchboards, and fixtures with static film.' },
              { t: 'Dustless Sanding', d: 'Orbital vacuum sanding of wall surfaces for microscopic flatness and pore leveling.' },
              { t: 'Airless High-Build Primer', d: 'Uniform primer mist sealed across the substrate for maximum topcoat adhesion.' },
              { t: 'Dual Airless Topcoats', d: 'High-precision dual pass airless spray application creating a flawless, uniform sheen.' }
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
            Experience Ultra-Smooth Spray Finishing
          </h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)', lineHeight: 1.5, marginBottom: '32px' }}>
            Tired of visible roller textures and brush marks on your interior walls? Our airless spray technicians deliver a factory-grade luxury finish in record time. Book a free consultation and sample demonstration.
          </p>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '1.25rem' }}>
            Book Airless Spray Consultation
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
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Client Testimonials</h2>
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
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Ready for a Flawless Finish?</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)', marginBottom: '32px' }}>
            Discover how professional airless spray painting can elevate your interior spaces.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
              Get Free Airless Spray Quote <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

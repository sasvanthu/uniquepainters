import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const WHY_CHOOSE_US = [
  { title: 'Trained & Verified Painters', desc: 'Our team consists of highly skilled, background-checked professionals who follow strict safety standards.' },
  { title: 'Premium Paint Brands', desc: 'We only use top-tier materials from trusted brands to ensure durability and a flawless finish.' },
  { title: 'On-Time Completion', desc: 'We strictly adhere to agreed timelines, ensuring your project is completed exactly when promised.' },
  { title: 'Clean & Professional Handover', desc: 'We ensure a thorough cleanup of the site before the final handover, leaving your space spotless.' },
  { title: 'Service Warranty', desc: 'We offer solid warranties on selected premium products and highly reliable post-painting support.' },
  { title: 'Free Site Inspection', desc: 'Get expert consultation and transparent pricing with absolutely zero hidden costs.' },
];

export default function About() {
  // Double the array for infinite ticker tape
  const TICKER_ITEMS = ["Quality First", "Customer Trust", "Professional Ethics", "13+ Years Experience", "Chennai's Best"];
  const TICKER_TRACK = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      
      {/* ── 1. SWISS TYPOGRAPHY HERO ──────────────────────────── */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
            ABOUT UNIQUE PAINTERS
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1, color: 'var(--blue-900)', textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em' }}>
            Who We <span style={{ color: 'var(--orange-500)' }}>Are.</span>
          </h1>
        </div>
      </section>

      {/* TICKER TAPE */}
      <div className="swiss-ticker">
        <div className="swiss-ticker-track">
          {TICKER_TRACK.map((item, i) => (
            <span key={i} className="swiss-ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── 2. STATS & INTRO QUOTE ──────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)', borderBottom: '4px solid var(--blue-900)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--blue-900)', lineHeight: 1.4, letterSpacing: '-0.01em', marginBottom: '60px' }}>
            Unique Painters is a professional painting company with over 13+ years of experience, delivering reliable, high-quality painting solutions for residential and commercial properties in Chennai.
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            <div style={{ background: '#FFD400', padding: '40px 24px', border: 'var(--brutalist-border)', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--blue-900)', lineHeight: 1 }}>13+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--blue-900)', marginTop: '12px' }}>Years<br/>Experience</div>
            </div>
            <div style={{ background: 'var(--white)', padding: '40px 24px', border: 'var(--brutalist-border)', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--blue-900)', lineHeight: 1 }}>1000+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--blue-900)', marginTop: '12px' }}>Projects<br/>Completed</div>
            </div>
            <div style={{ background: 'var(--orange-500)', padding: '40px 24px', border: 'var(--brutalist-border)', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--white)', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginTop: '12px' }}>Happy<br/>Clients</div>
            </div>
            <div style={{ background: 'var(--blue-900)', padding: '40px 24px', border: 'var(--brutalist-border)', boxShadow: '8px 8px 0 var(--orange-500)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--white)', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange-500)', marginTop: '12px' }}>Quality<br/>Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STORY & IMAGE ─────────────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '0' }}>
        <div className="responsive-grid-2" style={{ gap: 0 }}>
          
          {/* Left Text */}
          <div style={{ padding: '80px 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--blue-900)', color: 'var(--white)' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--orange-500)', marginBottom: '32px' }}>
              Our Story
            </h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '32px' }}>
              Unique Painters began its journey with a clear purpose — to provide honest workmanship, dependable service, and long-lasting paint finishes. What started as a small team of skilled painters has grown into a trusted painting company serving homes, apartments, villas, offices, and commercial buildings.
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Over the last 13+ years, we have successfully completed interior painting, exterior painting, waterproofing, texture finishes, and commercial painting projects while maintaining high standards of quality and professionalism.
            </p>
          </div>

          {/* Right Image */}
          <div style={{ minHeight: '600px', borderLeft: '4px solid var(--blue-900)' }}>
            <img 
              src="/indian_painter_about.png" 
              alt="Indian Painters at Work" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

        </div>
      </section>

      {/* ── 4. HORIZONTAL LIST (WHY CHOOSE US) ───────────────── */}
      <section style={{ padding: '120px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '64px', textTransform: 'uppercase' }}>Why Choose Unique Painters</h2>
          <div style={{ borderTop: '4px solid var(--blue-900)' }}>
            {WHY_CHOOSE_US.map((item, idx) => (
              <div className="swiss-row" key={idx} style={{ background: idx % 2 === 0 ? 'var(--gray-50)' : 'var(--white)' }}>
                <h3 className="swiss-row-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: idx % 2 === 0 ? 'var(--orange-500)' : 'var(--blue-900)' }}>{item.title}</h3>
                <p className="swiss-row-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ──────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', textAlign: 'center', background: 'var(--orange-500)', borderTop: '4px solid var(--blue-900)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'var(--blue-900)', textTransform: 'uppercase', marginBottom: '24px', lineHeight: 1 }}>
            Looking for Reliable Experts?
          </h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '48px' }}>
            Get a free site inspection and expert consultation from Unique Painters.
          </p>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '24px 48px', fontSize: '1.5rem' }}>
            Get Free Quote <IconArrowRight />
          </Link>
        </div>
      </section>
    </article>
  );
}

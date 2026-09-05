import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default function Exterior() {
  return (
    <article>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              RESIDENTIAL SERVICES
            </div>
            <h1 className="text-massive" style={{ marginBottom: '40px' }}>
              Durable Exterior<br />
              Painting <span className="accent-circle">Services</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '48px', maxWidth: '700px' }}>
              Protect your home from Chennai's harsh weather conditions. We deliver long-lasting, weather-resistant exterior finishes that keep your property looking new for years.
            </p>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get a Free Quote <IconArrowRight />
            </Link>
          </div>
        </div>
        {/* Decorative Graphic */}
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" 
          alt="Exterior Painting Chennai"
          style={{
            position: 'absolute', right: '-10%', bottom: '-20%', width: '700px', height: '700px', 
            objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--blue-900)',
            zIndex: 1, filter: 'grayscale(10%)'
          }}
        />
      </section>

      {/* ── 2. BENEFITS (BENTO GRID) ────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Why Choose Us for Exteriors?</h2>
          <div className="bento-grid">
            <div className="bento-item" style={{ background: '#FFD400', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Weather Resistance</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We use specialized exterior emulsions that protect against heavy rain, scorching sun, and coastal humidity.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--orange-500)', color: 'var(--white)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Anti-Algae & Fungal</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Say goodbye to black spots on your walls. Our paints come with advanced anti-fungal properties.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--white)', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Crack Bridging</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We thoroughly fill and seal exterior cracks before painting, preventing water seepage and structural damage.</p>
            </div>
            <div className="bento-item" style={{ background: '#E2E4E8', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Safe Scaffolding</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We use safe, professional scaffolding equipment to paint high-rise independent homes and villas securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px' }}>Our Exterior Process</h2>
          <div className="responsive-grid-auto">
            {[
              { t: 'High-Pressure Wash', d: 'Removing dirt, algae, and loose paint using high-pressure water jets for a clean surface.' },
              { t: 'Crack & Leak Seal', d: 'Filling exterior wall cracks with specialized crack-fill compounds and sealants.' },
              { t: 'Exterior Primer', d: 'Applying a heavy-duty exterior wall primer to lock out moisture and provide a grip coat.' },
              { t: 'Weather-Proof Topcoat', d: 'Applying two thick coats of premium exterior emulsion (like Apex Ultima) for maximum protection.' }
            ].map((step, i) => (
              <div key={i} style={{ border: 'var(--brutalist-border)', padding: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '20px', background: 'var(--orange-500)', color: 'var(--white)', padding: '4px 12px', fontWeight: 900, borderRadius: '20px', border: 'var(--brutalist-border)' }}>
                  STEP 0{i + 1}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '16px', marginBottom: '12px' }}>{step.t}</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA ──────────────────────────────────────────── */}
      <section className="block-orange" style={{ padding: '80px 0', textAlign: 'center', borderTop: 'var(--brutalist-border)' }}>
        <div className="container">
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Protect your property today</h2>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Schedule a Free Inspection <IconArrowRight />
          </Link>
        </div>
      </section>
    </article>
  );
}

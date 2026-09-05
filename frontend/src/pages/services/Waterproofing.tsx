import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default function Waterproofing() {
  return (
    <article>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              SPECIALIZED SERVICES
            </div>
            <h1 className="text-massive" style={{ marginBottom: '40px' }}>
              Advanced Roof & Wall<br />
              Waterproofing <span className="accent-circle">Solutions</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '48px', maxWidth: '700px' }}>
              Stop water leakage and seepage permanently. We provide advanced terrace, bathroom, and exterior wall waterproofing using Dr. Fixit and Fosroc chemicals.
            </p>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get a Free Quote <IconArrowRight />
            </Link>
          </div>
        </div>
        {/* Decorative Graphic */}
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop" 
          alt="Waterproofing Services Chennai"
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
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Why Choose Us for Waterproofing?</h2>
          <div className="bento-grid">
            <div className="bento-item" style={{ background: '#FFD400', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Permanent Solutions</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We don't just paint over wet spots. We diagnose the source of the leak and treat it at its root.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--orange-500)', color: 'var(--white)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Advanced Chemicals</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We use top-grade elastomeric coatings and epoxy grouts from Dr. Fixit, Fosroc, and Asian Paints SmartCare.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--white)', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Thermal Insulation</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Our terrace waterproofing solutions also reflect heat, significantly reducing your indoor temperatures.</p>
            </div>
            <div className="bento-item" style={{ background: '#E2E4E8', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>5-Year Warranty</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We stand by our work. Our advanced waterproofing solutions come with a standard 5-year warranty against leakage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px' }}>Our Waterproofing Process</h2>
          <div className="responsive-grid-auto">
            {[
              { t: 'Leak Diagnostics', d: 'Using moisture meters and visual inspection to identify exactly where water is penetrating.' },
              { t: 'Surface Preparation', d: 'Grinding the surface and opening up cracks in a V-groove to allow deep chemical penetration.' },
              { t: 'Chemical Treatment', d: 'Applying specialized crack fillers and polymer-modified cementitious coatings to block water.' },
              { t: 'Elastomeric Topcoat', d: 'Applying highly flexible waterproofing topcoats that can stretch and bridge future micro-cracks.' }
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
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Stop the leaks permanently</h2>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Schedule a Free Inspection <IconArrowRight />
          </Link>
        </div>
      </section>
    </article>
  );
}

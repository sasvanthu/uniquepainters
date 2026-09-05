import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default function Commercial() {
  return (
    <article>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              COMMERCIAL SERVICES
            </div>
            <h1 className="text-massive" style={{ marginBottom: '40px' }}>
              Expert Commercial<br />
              Painting <span className="accent-circle">Services</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '48px', maxWidth: '700px' }}>
              High-durability coatings for offices, warehouses, and factories. We work around your business hours to ensure zero downtime.
            </p>
            <Link to="/contact" className="btn-pill btn-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get a Free Quote <IconArrowRight />
            </Link>
          </div>
        </div>
        {/* Decorative Graphic */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
          alt="Commercial Painting Chennai"
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
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Why Choose Us for Commercial?</h2>
          <div className="bento-grid">
            <div className="bento-item" style={{ background: '#FFD400', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Zero Downtime</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We offer flexible scheduling including nights and weekends so your business operations are never interrupted.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--orange-500)', color: 'var(--white)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>High Durability</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Using heavy-duty industrial paints and epoxies that withstand high traffic and mechanical wear.</p>
            </div>
            <div className="bento-item" style={{ background: 'var(--white)', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Safety Compliant</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Our team is fully trained and equipped with proper safety gear (PPE) for large scale and high-elevation work.</p>
            </div>
            <div className="bento-item" style={{ background: '#E2E4E8', color: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Dedicated Manager</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Every commercial project gets a dedicated site manager to ensure strict quality control and daily progress reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px' }}>Our Commercial Process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { t: 'Site Evaluation', d: 'Detailed assessment of the commercial space to determine the correct industrial-grade coatings needed.' },
              { t: 'Logistics Planning', d: 'Scheduling work in phases and arranging safe material storage to avoid business disruption.' },
              { t: 'Industrial Execution', d: 'Deploying our skilled workforce to execute the painting rapidly and safely.' },
              { t: 'Final Walkthrough', d: 'A comprehensive review with your facility manager to ensure 100% satisfaction.' }
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
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Upgrade your workspace</h2>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Schedule a Free Inspection <IconArrowRight />
          </Link>
        </div>
      </section>
    </article>
  );
}

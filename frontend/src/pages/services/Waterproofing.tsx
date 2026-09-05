import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const UNIQUE = [
  { title: 'Expert Leakage Diagnosis', desc: 'Accurate identification of leakage sources including terrace cracks, wall seepage, bathroom joints, and structural weak points.' },
  { title: 'Right Waterproofing Method', desc: 'We use the most suitable system—membrane, chemical coating, PU treatment, or cementitious waterproofing—based on site condition.' },
  { title: 'Trained Waterproofing Specialists', desc: 'Experienced and trained technicians handling terrace, roof, bathroom, and basement waterproofing projects.' },
  { title: 'Quality Materials Only', desc: 'Use of premium-grade waterproofing materials that withstand heavy rain, heat, and long-term weather exposure.' },
  { title: 'On-Time Completion', desc: 'Planned execution and proper curing schedules to complete waterproofing work within the committed timeframe.' },
  { title: 'Service Warranty', desc: 'Warranty-backed waterproofing solutions to ensure long-lasting protection and complete peace of mind.' },
];

const REVIEWS = [
  { name: 'Karthik Ramasamy', title: 'Leakage Stopped', desc: 'Our terrace had severe leakage. The problem is completely resolved.' },
  { name: 'Shobana Lakshmi', title: 'Knowledgeable Team', desc: 'Executed the work neatly without damaging existing tiles.' },
  { name: 'Arun Venkatesh', title: 'Honest Advice', desc: 'The inspection was clear and no unnecessary treatments were suggested.' },
  { name: 'Meena Subramanian', title: 'On-Time Completion', desc: 'Work was completed within the promised timeline with proper testing.' },
];

const FAQS = [
  { q: 'How much does waterproofing cost in Chennai?', a: 'Cost depends on the leakage severity and the method used (e.g., PU, chemical coating). We provide custom quotes after a free site inspection.' },
  { q: 'Which waterproofing method is best for terrace leakage?', a: 'It depends on the terrace condition. We often recommend elastomeric membrane coatings or PU treatments for high-traffic terraces.' },
  { q: 'How long does waterproofing work take?', a: 'Minor repairs can take 2-3 days, while full terrace waterproofing usually requires 4-7 days to allow for proper multi-layer curing.' },
  { q: 'Will tiles need to be broken for waterproofing?', a: 'Not necessarily! We offer advanced chemical nano-coatings that penetrate existing tiles to seal leaks without breaking them.' },
  { q: 'Does Unique Painters provide warranty on waterproofing?', a: 'Yes, we provide long-term warranties (up to 5-10 years depending on the treatment) ensuring your peace of mind.' },
];

export default function Waterproofing() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              WATERPROOFING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Waterproofing <br className="mobile-break" /><span className="accent-circle">Services</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Expert solutions for terraces, roofs, bathrooms, balconies, and external walls.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>💧 100% Leak Protection</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🛡️ Long Warranty</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Inspection <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=1200&auto=format&fit=crop" 
          alt="Waterproofing Services Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>Why Choose Us</h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px', textAlign: 'left' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" alt="Advanced Diagnostics" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Advanced Diagnostics</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We pinpoint the exact source of leakage</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" alt="Modern Treatments" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Modern Treatments</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>PU, Dr. Fixit & high-tech nano-coatings</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" alt="Permanent Fixes" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Permanent Fixes</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No more damp patches or peeling paint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Waterproofing Services We Offer</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Terrace Waterproofing</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Advanced terrace waterproofing using membranes, coatings, and chemical treatments to stop roof leakage permanently.</p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Bathroom & Kitchen</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Leak protection for bathrooms and kitchens using internal waterproofing systems without breaking tiles.</p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Wall & Basement Protection</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>External wall and basement waterproofing to prevent dampness, cracks, paint peeling, and structural damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ──────────────────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px' }}>Our Process</h2>
          <div className="responsive-grid-auto">
            {[
              { t: 'Leakage Inspection', d: 'We inspect terraces and damp areas to identify leakage sources.' },
              { t: 'Recommendation', d: 'We recommend the right waterproofing method based on site condition.' },
              { t: 'Surface Cleaning', d: 'Crack filling, joint sealing, and preparation to ensure strong bonding.' },
              { t: 'Application', d: 'Application of high-quality materials in multiple layers with proper curing.' }
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

      {/* ── 5. SEO / CONSULTATION BLOCK ────────────────────── */}
      <section className="brutalist-section" style={{ padding: '100px 0', background: 'var(--orange-500)', borderBottom: '4px solid var(--blue-900)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '24px', textTransform: 'uppercase' }}>
            Free Waterproofing Inspection & Consultation
          </h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)', lineHeight: 1.5, marginBottom: '32px' }}>
            Water leakage, damp walls, and roof seepage can cause serious structural damage if ignored. Our waterproofing experts inspect your terrace, roof, bathrooms, and walls to recommend the right long-lasting solution based on site conditions and Chennai weather.
          </p>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '1.25rem' }}>
            Book Inspection
          </Link>
        </div>
      </section>

      {/* ── 6. WHY WE ARE UNIQUE (HORIZONTAL LIST) ─────────── */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '48px', textTransform: 'uppercase' }}>Why Choose Our Waterproofing</h2>
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
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Happy Customers</h2>
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
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
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

      {/* ── 9. CTA ──────────────────────────────────────────── */}
      <section className="block-orange" style={{ padding: '100px 0', textAlign: 'center', borderTop: '4px solid var(--blue-900)' }}>
        <div className="container">
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Stop Leakage Today</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
              Get Free Inspection <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

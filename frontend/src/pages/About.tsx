import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const UNIQUE = [
  { icon: '🎨', title: 'Creative Color Consultation', desc: 'Expert guidance to choose exterior and interior shades and textures that match your building style and surroundings.' },
  { icon: '🧹', title: 'Dust-Free Painting', desc: 'We use modern tools and protective masking to ensure a clean, dust-free painting experience.' },
  { icon: '⏱', title: 'On-Time Delivery', desc: 'We strictly adhere to agreed timelines ensuring your project is completed exactly when promised.' },
  { icon: '✨', title: 'Post Paint Cleaning', desc: 'Our team ensures a thorough cleanup of the site before the final handover, leaving your space spotless.' },
  { icon: '🛡️', title: 'Product Warranty', desc: 'We offer warranties on selected premium products and reliable post-painting support.' },
];

export default function About() {
  return (
    <article>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
            ABOUT UNIQUE PAINTERS
          </div>
          <h1 className="text-massive" style={{ marginBottom: '40px' }}>
            Chennai's Most <span className="accent-circle">Reliable</span> Painting Contractors
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '48px' }}>
            Unique Painters is a leading painting company based in Chennai, delivering complete residential and commercial painting solutions with experienced professionals and a commitment to timely completion.
          </p>
        </div>
      </section>

      {/* ── 2. OUR STORY (BENTO) ────────────────────────────── */}
      <section className="brutalist-section block-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'stretch' }}>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--orange-500)', color: 'var(--white)' }}>
              <h2 className="text-huge" style={{ marginBottom: '24px' }}>Our Mission</h2>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.6 }}>
                Our mission is to eliminate the stress of painting your home or business. We believe in complete transparency, from our free site inspections and transparent quotations to our post-paint cleaning process. We aren't just applying paint; we are protecting and beautifying your most valuable assets.
              </p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" 
                alt="Unique Painters Team" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY WE ARE UNIQUE ────────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px', textAlign: 'center' }}>Why We Are Unique</h2>
          <div className="bento-grid">
            {UNIQUE.map((item, idx) => (
              <div className="bento-item" key={idx} style={{ background: idx % 2 === 0 ? '#FFD400' : 'var(--white)', color: 'var(--blue-900)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.desc}</p>
              </div>
            ))}
            <div className="bento-item" style={{ background: 'var(--orange-500)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
               <h3 className="text-huge" style={{ margin: 0 }}>100%<br/>Satisfaction</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA ──────────────────────────────────────────── */}
      <section className="block-orange" style={{ padding: '80px 0', textAlign: 'center', borderTop: 'var(--brutalist-border)' }}>
        <div className="container">
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Let's work together!</h2>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Contact Us Today <IconArrowRight />
          </Link>
        </div>
      </section>
    </article>
  );
}

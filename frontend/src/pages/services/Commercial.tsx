import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const UNIQUE = [
  { title: 'Brand Colour Matching', desc: 'Expert guidance on matching corporate brand colours perfectly to ensure your office reflects your identity.' },
  { title: 'Zero Disturbance', desc: 'Professional tools and weekend shifts for minimal disruption so your business can continue operating smoothly.' },
  { title: '100% On-Time', desc: 'Strict scheduling and milestone tracking to ensure you meet your opening deadlines without any delays.' },
  { title: 'Post-Paint Cleaning', desc: 'Complete cleanup post-painting including removal of all debris for a ready-to-use workspace.' },
  { title: 'Verified Painters', desc: 'Professionally trained and background-verified painters experienced in large-scale commercial work.' },
  { title: 'Service Warranty', desc: 'Comprehensive warranty on workmanship and materials for industrial-grade durability and peace of mind.' },
];

const REVIEWS = [
  { name: 'Karthik Ramasamy', title: 'Minimal Disruption', desc: 'The team worked nights to ensure operations were not disturbed.' },
  { name: 'Shobana Lakshmi', title: 'Highly Professional', desc: 'Their safety compliance and approach was extremely impressive.' },
  { name: 'Arun Venkatesh', title: 'Transparent B2B Pricing', desc: 'The quotation was detailed. A reliable vendor for large-scale painting.' },
  { name: 'Meena Subramanian', title: 'Delivered Early', desc: 'Our retail showroom had a strict deadline. They finished early!' },
];

const FAQS = [
  { q: 'Do you offer night painting?', a: 'Yes, we understand that businesses need to operate without disruption. We offer flexible scheduling including nights and weekends.' },
  { q: 'Are your painters safety-trained?', a: 'Absolutely. Our team is fully trained in height safety, scaffolding use, and commercial site compliance.' },
  { q: 'How do you price large projects?', a: 'Pricing is based on square footage, surface condition, and the industrial-grade paints required. We provide custom competitive quotes.' },
  { q: 'Can you match exact brand colors?', a: 'Yes, we use advanced color-matching technology to ensure your office perfectly reflects your corporate brand guidelines.' },
  { q: 'What properties do you paint?', a: 'We paint IT offices, retail showrooms, warehouses, factories, hospitals, schools, and large commercial complexes.' },
];

export default function Commercial() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              COMMERCIAL PAINTING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Commercial Painting <br className="mobile-break" /><span className="accent-circle">Services</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Professional solutions for offices and commercial buildings in Chennai with guaranteed quality.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🏢 Specialists</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🦺 Safety-Compliant</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Site Evaluation <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="/images/image.webp" 
          alt="Commercial Painters Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>Why Choose Us</h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>Zero Disturbance</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We paint outside of your operating hours</p>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>Industrial Grade</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Heavy-duty paints for high-traffic areas</p>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>Strict Compliance</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Fully trained & safety-compliant crew</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section block-gray" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Commercial Painting Services We Offer</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', background: 'var(--white)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Offices and IT Parks" style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Offices & IT Parks</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Professional office painting with minimal disruption, creating productive and branded workspaces.</p>
              </div>
            </div>
            <div style={{ border: 'var(--brutalist-border)', background: 'var(--white)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" alt="Showrooms" style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Showrooms</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Vibrant and high-finish painting tailored to match your brand identity and attract customers.</p>
              </div>
            </div>
            <div style={{ border: 'var(--brutalist-border)', background: 'var(--white)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" alt="Warehouses" style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Warehouses</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Industrial coatings, epoxy flooring, and heavy-duty painting designed to withstand extreme conditions.</p>
              </div>
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
              { t: 'Site Inspection', d: 'We assess wall conditions and measure areas for accurate quotation.' },
              { t: 'Colour Matching', d: 'Professional consultation based on corporate brand guidelines.' },
              { t: 'Surface Prep', d: 'Cleaning, crack filling, sanding, and primer application.' },
              { t: 'Execution', d: 'Multiple coats applied by skilled painters for uniform coverage.' }
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
            Free Professional Colour Consultation
          </h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)', lineHeight: 1.5, marginBottom: '32px' }}>
            Choosing the right commercial paint colours can significantly enhance your office, showroom, or business space. Our professional commercial painting experts help you select the ideal colour combinations based on branding, lighting conditions, space usage, durability, maintenance needs, and the latest commercial design trends in Chennai.
          </p>
          <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '1.25rem' }}>
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ── 6. WHY WE ARE UNIQUE (HORIZONTAL LIST) ─────────── */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '48px', textTransform: 'uppercase' }}>Why We Are Unique</h2>
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
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Happy Clients</h2>
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
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Ready to Upgrade?</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
              Get Free Quote <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

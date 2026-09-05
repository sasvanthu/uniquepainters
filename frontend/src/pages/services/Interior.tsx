import { Link } from 'react-router-dom';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);

const UNIQUE = [
  { title: 'Creative Colour Consultation', desc: 'Expert guidance on trending interior colours, modern combinations, and personalized palettes to enhance your living space.' },
  { title: 'Dust-Free Painting Mechanism', desc: 'Advanced tools and processes to minimize dust during surface preparation, ensuring a clean and hassle-free painting experience.' },
  { title: '100% On-Time Project Delivery', desc: 'Strict project scheduling with milestone tracking to ensure your interior painting work is completed within the promised timeline.' },
  { title: 'Post-Paint Deep Cleaning', desc: 'Complete post-painting cleanup including dust removal and furniture rearrangement for a ready-to-use space.' },
  { title: 'Trained & Verified Painters', desc: 'Background-verified and professionally trained painters with experience in residential and commercial interior projects.' },
  { title: 'Service Warranty', desc: 'One-year service warranty on workmanship and materials, ensuring long-lasting interior paint quality.' },
];

const REVIEWS = [
  { name: 'Ramesh Kumar', title: 'Skilled & Reliable', desc: 'The painters were highly skilled and handled the work professionally.' },
  { name: 'Priya Sharma', title: 'Attention to Detail', desc: 'Every corner was finished perfectly. The quality was impressive.' },
  { name: 'Anil Patel', title: 'Transparent Pricing', desc: 'Pricing was transparent and value for money. No hidden costs.' },
  { name: 'Sandeep Reddy', title: 'On-Time Completion', desc: 'The project was completed on time with proper planning.' },
];

const FAQS = [
  { q: 'How much does interior painting cost with Unique Painters in Chennai?', a: 'Cost depends on the area size and paint type. We provide transparent, upfront quotes after a free site inspection.' },
  { q: 'How long does interior painting take with Unique Painters?', a: 'A standard 2BHK usually takes 4-7 days depending on the scope of work and surface preparation needed.' },
  { q: 'Which paint brands are used by Unique Painters for interior painting?', a: 'We use premium products from trusted brands like Asian Paints, Berger, Dulux, and Nerolac.' },
  { q: 'Does Unique Painters include furniture shifting and covering?', a: 'Yes, our team carefully shifts and completely covers all furniture and flooring before painting begins.' },
  { q: 'Is there a warranty on interior painting work by Unique Painters?', a: 'Yes, we provide a 1-year service warranty on our workmanship and materials for all interior projects.' },
];

export default function Interior() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              INTERIOR PAINTING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Interior Painting <br className="mobile-break" /><span className="accent-circle">Services</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Premium home & office painting with a flawless finish.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>⭐ 4.9 Rating</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🏠 Free Site Visit</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Quote <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="/blue-painters.png" 
          alt="Interior Painters Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>Why Choose Us</h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>Premium Paints</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Asian Paints, Berger & Dulux</p>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>Experienced Team</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>10+ years trained professionals</p>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px' }}>On-Time Delivery</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Guaranteed project completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section block-gray" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Interior Painting Services We Offer</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', background: 'var(--white)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/indian_living_room.png" alt="Residential Indian Interior Painting" style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Residential (Homes)</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Complete home painting services including all rooms, ceilings, and trims with premium finish and colour coordination.</p>
              </div>
            </div>
            <div style={{ border: 'var(--brutalist-border)', background: 'var(--white)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" alt="Commercial Office Interior Painting" style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Commercial Spaces</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Professional office painting with minimal disruption, creating productive and branded workspaces.</p>
              </div>
            </div>
            <div style={{ border: 'var(--brutalist-border)', background: 'var(--white)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/indoor_restoration.png" alt="Indoor Wall Restoration" style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Other Indoor Areas</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Old wall restoration, crack filling, and complete repainting for a fresh new look to aged properties.</p>
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
              { t: 'Colour Selection', d: 'Professional consultation based on room lighting and preferences.' },
              { t: 'Surface Prep', d: 'Thorough cleaning, crack filling, sanding, and primer application.' },
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
            Choosing the right interior paint colour can completely transform your home or office. Our professional interior painting experts help you select the perfect colour combinations based on natural lighting, room size, purpose, durability, maintenance requirements, and the latest interior design trends in Chennai.
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
          <h2 className="text-massive" style={{ color: 'var(--blue-900)', marginBottom: '24px' }}>Ready to Paint?</h2>
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

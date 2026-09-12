import { Link } from 'react-router-dom';
import BrandsSection from '../../components/BrandsSection';

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const UNIQUE = [
  { title: 'Creative Colour Consultation', desc: 'Expert guidance on trending Exterior colours, modern combinations, and personalized palettes to enhance your living space.' },
  { title: 'Dust-Free Painting Mechanism', desc: 'Advanced tools and processes to minimize dust during surface preparation, ensuring a clean and hassle-free painting experience.' },
  { title: '100% On-Time Project Delivery', desc: 'Strict project scheduling with milestone tracking to ensure your Exterior painting work is completed within the promised timeline.' },
  { title: 'Post-Paint Deep Cleaning', desc: 'Complete post-paint clean-up including removal of paint splashes, debris, and scaffolding for a neat and professional handover.' },
  { title: 'Trained & Verified Painters', desc: 'Background-verified painters trained in exterior work, height safety, and professional execution for residential and commercial buildings.' },
  { title: 'Service Warranty', desc: 'Service warranty on exterior workmanship and materials, ensuring long-lasting protection against weather and environmental damage.' },
];

const REVIEWS = [
  { name: 'Karthik Ramasamy', title: 'Neat & Professional', desc: 'The team worked systematically and delivered a clean finish.' },
  { name: 'Shobana Lakshmi', title: 'Skilled Painters', desc: 'The painters were well-trained and paid attention to small details.' },
  { name: 'Arun Venkatesh', title: 'Fair Pricing', desc: 'The quotation was clear and transparent. Great value.' },
  { name: 'Meena Subramanian', title: 'On-Time Completion', desc: 'The project was completed within the committed time without delays.' },
];

const FAQS = [
  { q: 'How much does Exterior painting cost with Unique Painters in Chennai?', a: 'Cost depends on the building size, elevation, and paint type (e.g., Apex, Ultima). We provide transparent quotes after a free site inspection.' },
  { q: 'How long does exterior painting take with Unique Painters?', a: 'Depending on the building size, weather conditions, and surface repairs needed, it typically takes 7-15 days.' },
  { q: 'Which paint brands are used by Unique Painters for exterior painting?', a: 'We use high-quality, weather-resistant paints from Asian Paints, Berger, and Dulux.' },
  { q: 'Does Unique Painters include furniture shifting and covering?', a: 'For exterior painting, we ensure all outdoor fixtures, plants, and vehicles are properly covered and protected.' },
  { q: 'Is there a warranty on Exterior painting work by Unique Painters?', a: 'Yes, we provide a service warranty on exterior painting, with up to 5-10 years warranty on premium paints depending on the manufacturer.' },
];

export default function Exterior() {
  return (
    <article style={{ background: 'var(--white)' }} className="animate-fade-in-up animate-delay-1">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="block-gray brutalist-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
              EXTERIOR PAINTING CHENNAI
            </div>
            <h1 className="text-massive" style={{ marginBottom: '24px' }}>
              Exterior Painting <br className="mobile-break" /><span className="accent-circle">Services</span>
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '24px', maxWidth: '700px' }}>
              Protect and beautify your building in Chennai with weather-resistant painting.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: '#FFD400', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>☀️ Weather-Proof</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, background: 'var(--white)', padding: '8px 16px', border: '2px solid var(--blue-900)' }}>🏠 Free Site Visit</span>
            </div>
            <Link to="/contact" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Free Quote <IconArrowRight />
            </Link>
          </div>
        </div>
        <img 
          src="/images/Gemini_Generated_Image_l2xsvsl2xsvsl2xs.webp" 
          alt="Exterior Painters Chennai"
          className="hero-service-img"
        />
      </section>

      {/* ── 2. QUICK BENEFITS ──────────────────────────────── */}
      <section className="brutalist-section" style={{ background: '#FFD400', borderBottom: '4px solid var(--blue-900)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue-900)', marginBottom: '16px', textTransform: 'uppercase' }}>Why Choose Us</h2>
          <div className="responsive-grid-auto" style={{ marginTop: '48px', textAlign: 'left' }}>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/exterior-expert.webp" alt="Exterior Experts" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Exterior Experts</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Specialized in villas & commercial buildings</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/images/climate-resistant.webp" alt="Climate-Resistant" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Climate-Resistant</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Paints built for heat & rain protection</p>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', overflow: 'hidden', boxShadow: '8px 8px 0 var(--blue-900)' }}>
              <img src="/indian_painter_about.webp" alt="Long-Lasting Finish" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: 'var(--brutalist-border)' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: 'var(--orange-500)' }}>Long-Lasting Finish</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Crack-resistant & waterproof coatings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES WE OFFER ───────────────────────────── */}
      <section className="brutalist-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', color: 'var(--blue-900)' }}>Exterior Painting Services We Offer</h2>
          <div className="responsive-grid-auto">
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Residential (Homes)</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Complete exterior home painting services including elevations and boundary walls with premium finish and colour coordination.</p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Commercial Spaces</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Professional exterior painting with minimal disruption, creating productive and branded workspaces.</p>
            </div>
            <div style={{ border: 'var(--brutalist-border)', padding: '48px', background: 'var(--gray-50)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--orange-500)' }}>Other Areas</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 }}>Old wall restoration, crack filling, and complete exterior repainting for a fresh new look to aged properties.</p>
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
              { t: 'Colour Selection', d: 'Professional consultation based on natural lighting and preferences.' },
              { t: 'Surface Prep', d: 'Pressure cleaning, crack filling, sanding, and primer application.' },
              { t: 'Execution', d: 'Multiple coats applied by skilled exterior painters for uniform coverage.' }
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
            Choosing the right Exterior paint colour can completely transform your home or office. Our professional Exterior painting experts help you select the perfect colour combinations based on natural lighting, room size, purpose, durability, maintenance requirements, and the latest Exterior design trends in Chennai.
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

      {/* ── 9. BRANDS ───────────────────────────────────────── */}
      <BrandsSection />

      {/* ── 10. CTA ─────────────────────────────────────────── */}
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

import { Link } from 'react-router-dom';


const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
);
const IconWa = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);
const IconMap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

/* ─── Data ─── */
const SERVICES = [
  {
    title: 'Interior',
    desc: 'Professional interior painting services delivering smooth finishes and long-lasting vibrant colors. Premium quality paints, proper surface preparation.',
    anchor: 'interior',
  },
  {
    title: 'Exterior',
    desc: 'Professional exterior painting services delivering smooth finishes and long-lasting vibrant colors. Protects against Chennai heat, rain, and moisture.',
    anchor: 'exterior',
  },
  {
    title: 'Commercial',
    desc: 'Professional commercial painting services delivering smooth finishes and long-lasting vibrant colors for offices and workspaces.',
    anchor: 'commercial',
  },
  {
    title: 'Waterproofing',
    desc: 'Professional waterproofing services delivering strong protection and long-lasting defense against water and moisture.',
    anchor: 'waterproofing',
  },
];

const BRANDS = ['Asian Paints', 'Nippon', 'Berger', 'Birla Opus', 'Nerolac', 'Dulux', 'Dr. Fixit', 'Fosroc'];

const PROJECTS = [
  { title: 'Modern Living', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Villa Exterior', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
  { title: 'Corporate Office', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Terrace Waterproof', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop' },
  { title: 'Commercial Build', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop' },
];

const PROCESS = [
  { num: '01', title: 'Free Site Inspection', desc: 'We visit your site, inspect wall condition, and measure area.' },
  { num: '02', title: 'Transparent Quotation', desc: 'You receive a clear quote including paint brand and labour cost.' },
  { num: '03', title: 'Colour Guidance', desc: 'Our experts help you select colours and finishes.' },
  { num: '04', title: 'Professional Painting', desc: 'Trained painters execute work using premium branded paints.' },
  { num: '05', title: 'Quality Check', desc: 'Supervisor ensures finishing quality and site cleanliness.' },
  { num: '06', title: 'Final Handover', desc: 'We hand over your beautifully painted space.' },
];

/* ═══════════════════════════════════════════════════════════ */
/*  HOME PAGE (NEO-BRUTALIST REDESIGN)                         */
/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  const tickerItems = ['Interior Painting', 'Exterior Painting', 'Commercial Painting', 'Waterproofing', 'Texture Painting', 'Dust-Free Painting'];
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <article itemScope itemType="https://schema.org/WebPage">

      {/* ── 1. SPLIT HERO ─────────────────────────────────────── */}
      <section className="split-hero" aria-label="Audience Portal">
        {/* Left Side: Residential */}
        <div className="split-side split-left">
          <div className="split-content">
            <div className="split-eyebrow">For Homes &amp; Apartments</div>
            <h1 className="split-title">Complete Residential Painting</h1>
            <p className="split-desc">
              Transform your living space with our premium interior, exterior, and waterproofing services. Perfect finishes, dust-free execution.
            </p>
            <Link to="/services#interior" className="btn-pill btn-black" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Residential Services <IconArrowRight />
            </Link>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=800&auto=format&fit=crop" 
            alt="Residential Painting"
            className="split-image" 
            style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          />
        </div>

        {/* Right Side: Commercial */}
        <div className="split-side split-right">
          <div className="split-content">
            <div className="split-eyebrow" style={{ color: '#FFD400' }}>For Businesses &amp; Contractors</div>
            <h1 className="split-title">Expert Commercial Painting</h1>
            <p className="split-desc">
              Durable, high-traffic coatings for offices, warehouses, and factories. Flexible scheduling with strict safety compliance.
            </p>
            <Link to="/services#commercial" className="btn-pill btn-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Commercial Services <IconArrowRight />
            </Link>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
            alt="Commercial Painting"
            className="split-image" 
            style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
          />
        </div>

        {/* Center Medallion */}
        <div className="split-medallion" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>

        {/* Brands Ticker Strip */}
        <div className="hero-brands-strip">
          <div className="hero-brands-track">
            {allItems.map((brand, i) => (
              <span key={i}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES (BENTO GRID) ────────────────────────── */}
      <section id="services" className="brutalist-section block-dark" style={{ padding: 0 }}>
        <div style={{ padding: '80px 5%' }}>
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '16px' }}>Our Services</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '600px', color: 'rgba(255,255,255,0.8)' }}>
            Seamless &amp; artistic painting solutions for your space.
          </p>
        </div>
        <div className="bento-grid" style={{ borderTopColor: 'rgba(255,255,255,0.2)', borderLeftColor: 'rgba(255,255,255,0.2)' }}>
          {SERVICES.map((s, i) => (
            <div className="bento-item" key={s.title} style={{ background: i % 2 === 0 ? 'var(--orange-500)' : '#FFD400', borderColor: 'var(--blue-900)' }}>
              <h3 style={{ fontSize: '3rem' }}>{s.title}</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '32px' }}>{s.desc}</p>
              <Link to={`/services#${s.anchor}`} className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '12px 24px' }}>View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY WE ARE UNIQUE ────────────────────────────── */}
      <section className="brutalist-section block-yellow" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px' }}>Hey! Have you heard?</p>
          <h2 className="text-massive" style={{ marginBottom: '64px' }}>
            We're a <span className="accent-circle">5-Star</span> Rated<br />Painting Business!
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', textAlign: 'left' }}>
            <div style={{ maxWidth: '300px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>🛠️</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '16px 0 8px' }}>Verified Painters</h4>
              <p style={{ fontWeight: 600 }}>Background-verified and specially trained for safety and quality.</p>
            </div>
            <div style={{ maxWidth: '300px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>🧹</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '16px 0 8px' }}>Dust-Free</h4>
              <p style={{ fontWeight: 600 }}>Modern tools and protective masking ensure a clean experience.</p>
            </div>
            <div style={{ maxWidth: '300px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>🛡️</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '16px 0 8px' }}>Product Warranty</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>We offer warranties on selected premium products and reliable post-painting support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VERTICAL GALLERY ─────────────────────────────── */}
      <section id="projects" className="brutalist-section block-white" style={{ padding: '80px 0 0' }}>
        <div className="container" style={{ paddingBottom: '60px' }}>
          <h2 className="text-huge">Recent Projects</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--gray-600)' }}>A selection of our best work across Chennai.</p>
        </div>
        <div className="vertical-gallery">
          {PROJECTS.map(p => (
            <div className="vertical-slice" key={p.title}>
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="vertical-slice-title">{p.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. PROCESS GRID ─────────────────────────────────── */}
      <section id="process" className="brutalist-section block-white" style={{ padding: 0 }}>
        <div className="bento-grid">
          <div className="bento-item" style={{ background: 'var(--blue-900)', color: 'var(--white)' }}>
            <h2 className="text-huge" style={{ color: 'var(--white)' }}>Our<br/>Process</h2>
            <p style={{ fontSize: '1.3rem', marginTop: '24px', opacity: 0.8 }}>Clean work. Clear steps. Perfect finish.</p>
          </div>
          {PROCESS.map(step => (
            <div className="bento-item" key={step.num}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--orange-500)', lineHeight: 1, marginBottom: '16px' }}>{step.num}</div>
              <h3 style={{ fontSize: '1.8rem' }}>{step.title}</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. BRANDS ───────────────────────────────────────── */}
      <section className="brutalist-section block-gray" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '40px' }}>Brands We Use</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {BRANDS.map(brand => (
              <span key={brand} style={{ padding: '16px 32px', background: 'var(--white)', border: 'var(--brutalist-border)', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 800, color: 'var(--blue-900)' }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────── */}
      <section id="testimonials" className="brutalist-section block-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '48px', textAlign: 'center' }}>Client Feedback</h2>
          <div className="bento-grid" style={{ borderTop: 'var(--brutalist-border)', borderLeft: 'var(--brutalist-border)' }}>
            {[
              { t: "Unique Painters did an excellent job painting our home. The team was professional, punctual and the finish quality is very good.", n: "Vignesh Vig", bg: "#FFD400" },
              { t: "We hired them to repaint our apartment. The work was done neatly with proper masking and without disturbing us much. Very satisfied.", n: "S. Murugan", bg: "var(--orange-500)" },
              { t: "Good quality work on our exterior. Surface preparation was thorough and the coatings have held up well even in heavy Chennai rains.", n: "Pradeep Nair", bg: "#E2E4E8" }
            ].map((review, idx) => (
              <div className="bento-item" key={idx} style={{ background: review.bg, borderColor: 'var(--blue-900)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--blue-900)' }}>★★★★★</div>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--blue-900)' }}>"{review.t}"</p>
                <div style={{ fontWeight: 900, textTransform: 'uppercase', color: 'var(--blue-900)' }}>— {review.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQS ─────────────────────────────────────────── */}
      <section id="faq" className="brutalist-section block-dark" style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-huge" style={{ color: 'var(--white)', marginBottom: '48px', textAlign: 'center' }}>Common Questions</h2>
          <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)' }}>
            {[
              { q: "Do you provide free site inspections?", a: "Yes, we provide absolutely free site inspections and detailed transparent quotations across Chennai." },
              { q: "Which paint brands do you use?", a: "We use major premium brands including Asian Paints, Nippon, Berger, Birla Opus, Nerolac, and Dulux." },
              { q: "Do you offer a warranty?", a: "Yes, we provide warranties on selected premium products along with our post-painting support." },
              { q: "Is your process dust-free?", a: "We use modern tools and proper masking to ensure a dust-free experience and provide post-paint cleaning." }
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: '2px solid rgba(255,255,255,0.2)', padding: '32px 0' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px', color: 'var(--orange-500)' }}>{faq.q}</h3>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. MASSIVE CONTACT BLOCK ───────────────────────── */}
      <section className="massive-contact-block block-orange">
        <p style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Let's Team Up! 🤝</p>
        <a href="mailto:sritherss.s@gmail.com" className="massive-email">sritherss.s@gmail.com</a>
        <div className="contact-pills">
          <Link to="/contact" className="btn-pill btn-black">Get Free Quote</Link>
          <a href="https://wa.me/917338882034" className="pill-icon" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <IconWa />
          </a>
          <a href="mailto:sritherss.s@gmail.com" className="pill-icon" aria-label="Email">
            <IconMail />
          </a>
          <a href="https://maps.google.com" className="pill-icon" aria-label="Location" target="_blank" rel="noreferrer">
            <IconMap />
          </a>
        </div>
      </section>

    </article>
  );
}

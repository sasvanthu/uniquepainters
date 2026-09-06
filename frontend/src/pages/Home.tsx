import { Link } from 'react-router-dom';


const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);

/* ─── Data ─── */
const SERVICES = [
  {
    title: 'Interior',
    desc: 'Smooth finishes, vibrant colors, and premium paints for your home.',
    anchor: 'interior',
  },
  {
    title: 'Exterior',
    desc: 'Durable exterior paints protecting against Chennai heat and rain.',
    anchor: 'exterior',
  },
  {
    title: 'Commercial',
    desc: 'Professional painting solutions for offices and large workspaces.',
    anchor: 'commercial',
  },
  {
    title: 'Waterproofing',
    desc: 'Strong, long-lasting defense against water leaks and moisture.',
    anchor: 'waterproofing',
  },
];

const BRANDS = [
  { name: 'Asian Paints', logo: '/logos/asianpaints.webp' },
  { name: 'Nippon', logo: '/logos/nippon.webp' },
  { name: 'Berger', logo: '/logos/berger.webp' },
  { name: 'Birla Opus', logo: '/logos/birlaopus.webp' },
  { name: 'Nerolac', logo: '/logos/nerolac.webp' },
  { name: 'Dulux', logo: '/logos/dulux.webp' },
  { name: 'Dr. Fixit', logo: '/logos/drfixit.webp' },
  { name: 'Fosroc', logo: '/logos/fosroc.webp' }
];

const PROJECTS = [
  { title: 'Villa Interior', img: '/images/villa_interior.webp' },
  { title: 'Villa Exterior', img: '/images/villa_exterior.webp' },
  { title: 'Apartment Exterior', img: '/images/apartment_exterior.webp' },
  { title: 'Commercial Space', img: '/images/commercial_space.webp' },
  { title: 'Industrial Space', img: '/images/industrial_space.webp' },
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
        {/* Left Side: Commercial */}
        <div className="split-side split-left">
          <img
            src="/images/image.webp"
            alt="Commercial Painting"
            className="split-image"
          />
          <div className="split-content">
            <div className="split-eyebrow" style={{ color: '#FFD400' }}>For Businesses &amp; Contractors</div>
            <h1 className="split-title">Expert Commercial Painting</h1>
            <p className="split-desc">
              Durable, high-traffic coatings for offices, warehouses, and factories. Flexible scheduling with strict safety compliance.
            </p>
            <Link to="/services/commercial" className="btn-pill btn-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Commercial Services <IconArrowRight />
            </Link>
          </div>
        </div>

        {/* Right Side: Residential */}
        <div className="split-side split-right">
          <div className="split-content">
            <div className="split-eyebrow">For Homes &amp; Apartments</div>
            <h1 className="split-title">Complete Residential Repainting</h1>
            <p className="split-desc" style={{ textAlign: 'center' }}>
              Transform your living space with our premium interior, exterior, and waterproofing services. Perfect finishes, dust-free execution.
            </p>
            <Link to="/services/interior" className="btn-pill btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Residential Services <IconArrowRight />
            </Link>
          </div>
          <img
            src="/images/image copy.webp"
            alt="Residential Painting"
            className="split-image"
          />
        </div>

        {/* Center Medallion */}
        <div className="split-medallion" aria-label="Unique Painters Logo">
          <img
            src="https://uniquepainters.in/wp-content/uploads/2025/12/Final_header_2-removebg-preview.png"
            alt="Unique Painters Logo"
            style={{ width: '88%', height: '88%', objectFit: 'contain' }}
          />
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
        <div className="bento-grid" style={{ borderTopColor: '#082f49', borderLeftColor: '#082f49' }}>
          {SERVICES.map((s, i) => {
            const cardColors = ['#ff7f50', '#14b8a6', '#fbbf24', '#a78bfa'];
            return (
              <div className="bento-item" key={s.title} style={{ background: cardColors[i], borderColor: '#082f49', color: '#082f49' }}>
                <h3 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px' }}>{s.title}</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '32px', lineHeight: 1.5 }}>{s.desc}</p>
                <Link to={`/services/${s.anchor}`} className="btn-pill btn-black" style={{ display: 'inline-flex', padding: '12px 24px', fontSize: '1.1rem' }}>View Details</Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 5. VERTICAL GALLERY ─────────────────────────────── */}
      <section id="projects" className="brutalist-section" style={{ padding: '80px 0 0', background: 'var(--blue-900)' }}>
        <div className="container" style={{ paddingBottom: '60px' }}>
          <h2 className="text-huge" style={{ color: 'var(--white)' }}>Recent Projects</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>A selection of our best work across Chennai.</p>
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

      {/* Separator */}
      <div style={{ height: '8px', background: 'var(--blue-900)', width: '100%' }}></div>

      {/* ── 6. PROCESS GRID (Restructured) ─────────────────── */}
      <section id="process" className="brutalist-section" style={{ padding: '100px 0', background: '#f8fafc', borderBottom: '3px solid #1e1b4b', borderTop: '3px solid #1e1b4b' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>

            {/* The 6 steps */}
            {PROCESS.map((step, index) => {
              const bgColors = ['#fca5a5', '#fde047', '#86efac', '#93c5fd', '#c4b5fd', '#f9a8d4'];
              const bgColor = bgColors[index % bgColors.length];
              return (
                <div key={step.num} style={{
                  background: bgColor,
                  border: '3px solid #1e1b4b',
                  boxShadow: '8px 8px 0px #1e1b4b',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-4px, -4px)';
                    e.currentTarget.style.boxShadow = '12px 12px 0px #1e1b4b';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '8px 8px 0px #1e1b4b';
                  }}
                >
                  <div style={{
                    fontSize: '6rem',
                    fontWeight: 900,
                    color: '#1e1b4b',
                    opacity: 0.1,
                    position: 'absolute',
                    top: '-15px',
                    right: '10px',
                    lineHeight: 1,
                    letterSpacing: '-5px'
                  }}>
                    {step.num}
                  </div>
                  <div style={{ display: 'inline-block', background: '#1e1b4b', color: '#fff', padding: '8px 20px', borderRadius: '100px', fontWeight: 800, fontSize: '1.1rem', marginBottom: '32px' }}>
                    STEP {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#1e1b4b', marginBottom: '16px', fontWeight: 800, lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontSize: '1.15rem', color: '#1e1b4b', fontWeight: 600, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY WE ARE UNIQUE ────────────────────────────── */}
      <section className="brutalist-section" style={{
        padding: '100px 0',
        textAlign: 'center',
        background: '#0ea5e9', // Sky Blue 500
        color: '#ffffff',
        borderBottom: '3px solid #082f49',
        borderTop: '3px solid #082f49'
      } as React.CSSProperties}>
        <div className="container" style={{ '--blue-900': '#ffffff', '--orange-500': '#fef08a' } as React.CSSProperties}>
          <p style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px', color: '#bae6fd', letterSpacing: '2px' }}>Hey! Have you heard?</p>
          <h2 className="text-massive" style={{ marginBottom: '64px' }}>
            We're a <span className="accent-circle" style={{ color: '#fef08a' }}>5-Star</span> Rated<br />Painting Business!
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Card 1: Verified Painters */}
            <div style={{
              background: '#ffffff',
              border: '3px solid #082f49',
              boxShadow: '10px 10px 0px #082f49',
              padding: '40px 24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#082f49'
            }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '16px' }}>🛡️</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Verified Painters</h4>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6 }}>Background-verified and specially trained for safety and quality.</p>
            </div>

            {/* Card 2: Dust-Free */}
            <div style={{
              background: '#f26122',
              border: '3px solid #082f49',
              boxShadow: '10px 10px 0px #082f49',
              padding: '40px 24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffffff'
            }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '16px' }}>✨</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Dust-Free</h4>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6 }}>Modern tools and protective masking ensure a clean experience.</p>
            </div>

            {/* Card 3: Product Warranty */}
            <div style={{
              background: '#082f49',
              border: '3px solid #082f49',
              boxShadow: '10px 10px 0px #fef08a',
              padding: '40px 24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffffff'
            }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '16px' }}>🏅</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#fef08a' }}>Product Warranty</h4>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6, color: '#e0f2fe' }}>We offer warranties on selected premium products and reliable support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BRANDS ───────────────────────────────────────── */}
      <section className="brutalist-section block-dark" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-huge" style={{ marginBottom: '40px', color: 'var(--white)' }}>Brands We Use</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {BRANDS.slice(0, 5).map(brand => (
                <div key={brand.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: 'var(--white)', border: '1px solid rgba(13, 31, 51, 0.08)', borderRadius: '100px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'transform 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px' }}
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue-900)' }}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {BRANDS.slice(5).map(brand => (
                <div key={brand.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: 'var(--white)', border: '1px solid rgba(13, 31, 51, 0.08)', borderRadius: '100px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'transform 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px' }}
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue-900)' }}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────── */}
      <section id="testimonials" className="brutalist-section block-yellow" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <h2 className="text-huge" style={{ margin: 0, color: 'var(--blue-900)' }}>Client Feedback</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--blue-900)', marginTop: '12px', fontWeight: 600, lineHeight: 1.6 }}>
              Read what homeowners and commercial clients across Chennai say about our painting quality & service.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Card 1 */}
            <div style={{
              background: 'var(--white)',
              border: '3px solid var(--blue-900)',
              boxShadow: '10px 10px 0px var(--blue-900)',
              padding: '60px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: 'clamp(3.5rem, 15vw, 5rem)', fontWeight: 900, color: 'var(--blue-900)', lineHeight: 1, marginBottom: '16px', letterSpacing: '-2px' }}>1000+</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--blue-900)', lineHeight: 1.4, letterSpacing: '2px' }}>PROJECTS<br />COMPLETED</div>
            </div>

            {/* Card 2 */}
            <div style={{
              background: 'var(--orange-500)',
              border: '3px solid var(--blue-900)',
              boxShadow: '10px 10px 0px var(--blue-900)',
              padding: '60px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: 'clamp(3.5rem, 15vw, 5rem)', fontWeight: 900, color: 'var(--white)', lineHeight: 1, marginBottom: '16px', letterSpacing: '-2px' }}>500+</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--white)', lineHeight: 1.4, letterSpacing: '2px' }}>HAPPY<br />CLIENTS</div>
            </div>

            {/* Card 3 */}
            <div style={{
              background: 'var(--blue-900)',
              border: '3px solid var(--blue-900)',
              boxShadow: '10px 10px 0px var(--orange-500)',
              padding: '60px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: 'clamp(3.5rem, 15vw, 5rem)', fontWeight: 900, color: 'var(--white)', lineHeight: 1, marginBottom: '16px', letterSpacing: '-2px' }}>100%</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--orange-500)', lineHeight: 1.4, letterSpacing: '2px' }}>QUALITY<br />FOCUS</div>
            </div>
          </div>
        </div>
      </section>





    </article>
  );
}

import { Link } from 'react-router-dom';

const SERVICES_DETAIL = [
  {
    id: 'interior',
    title: 'Interior Painting',
    eyebrow: 'Interior',
    img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=1200&auto=format&fit=crop',
    alt: 'Interior painting services',
    desc: 'Professional interior painting services delivering smooth finishes and long-lasting vibrant colors. We use premium quality paints, proper surface preparation, and expert application techniques to transform the inside of your property.',
    points: [
      'Complete surface preparation and crack filling',
      'Premium quality interior emulsion paints',
      'Dust-free application process',
      'Creative color and texture consultation',
      'Post-painting cleanup and handover',
    ],
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    eyebrow: 'Exterior',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Exterior painting services',
    desc: 'Professional exterior painting services delivering smooth finishes and long-lasting vibrant colors. We use premium quality paints, proper surface preparation, and expert application techniques to protect and beautify your exterior walls.',
    points: [
      'Weather-resistant and UV-protective coatings',
      'Multi-brand options: Asian Paints, Berger, Dulux',
      'Protection against Chennai heat, rain, cracks, and fungus',
      'Safe high-rise and scaffold work by verified painters',
      'Thorough power washing and surface treatment',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Painting',
    eyebrow: 'Commercial',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Commercial painting services',
    desc: 'Professional commercial painting services delivering smooth finishes and long-lasting vibrant colors. We use premium quality paints, proper surface preparation, and expert application techniques tailored specifically for offices and commercial spaces.',
    points: [
      'Flexible scheduling to minimize business disruption',
      'Durable, high-traffic commercial grade paints',
      'Complete interior and exterior commercial coverage',
      'Fast turnaround with strict adherence to timelines',
      'Safety compliant for all commercial work sites',
    ],
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing Solutions',
    eyebrow: 'Waterproofing',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Waterproofing services',
    desc: 'Professional waterproofing services delivering strong protection and long-lasting defense against water and moisture. We use premium-quality waterproofing materials, proper surface preparation, and expert application techniques.',
    points: [
      'Terrace and roof waterproofing treatments',
      'External wall moisture protection',
      'Use of premium brands like Dr. Fixit and Fosroc',
      'Crack sealing and expansion joint filling',
      'Long-lasting defense against Chennai monsoons',
    ],
  }
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero-inner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
          </nav>
          <h1>Complete Painting Services in Chennai</h1>
          <p>We offer professional interior, exterior, commercial painting, and waterproofing solutions. Experience seamless & artistic painting solutions for your space.</p>
        </div>
      </div>

      {/* Services List */}
      {SERVICES_DETAIL.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`section${idx % 2 === 1 ? ' section--gray' : ''}`}
          aria-labelledby={`${service.id}-title`}
        >
          <div className="container">
            <div className="safety-grid" style={{ gap: '80px' }}>
              {/* Image: alternate sides */}
              {idx % 2 === 0 ? (
                <>
                  <div className="safety-img-wrap">
                    <img src={service.img} alt={service.alt} loading="lazy" />
                  </div>
                  <div>
                    <span className="eyebrow">{service.eyebrow}</span>
                    <div className="divider-orange" />
                    <h2 className="section-title" id={`${service.id}-title`}>{service.title}</h2>
                    <p style={{ color: 'var(--gray-600)', marginBottom: '24px', lineHeight: '1.75' }}>{service.desc}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                      {service.points.map(p => (
                        <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--orange-500)', marginTop: '3px', flexShrink: 0 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-orange btn-lg">
                      Get a Quote for This Service
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span className="eyebrow">{service.eyebrow}</span>
                    <div className="divider-orange" />
                    <h2 className="section-title" id={`${service.id}-title`}>{service.title}</h2>
                    <p style={{ color: 'var(--gray-600)', marginBottom: '24px', lineHeight: '1.75' }}>{service.desc}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                      {service.points.map(p => (
                        <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--orange-500)', marginTop: '3px', flexShrink: 0 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-orange btn-lg">
                      Get a Quote for This Service
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                  <div className="safety-img-wrap">
                    <img src={service.img} alt={service.alt} loading="lazy" />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Band */}
      <section className="section section--blue" aria-label="Call to action">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--orange-400)' }}>Ready to Start?</span>
          <div className="divider-orange center" />
          <h2 className="section-title text-white">Ready to discuss your painting project?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 40px' }}>
            Contact us for a free site visit and detailed quotation. We deliver seamless & artistic painting solutions for your space across Chennai.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-orange btn-xl">Get Free Quote</Link>
            <a href="tel:+917338882034" className="btn btn-outline-white btn-xl">Call +91 73388 82034</a>
          </div>
        </div>
      </section>
    </>
  );
}

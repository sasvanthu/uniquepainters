function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name    = fd.get('name') || '';
    const phone   = fd.get('phone') || '';
    const type    = fd.get('type') || '';
    const msg     = fd.get('message') || '';
    const text = `Hi, I am ${name}. I need a free painting quote for ${type}. ${msg} (Phone: ${phone})`;
    window.open(`https://wa.me/917338882034?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
        <div>
          <label htmlFor="c-name" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: 'var(--white)' }}>Your Name *</label>
          <input id="c-name" name="name" type="text" placeholder="Full name" required style={{ width: '100%', padding: '20px', border: 'none', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 600, background: 'rgba(255,255,255,0.1)', color: 'var(--white)' }} />
        </div>
        <div>
          <label htmlFor="c-phone" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: 'var(--white)' }}>Phone Number *</label>
          <input id="c-phone" name="phone" type="tel" placeholder="10-digit number" required style={{ width: '100%', padding: '20px', border: 'none', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 600, background: 'rgba(255,255,255,0.1)', color: 'var(--white)' }} />
        </div>
      </div>
      
      <div>
        <label htmlFor="c-type" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: 'var(--white)' }}>Service Type</label>
        <select id="c-type" name="type" style={{ width: '100%', padding: '20px', border: 'none', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 600, appearance: 'none', background: 'rgba(255,255,255,0.1)', color: 'var(--white)', cursor: 'pointer' }}>
          <option style={{ color: 'var(--blue-900)' }} value="Interior Painting">Interior Painting</option>
          <option style={{ color: 'var(--blue-900)' }} value="Exterior Painting">Exterior Painting</option>
          <option style={{ color: 'var(--blue-900)' }} value="Commercial Painting">Commercial Painting</option>
          <option style={{ color: 'var(--blue-900)' }} value="Waterproofing">Waterproofing</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="c-msg" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: 'var(--white)' }}>Message / Requirements</label>
        <textarea id="c-msg" name="message" rows={6} placeholder="Describe your painting requirements in detail..." style={{ width: '100%', padding: '20px', border: 'none', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 600, resize: 'vertical', background: 'rgba(255,255,255,0.1)', color: 'var(--white)' }}></textarea>
      </div>
      
      <button type="submit" className="btn-pill btn-yellow" style={{ width: '100%', padding: '24px', fontSize: '1.5rem', marginTop: '16px', cursor: 'pointer', textAlign: 'center', justifyContent: 'center' }}>
        Send WhatsApp Request
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <article style={{ background: 'var(--gray-50)', minHeight: '100vh', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'start' }}>
          
          {/* LEFT COLUMN: HERO & CONTACT DETAILS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'sticky', top: '120px' }}>
            
            <div>
              <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
                CONTACT US
              </div>
              <h1 className="text-massive" style={{ marginBottom: '24px', lineHeight: 1.1 }}>
                Let's get in<br/>
                <span className="accent-circle">touch.</span>
              </h1>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', opacity: 0.8 }}>
                Whether you need a free quote, a site inspection, or have a question about our services, our team is ready to help.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={{ background: '#FFD400', border: 'var(--brutalist-border)', padding: '32px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '16px' }}>Phone</h3>
                <a href="https://wa.me/917338882034" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-900)', textDecoration: 'none' }}>
                  +91 73388<br/>82034
                </a>
              </div>
              
              <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '32px', boxShadow: '8px 8px 0 var(--orange-500)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '16px' }}>Email</h3>
                <a href="mailto:sritherss.s@gmail.com" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-900)', textDecoration: 'none', wordBreak: 'break-all' }}>
                  sritherss.s<br/>@gmail.com
                </a>
              </div>

              <div style={{ gridColumn: '1 / -1', background: 'var(--white)', border: 'var(--brutalist-border)', padding: '32px', boxShadow: '8px 8px 0 var(--blue-900)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '16px' }}>Head Office</h3>
                <address style={{ fontSize: '1.25rem', fontWeight: 700, fontStyle: 'normal', lineHeight: 1.6, color: 'var(--blue-900)' }}>
                  No:12/460, Thiruverkadu Road, Vanagaram,<br/>
                  Chennai, Tamilnadu - 600 095.
                </address>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE FORM CARD */}
          <div style={{ background: 'var(--blue-900)', border: 'var(--brutalist-border)', padding: '64px', boxShadow: '-16px 16px 0 var(--orange-500)', borderRadius: '24px' }}>
            <h2 className="text-huge" style={{ marginBottom: '16px', color: 'var(--white)' }}>Request an Estimate</h2>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '48px' }}>
              We typically respond within 2 hours.
            </p>
            <ContactForm />
          </div>

        </div>
      </div>
    </article>
  );
}

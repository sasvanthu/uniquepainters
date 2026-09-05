import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <Link to="/">
              <img
                src="https://uniquepainters.in/wp-content/uploads/2025/12/Final_header_2-removebg-preview.png"
                alt="Unique Painters – Commercial Painting Contractors Chennai"
                className="footer-logo"
                itemProp="logo"
              />
            </Link>
            <p className="footer-about" itemProp="description">
              Unique Painters is a reliable painting company in Chennai delivering complete painting solutions with experienced professionals and timely completion.
            </p>
            <div className="footer-socials">
              <a
                href="https://wa.me/917338882034"
                className="footer-social"
                aria-label="Contact Unique Painters on WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:sritherss.s@gmail.com" className="footer-social" aria-label="Email Unique Painters">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 style={{ marginTop: '12px' }}>Services</h4>
            <nav className="footer-links" aria-label="Services navigation">
              <Link to="/services/interior">Interior Painting</Link>
              <Link to="/services/exterior">Exterior Painting</Link>
              <Link to="/services/commercial">Commercial Painting</Link>
              <Link to="/services/waterproofing">Waterproofing</Link>
            </nav>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4 style={{ marginTop: '12px' }}>Quick Links</h4>
            <nav className="footer-links" aria-label="Quick links navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/#projects">Projects</Link>
              <Link to="/#industries">Industries</Link>
              <Link to="/#faq">FAQ</Link>
              <Link to="/contact">Get a Quote</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 style={{ marginTop: '12px' }}>Contact Us</h4>
            <address style={{ fontStyle: 'normal' }} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: 3 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>
                  <span itemProp="streetAddress">No 6, Jayam Industrial Estate, 1st Main Rd, Chettiyar Agaram, Vanagaram</span>,{' '}
                  <span itemProp="addressLocality">Chennai</span> –{' '}
                  <span itemProp="postalCode">600116</span>
                </span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+917338882034" itemProp="telephone">+91 73388 82034</a>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
                <a href="mailto:sritherss.s@gmail.com" itemProp="email">sritherss.s@gmail.com</a>
              </div>
            </address>
            <div style={{ marginTop: '24px' }}>
              <a href="https://wa.me/917338882034" className="btn-pill btn-yellow" style={{ padding: '12px 24px', fontSize: '1rem', display: 'inline-block' }} target="_blank" rel="noreferrer">
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Unique Painters. All rights reserved. Professional Painting Services Company, Chennai.</p>
          <p>
            <span itemProp="areaServed">Chennai, Tamil Nadu</span>
            {' '}·{' '}
            <a href="tel:+917338882034" style={{ color: 'rgba(255,255,255,.5)' }}>+91 73388 82034</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

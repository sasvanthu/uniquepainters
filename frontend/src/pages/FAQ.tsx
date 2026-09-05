export default function FAQ() {
  const faqs = [
    { q: "Do you provide free site inspections?", a: "Yes, we provide absolutely free site inspections and detailed transparent quotations across Chennai." },
    { q: "Which paint brands do you use?", a: "We use major premium brands including Asian Paints, Nippon, Berger, Birla Opus, Nerolac, and Dulux." },
    { q: "Do you offer a warranty?", a: "Yes, we provide warranties on selected premium products along with our post-painting support." },
    { q: "Is your process dust-free?", a: "We use modern tools and proper masking to ensure a dust-free experience and provide post-paint cleaning." }
  ];

  return (
    <article className="animate-fade-in-up" style={{ background: '#09090b', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
      <section id="faq" style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 className="text-massive" style={{ color: '#f4f4f5', margin: 0, textTransform: 'uppercase', letterSpacing: '-2px' }}>
              Got <span style={{ color: '#a3e635' }}>Questions?</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: '#a1a1aa', marginTop: '20px', fontWeight: 600 }}>
              Everything you need to know about our painting services.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ 
                background: '#18181b', 
                border: '3px solid #3f3f46',
                boxShadow: '10px 10px 0px #a3e635',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                gap: '24px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-4px, -4px)';
                e.currentTarget.style.boxShadow = '14px 14px 0px #a3e635';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '10px 10px 0px #a3e635';
              }}
              >
                <div style={{ 
                  background: '#a3e635', 
                  color: '#09090b', 
                  fontSize: '1.8rem', 
                  fontWeight: 900, 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '3px solid #09090b',
                  boxShadow: '4px 4px 0px #09090b'
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '16px', color: '#f4f4f5', lineHeight: 1.3 }}>{faq.q}</h3>
                  <p style={{ fontSize: '1.25rem', color: '#d4d4d8', fontWeight: 500, lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

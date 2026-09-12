export interface BrandItem {
  name: string;
  logo: string;
  url: string;
}

export const BRANDS: BrandItem[] = [
  { name: 'Asian Paints', logo: '/logos/asianpaints.webp', url: 'https://www.asianpaints.com/' },
  { name: 'Nippon', logo: '/logos/nippon.webp', url: 'https://www.nipponpaint.co.in/' },
  { name: 'Berger', logo: '/logos/berger.webp', url: 'https://www.bergerpaints.com/' },
  { name: 'Birla Opus', logo: '/logos/birlaopus.webp', url: 'https://www.birlaopus.com/' },
  { name: 'Nerolac', logo: '/logos/nerolac.webp', url: 'https://www.nerolac.com/' },
  { name: 'Dulux', logo: '/logos/dulux.webp', url: 'https://www.dulux.in/' },
  { name: 'Dr. Fixit', logo: '/logos/drfixit.webp', url: 'https://www.drfixit.co.in/' },
  { name: 'Fosroc', logo: '/logos/fosroc.webp', url: 'https://fosroc.com/' }
];

export default function BrandsSection({ title = "Brands We Use" }: { title?: string }) {
  return (
    <section className="brutalist-section block-dark" style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="text-huge" style={{ marginBottom: '40px', color: 'var(--white)' }}>{title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {BRANDS.slice(0, 5).map(brand => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${brand.name} official website`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'var(--white)',
                  border: '1px solid rgba(13, 31, 51, 0.08)',
                  borderRadius: '100px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px' }}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue-900)' }}>
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {BRANDS.slice(5).map(brand => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${brand.name} official website`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'var(--white)',
                  border: '1px solid rgba(13, 31, 51, 0.08)',
                  borderRadius: '100px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px' }}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue-900)' }}>
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

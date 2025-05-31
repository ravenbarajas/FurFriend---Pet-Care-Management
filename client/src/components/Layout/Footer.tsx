export default function Footer() {
  return (
    <footer className="footer" style={{ background: 'var(--text-dark)', color: 'var(--bg-white)', padding: 'var(--spacing-2xl) 0 var(--spacing-md) 0' }}>
      <div className="container">
        <div className="grid grid--auto" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--accent-color)' }}>PetCarePro</h3>
            <p style={{ marginBottom: 'var(--spacing-sm)', color: 'rgba(255, 255, 255, 0.8)' }}>
              Smart pet care management for modern veterinary practices, grooming salons, and boarding facilities.
            </p>
            <div className="flex" style={{ gap: 'var(--spacing-sm)', justifyContent: 'flex-start' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', color: 'var(--bg-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} aria-label="Follow us on Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', color: 'var(--bg-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} aria-label="Follow us on Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', color: 'var(--bg-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} aria-label="Follow us on LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', color: 'var(--bg-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} aria-label="Follow us on Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--accent-color)' }}>Product</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#features" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Features</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#pricing" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Pricing</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Integrations</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>API Documentation</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--accent-color)' }}>Company</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>About Us</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Careers</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Press Kit</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Contact</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--accent-color)' }}>Support</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Help Center</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Getting Started</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>System Status</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Security</a></li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Training</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 'var(--spacing-sm)', textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}>
          <p>&copy; 2024 PetCarePro. All rights reserved. Built with ❤️ for pet care professionals.</p>
        </div>
      </div>
    </footer>
  );
}

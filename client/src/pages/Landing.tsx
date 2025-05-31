import { Link } from 'wouter';

export default function Landing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Smart Pet Care Management Made Simple</h1>
          <p className="hero__subtitle">Streamline your veterinary practice, grooming salon, or boarding facility with comprehensive pet profiles, automated scheduling, and seamless client communication.</p>
          
          <div className="hero__actions">
            <Link href="/dashboard" className="btn btn--accent">
              <i className="fas fa-rocket" aria-hidden="true"></i>
              Start Free Trial
            </Link>
            <button className="btn btn--secondary" onClick={() => scrollToSection('demo')}>
              <i className="fas fa-play" aria-hidden="true"></i>
              View Demo
            </button>
          </div>
          
          <div className="hero__image">
            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600" 
                 alt="Modern veterinary clinic interior" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="features__header">
            <h2 className="features__title">Everything You Need to Manage Pet Care</h2>
            <p className="features__subtitle">Comprehensive tools designed specifically for pet care professionals</p>
          </div>
          
          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-id-card"></i>
              </div>
              <h3 className="feature-card__title">Centralized Pet Profiles</h3>
              <p className="feature-card__description">Complete digital records for each pet including medical history, photos, and owner contact information. Access everything you need in one place.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3 className="feature-card__title">Smart Appointment Booking</h3>
              <p className="feature-card__description">Intelligent scheduling system with automated reminders, conflict detection, and seamless calendar integration for efficient appointment management.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-syringe"></i>
              </div>
              <h3 className="feature-card__title">Treatment Tracking</h3>
              <p className="feature-card__description">Monitor vaccinations, medications, and treatments with automated alerts for due dates and comprehensive medical history tracking.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-receipt"></i>
              </div>
              <h3 className="feature-card__title">Billing & Payments</h3>
              <p className="feature-card__description">Streamlined invoicing with multiple payment options, automated billing cycles, and detailed financial reporting for your business.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="feature-card__title">Client Communication</h3>
              <p className="feature-card__description">Built-in messaging system with file sharing capabilities, appointment updates, and secure communication with pet owners.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-card__icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="feature-card__title">Analytics & Reports</h3>
              <p className="feature-card__description">Comprehensive business insights with detailed analytics, performance metrics, and customizable reports to grow your practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="features__header">
            <h2 className="features__title">Choose Your Plan</h2>
            <p className="features__subtitle">Flexible pricing options for businesses of all sizes</p>
          </div>
          
          <div className="pricing__grid">
            <div className="pricing-card">
              <h3 className="pricing-card__title">Starter</h3>
              <div className="pricing-card__price">$29</div>
              <div className="pricing-card__period">per month</div>
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">Up to 100 pet profiles</li>
                <li className="pricing-card__feature">Basic appointment scheduling</li>
                <li className="pricing-card__feature">Treatment tracking</li>
                <li className="pricing-card__feature">Email support</li>
                <li className="pricing-card__feature">Mobile app access</li>
              </ul>
              <Link href="/dashboard" className="btn btn--secondary w-full">Get Started</Link>
            </div>
            
            <div className="pricing-card pricing-card--featured">
              <h3 className="pricing-card__title">Professional</h3>
              <div className="pricing-card__price">$79</div>
              <div className="pricing-card__period">per month</div>
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">Up to 500 pet profiles</li>
                <li className="pricing-card__feature">Advanced scheduling & reminders</li>
                <li className="pricing-card__feature">Complete medical records</li>
                <li className="pricing-card__feature">Billing & payment processing</li>
                <li className="pricing-card__feature">Client portal access</li>
                <li className="pricing-card__feature">Analytics & reporting</li>
                <li className="pricing-card__feature">Priority phone support</li>
              </ul>
              <Link href="/dashboard" className="btn btn--primary w-full">Start Free Trial</Link>
            </div>
            
            <div className="pricing-card">
              <h3 className="pricing-card__title">Enterprise</h3>
              <div className="pricing-card__price">$149</div>
              <div className="pricing-card__period">per month</div>
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">Unlimited pet profiles</li>
                <li className="pricing-card__feature">Multi-location support</li>
                <li className="pricing-card__feature">Custom integrations</li>
                <li className="pricing-card__feature">Advanced analytics</li>
                <li className="pricing-card__feature">White-label options</li>
                <li className="pricing-card__feature">24/7 dedicated support</li>
                <li className="pricing-card__feature">Custom training & onboarding</li>
              </ul>
              <Link href="/dashboard" className="btn btn--secondary w-full">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="features" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="features__header">
            <h2 className="features__title">Trusted by Pet Care Professionals</h2>
            <p className="features__subtitle">See what our customers have to say about PetCarePro</p>
          </div>
          
          <div className="features__grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200" 
                   alt="Veterinarian with golden retriever" 
                   style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-md)' }} />
              <p className="feature-card__description">"PetCarePro has transformed how we manage our clinic. The scheduling system alone has saved us hours each week, and our clients love the automated reminders."</p>
              <div style={{ marginTop: 'var(--spacing-md)', fontWeight: '600' }}>Dr. Sarah Johnson</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Happy Paws Veterinary Clinic</div>
            </div>
            
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200" 
                   alt="Professional pet groomer with small dog" 
                   style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-md)' }} />
              <p className="feature-card__description">"The client communication features are amazing. Being able to send before and after photos directly through the platform has really impressed our customers."</p>
              <div style={{ marginTop: 'var(--spacing-md)', fontWeight: '600' }}>Mike Thompson</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Pampered Pets Grooming</div>
            </div>
            
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200" 
                   alt="Pet boarding facility staff with dogs" 
                   style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-md)' }} />
              <p className="feature-card__description">"Managing 50+ pets daily used to be chaotic. Now everything is organized and accessible. The treatment tracking ensures we never miss important medications."</p>
              <div style={{ marginTop: 'var(--spacing-md)', fontWeight: '600' }}>Lisa Chen</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Sunset Pet Resort</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

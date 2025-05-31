import { useState } from 'react';
import Button from '../UI/Button';

interface RegisterFormProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterForm({ onRegister, onSwitchToLogin }: RegisterFormProps) {
  const [businessType, setBusinessType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    onRegister();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="businessType" className="form__label">Business Type</label>
        <select 
          id="businessType" 
          className="form__select" 
          required 
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        >
          <option value="">Select your business type</option>
          <option value="veterinary">Veterinary Clinic</option>
          <option value="grooming">Pet Grooming Salon</option>
          <option value="boarding">Pet Boarding Service</option>
          <option value="other">Other Pet Care Business</option>
        </select>
      </div>
      
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="firstName" className="form__label">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            className="form__input" 
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name" 
          />
        </div>
        
        <div className="form__group">
          <label htmlFor="lastName" className="form__label">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            className="form__input" 
            required 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name" 
          />
        </div>
      </div>
      
      <div className="form__group">
        <label htmlFor="businessName" className="form__label">Business Name</label>
        <input 
          type="text" 
          id="businessName" 
          className="form__input" 
          required 
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Enter your business name" 
        />
      </div>
      
      <div className="form__group">
        <label htmlFor="registerEmail" className="form__label">Email Address</label>
        <input 
          type="email" 
          id="registerEmail" 
          className="form__input" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
        />
      </div>
      
      <div className="form__group">
        <label htmlFor="registerPassword" className="form__label">Password</label>
        <input 
          type="password" 
          id="registerPassword" 
          className="form__input" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a strong password" 
        />
      </div>
      
      <div className="flex" style={{ alignItems: 'flex-start', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
        <input 
          type="checkbox" 
          id="termsAccept" 
          required 
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          style={{ marginTop: '4px' }}
        />
        <label htmlFor="termsAccept" style={{ fontSize: '14px', lineHeight: '1.4' }}>
          I agree to the <a href="#" className="text-primary">Terms of Service</a> 
          and <a href="#" className="text-primary">Privacy Policy</a>
        </label>
      </div>
      
      <Button type="submit" variant="accent" className="w-full">
        <i className="fas fa-rocket" aria-hidden="true"></i>
        Start Free Trial
      </Button>
      
      <div className="text-center" style={{ marginTop: 'var(--spacing-sm)', paddingTop: 'var(--spacing-sm)', borderTop: '1px solid var(--border-color)' }}>
        <span className="text-muted">Already have an account? </span>
        <button type="button" onClick={onSwitchToLogin} className="text-primary" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
          Sign in here
        </button>
      </div>
    </form>
  );
}

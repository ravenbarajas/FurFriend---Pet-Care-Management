import { useState } from 'react';
import Button from '../UI/Button';

interface LoginFormProps {
  onLogin: () => void;
  onSwitchToRegister: () => void;
}

export default function LoginForm({ onLogin, onSwitchToRegister }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLogin();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="loginEmail" className="form__label">Email Address</label>
        <input 
          type="email" 
          id="loginEmail" 
          className="form__input" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
        />
      </div>
      
      <div className="form__group">
        <label htmlFor="loginPassword" className="form__label">Password</label>
        <input 
          type="password" 
          id="loginPassword" 
          className="form__input" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password" 
        />
      </div>
      
      <div className="flex" style={{ alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
        <input 
          type="checkbox" 
          id="rememberMe" 
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      
      <div className="text-center" style={{ marginTop: 'var(--spacing-sm)' }}>
        <a href="#" className="text-primary">
          Forgot your password?
        </a>
      </div>
      
      <div className="text-center" style={{ marginTop: 'var(--spacing-sm)', paddingTop: 'var(--spacing-sm)', borderTop: '1px solid var(--border-color)' }}>
        <span className="text-muted">Don't have an account? </span>
        <button type="button" onClick={onSwitchToRegister} className="text-primary" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
          Sign up for free
        </button>
      </div>
    </form>
  );
}

interface HeaderProps {
  isAuthenticated: boolean;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLogout: () => void;
}

export default function Header({ isAuthenticated, onLoginClick, onRegisterClick, onLogout }: HeaderProps) {
  if (isAuthenticated) {
    return null; // Dashboard has its own header
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <a href="/" className="logo">
            <i className="fas fa-paw" aria-hidden="true"></i>
            PetCarePro
          </a>
          
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <a href="#features" className="nav__link">Features</a>
            <a href="#pricing" className="nav__link">Pricing</a>
            <a href="#about" className="nav__link">About</a>
            <a href="#contact" className="nav__link">Contact</a>
          </nav>
          
          <div className="flex" style={{ gap: 'var(--spacing-md)' }}>
            <button className="btn btn--secondary" onClick={onLoginClick}>
              Sign In
            </button>
            <button className="btn btn--primary" onClick={onRegisterClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

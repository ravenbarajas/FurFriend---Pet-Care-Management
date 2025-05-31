import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
}

export default function Card({ children, className = '', title, subtitle, icon }: CardProps) {
  const classes = ['card', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {icon && (
        <div className="card__icon">
          <i className={icon} aria-hidden="true"></i>
        </div>
      )}
      {(title || subtitle) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

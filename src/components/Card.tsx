import type { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
  return (
    <div className={`card glass ${hoverEffect ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

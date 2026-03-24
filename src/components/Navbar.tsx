import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import './Navbar.css';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Briefcase className="logo-icon text-gradient" size={28} />
          <span className="text-gradient font-bold logo-text">AuraTalent</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/talent" className="nav-link">Talent Directory</Link></li>
          <li><Link to="/jobs" className="nav-link">Job Board</Link></li>
        </ul>
        
        <div className="nav-actions">
          <Button variant="outline">Sign In</Button>
          <Button variant="primary">Join Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

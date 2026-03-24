import './Footer.css';
import { Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: '1rem' }}>
            <Briefcase className="logo-icon text-gradient" size={24} />
            <span className="text-gradient logo-text" style={{ fontSize: '1.2rem' }}>AuraTalent</span>
          </div>
          <p className="footer-desc">
            Connecting premium IT professionals with top-tier agencies. Elevate your career or find the perfect match.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>For Agencies</h4>
            <ul>
              <li><a href="#">Find Talent</a></li>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For Freelancers</h4>
            <ul>
              <li><a href="#">Create Profile</a></li>
              <li><a href="#">Job Board</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AuraTalent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

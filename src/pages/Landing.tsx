import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Briefcase, Award } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <div className="badge glass">🚀 The Future of IT Talent</div>
            <h1 className="hero-title">
              Connect with <span className="text-gradient">Premium IT Professionals</span>
            </h1>
            <p className="hero-subtitle">
              AuraTalent is the exclusive network uniting top-tier freelancers with industry-leading agencies. Find your next project or your next hire today.
            </p>
            <div className="hero-actions">
              <Link to="/talent">
                <Button variant="primary" className="hero-btn">
                  Hire Talent <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="secondary" className="hero-btn">
                  Find Work
                </Button>
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">10k+</span>
                <span className="stat-label">Vetted Pros</span>
              </div>
              <div className="stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">Agencies</span>
              </div>
              <div className="stat">
                <span className="stat-value">$2M+</span>
                <span className="stat-label">Jobs Posted</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass visual-card main-visual">
              <div className="visual-header">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              <div className="visual-body">
                <div className="mock-profile">
                  <div className="avatar glass"></div>
                  <div className="lines">
                    <div className="line title glass"></div>
                    <div className="line subtitle glass"></div>
                  </div>
                </div>
                <div className="mock-skills">
                  <span className="mock-skill glass">React</span>
                  <span className="mock-skill glass">Node.js</span>
                  <span className="mock-skill glass text-gradient font-bold" style={{ borderColor: 'rgba(109, 40, 217, 0.4)' }}>AWS</span>
                </div>
                <div className="mock-chart">
                  <div className="bar b1 glass"></div>
                  <div className="bar b2 glass"></div>
                  <div className="bar b3 glass" style={{ background: 'var(--accent-gradient)' }}></div>
                  <div className="bar b4 glass"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose <span className="text-gradient">AuraTalent</span>?</h2>
            <p>We provide a seamless experience for both agencies looking for the perfect fit, and freelancers looking for their next big opportunity.</p>
          </div>
          
          <div className="features-grid">
            <Card className="feature-card">
              <div className="feature-icon-wrapper">
                <Users className="feature-icon" />
              </div>
              <h3>Curated Talent Pool</h3>
              <p>Every IT professional on our platform passes a rigorous technical assessment and interview process.</p>
            </Card>
            
            <Card className="feature-card">
              <div className="feature-icon-wrapper">
                <Briefcase className="feature-icon" />
              </div>
              <h3>Premium Opportunities</h3>
              <p>Access high-paying, exclusive IT contracts from leading tech companies and innovative startups.</p>
            </Card>
            
            <Card className="feature-card">
              <div className="feature-icon-wrapper">
                <Award className="feature-icon" />
              </div>
              <h3>Seamless Bidding</h3>
              <p>Our transparent bidding system ensures fair compensation and clear expectations for every project.</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Dual CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <Card className="cta-card agency-cta" hoverEffect={false}>
            <h3>For Agencies & Clients</h3>
            <p>Scale your tech team instantly with our vetted professionals.</p>
            <ul className="cta-list">
              <li><CheckCircle2 size={16} className="text-gradient" /> Post unlimited jobs</li>
              <li><CheckCircle2 size={16} className="text-gradient" /> Access complete talent profiles</li>
              <li><CheckCircle2 size={16} className="text-gradient" /> Secure payment escrow</li>
            </ul>
            <Button variant="primary" fullWidth>Create Agency Account</Button>
          </Card>
          
          <Card className="cta-card freelancer-cta" hoverEffect={false}>
            <h3>For IT Freelancers</h3>
            <p>Take control of your career and work with top clients.</p>
            <ul className="cta-list">
              <li><CheckCircle2 size={16} className="text-gradient" /> Build a standout portfolio</li>
              <li><CheckCircle2 size={16} className="text-gradient" /> Bid on premium offers</li>
              <li><CheckCircle2 size={16} className="text-gradient" /> Guaranteed payments</li>
            </ul>
            <Button variant="secondary" fullWidth>Join as Freelancer</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Landing;

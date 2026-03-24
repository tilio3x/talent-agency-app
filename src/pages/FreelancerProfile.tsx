import { Mail, MapPin, Globe, Calendar, Download, Briefcase, Star, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import './FreelancerProfile.css';

const MOCK_PROFILE = {
  id: '1',
  name: 'Sarah Jenkins',
  role: 'Senior React Developer & UI Architect',
  rate: '$85/hr',
  location: 'San Francisco, CA (Remote)',
  bio: 'Passionate and detail-oriented frontend developer with over 8 years of experience building scalable, accessible, and highly performant web applications. Specialized in React ecosystem, complex state management, and modern CSS architectures.',
  avatar: 'https://i.pravatar.cc/250?u=sarah',
  coverBg: 'linear-gradient(135deg, rgba(109, 40, 217, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)',
  stats: {
    jobsCompleted: 42,
    rating: 4.9,
    hoursWorked: 3200,
    onTime: '98%'
  },
  skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'TailwindCSS', 'Figma', 'GraphQL', 'Jest'],
  portfolio: [
    {
      id: 1,
      title: 'FinTech Dashboard v2.0',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
      tech: ['React', 'Redux', 'Chart.js']
    },
    {
      id: 2,
      title: 'Healthcare Patient Portal',
      category: 'Progressive Web App',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=400',
      tech: ['Next.js', 'TailwindCSS', 'GraphQL']
    },
    {
      id: 3,
      title: 'E-Commerce Storefront',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400',
      tech: ['React', 'Stripe', 'Zustand']
    }
  ],
  experience: [
    {
      id: 1,
      role: 'Lead Frontend Engineer',
      company: 'TechWave Solutions',
      period: '2020 - Present',
      description: 'Spearheaded the migration of a legacy Angular app to a modern React stack, resulting in a 40% performance increase.'
    },
    {
      id: 2,
      role: 'UI Developer',
      company: 'Creative Studio Alpha',
      period: '2017 - 2020',
      description: 'Developed highly interactive marketing sites and dashboards for Fortune 500 clients.'
    }
  ],
  reviews: [
    {
      id: 1,
      agency: 'FinTech Integrations LLC',
      rating: 5,
      comment: 'Sarah is an absolute professional. She delivered the dashboard 2 weeks ahead of schedule and the code quality was impeccable.',
      date: '1 week ago'
    },
    {
      id: 2,
      agency: 'Global Media Inc',
      rating: 5,
      comment: 'Excellent communication and top-tier React skills. Highly recommended for complex UI architectures.',
      date: '2 months ago'
    }
  ]
};

const FreelancerProfile = () => {
  // Using MOCK_PROFILE for demo. In real app, we'd fetch based on URL params.
  const profile = MOCK_PROFILE;

  return (
    <div className="profile-page">
      {/* Cover Profile Header */}
      <div className="profile-cover" style={{ background: profile.coverBg }}></div>
      <div className="container profile-container">
        
        <div className="profile-main-grid">
          {/* Left Column - User Info */}
          <div className="profile-sidebar">
            <Card className="user-info-card" hoverEffect={false}>
              <div className="avatar-wrapper">
                <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
                <div className="online-status"></div>
              </div>
              
              <h1 className="profile-name">{profile.name}</h1>
              <p className="profile-role text-gradient font-bold">{profile.role}</p>
              
              <div className="profile-meta-grid">
                <div className="meta-row">
                  <MapPin size={16} className="text-secondary" />
                  <span>{profile.location}</span>
                </div>
                <div className="meta-row">
                  <Globe size={16} className="text-secondary" />
                  <a href="#" className="hover-link">sarahjenkins.dev</a>
                </div>
              </div>
              
              <div className="profile-actions">
                <Button variant="primary" fullWidth>Hire {profile.name.split(' ')[0]}</Button>
                <Button variant="outline" fullWidth>
                  <Mail size={16} /> Send Message
                </Button>
              </div>
              
              <div className="profile-socials">
                <a href="#" className="social-icon glass"><Globe size={18} /></a>
                <a href="#" className="social-icon glass"><Globe size={18} /></a>
                <Button variant="ghost" className="resume-btn" style={{ marginLeft: 'auto' }}>
                  <Download size={16} /> Resume
                </Button>
              </div>
            </Card>

            <Card className="stats-card" hoverEffect={false}>
              <h3 className="card-title">Success Stats</h3>
              <div className="stats-grid">
                <div className="stat-box glass">
                  <span className="stat-box-val">{profile.stats.jobsCompleted}</span>
                  <span className="stat-box-lbl">Jobs</span>
                </div>
                <div className="stat-box glass">
                  <span className="stat-box-val flex-center"><Star size={14} className="star-icon mr-1"/> {profile.stats.rating}</span>
                  <span className="stat-box-lbl">Rating</span>
                </div>
                <div className="stat-box glass">
                  <span className="stat-box-val">{profile.stats.hoursWorked}</span>
                  <span className="stat-box-lbl">Hours</span>
                </div>
                <div className="stat-box glass">
                  <span className="stat-box-val">{profile.stats.onTime}</span>
                  <span className="stat-box-lbl">On-Time</span>
                </div>
              </div>
            </Card>

            <Card className="skills-card" hoverEffect={false}>
              <h3 className="card-title">Top Skills</h3>
              <div className="skills-wrap">
                {profile.skills.map(skill => (
                  <span key={skill} className="profile-skill-tag">{skill}</span>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Portoflio & Details */}
          <div className="profile-content">
            <section className="content-section animate-fade-in">
              <div className="section-header-row">
                <h2>About the Freelancer</h2>
                <div className="rate-badge glass">
                  <span className="text-gradient font-bold" style={{fontSize: '1.25rem'}}>{profile.rate}</span>
                </div>
              </div>
              <p className="bio-text">{profile.bio}</p>
            </section>

            <section className="content-section animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2>Portfolio Showcase</h2>
              <div className="portfolio-grid">
                {profile.portfolio.map(item => (
                  <div key={item.id} className="portfolio-item glass">
                    <div className="portfolio-img-wrapper">
                      <img src={item.image} alt={item.title} className="portfolio-img" />
                      <div className="portfolio-overlay">
                        <Button variant="primary">View Project</Button>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <span className="portfolio-category text-gradient">{item.category}</span>
                      <h4>{item.title}</h4>
                      <div className="portfolio-tech">
                        {item.tech.join(' • ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2>Work Experience</h2>
              <div className="timeline">
                {profile.experience.map(exp => (
                  <div key={exp.id} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass">
                      <div className="timeline-header">
                        <h4>{exp.role}</h4>
                        <span className="timeline-date"><Calendar size={14} /> {exp.period}</span>
                      </div>
                      <div className="timeline-company"><Briefcase size={14} /> {exp.company}</div>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-section animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2>Client Reviews <span className="text-secondary" style={{fontSize: '1rem', fontWeight: 400}}>({profile.reviews.length})</span></h2>
              <div className="reviews-list">
                {profile.reviews.map(review => (
                  <Card key={review.id} className="review-card" hoverEffect={false}>
                    <div className="review-header">
                      <div className="reviewer-info">
                        <strong>{review.agency}</strong>
                        <div className="verified-badge"><CheckCircle2 size={12} className="text-gradient" /> Verified Client</div>
                      </div>
                      <div className="review-date text-secondary text-sm">{review.date}</div>
                    </div>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} size={14} className={star <= review.rating ? "star-icon" : "star-empty text-secondary"} />
                      ))}
                    </div>
                    <p className="review-comment">"{review.comment}"</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;

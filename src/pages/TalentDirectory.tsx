import { useState } from 'react';
import { Search, Filter, Star, MapPin, Award } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './TalentDirectory.css';

// Mock Data
const MOCK_TALENT = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Senior React Developer',
    rate: '$85/hr',
    location: 'Remote (US)',
    rating: 4.9,
    reviews: 124,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    availability: 'Available Now',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    topRated: true
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Full Stack Engineer',
    rate: '$95/hr',
    location: 'Remote (Global)',
    rating: 4.8,
    reviews: 89,
    skills: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    availability: 'In 2 weeks',
    avatar: 'https://i.pravatar.cc/150?u=david',
    topRated: false
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'DevOps Specialist',
    rate: '$110/hr',
    location: 'Remote (EU)',
    rating: 5.0,
    reviews: 210,
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
    availability: 'Available Now',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    topRated: true
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'UI/UX Engineer',
    rate: '$75/hr',
    location: 'Remote (US)',
    rating: 4.7,
    reviews: 56,
    skills: ['Figma', 'React', 'CSS/SASS', 'Animation'],
    availability: 'Part-time',
    avatar: 'https://i.pravatar.cc/150?u=james',
    topRated: false
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Backend Architect',
    rate: '$120/hr',
    location: 'Remote (Global)',
    rating: 4.9,
    reviews: 178,
    skills: ['Go', 'Microservices', 'System Design', 'Kafka'],
    availability: 'Available Now',
    avatar: 'https://i.pravatar.cc/150?u=aisha',
    topRated: true
  },
  {
    id: 6,
    name: 'Marcus Johnson',
    role: 'Mobile Developer',
    rate: '$90/hr',
    location: 'Remote (US)',
    rating: 4.8,
    reviews: 112,
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
    availability: 'Next Month',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    topRated: false
  }
];

const TalentDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTalent = MOCK_TALENT.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="talent-directory">
      <div className="directory-header bg-pattern">
        <div className="container header-container">
          <h1 className="animate-fade-in">Find the Perfect <span className="text-gradient">IT Professional</span></h1>
          <p className="subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>Browse thousands of vetted freelancers ready to tackle your next big project.</p>
          
          <div className="search-bar-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="search-input-group glass">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search by role, skill, or name..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary" className="search-btn">Search</Button>
            </div>
            
            <div className="filter-actions">
              <Button variant="outline" className="filter-btn">
                <Filter size={16} /> Filters
              </Button>
              <div className="quick-filters">
                <span className="quick-filter active glass">All</span>
                <span className="quick-filter glass">Frontend</span>
                <span className="quick-filter glass">Backend</span>
                <span className="quick-filter glass">DevOps</span>
                <span className="quick-filter glass">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container directory-content">
        <div className="results-header">
          <h2>Showing {filteredTalent.length} professionals</h2>
          <select className="sort-select glass">
            <option>Recommended</option>
            <option>Highest Rated</option>
            <option>Lowest Rate</option>
            <option>Highest Rate</option>
          </select>
        </div>
        
        <div className="talent-grid">
          {filteredTalent.map((talent) => (
            <Card key={talent.id} className="talent-card">
              {talent.topRated && (
                <div className="top-rated-badge">
                  <Award size={14} /> Top Rated
                </div>
              )}
              
              <div className="talent-card-header">
                <img src={talent.avatar} alt={talent.name} className="talent-avatar" />
                <div className="talent-info">
                  <h3>{talent.name}</h3>
                  <p className="talent-role">{talent.role}</p>
                </div>
              </div>
              
              <div className="talent-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{talent.location}</span>
                </div>
                <div className="meta-item rating">
                  <Star size={16} className="star-icon" />
                  <span>{talent.rating} <strong>({talent.reviews})</strong></span>
                </div>
              </div>
              
              <div className="talent-skills">
                {talent.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <div className="talent-footer">
                <div className="talent-price">
                  <span className="rate">{talent.rate}</span>
                  <span className="availability text-gradient">{talent.availability}</span>
                </div>
                <Button variant="outline" className="view-profile-btn">View Profile</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentDirectory;

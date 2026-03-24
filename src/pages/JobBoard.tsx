import { useState } from 'react';
import { Search, Briefcase, DollarSign, Clock, Building, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import './JobBoard.css';

// Mock Data
const MOCK_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Developer for FinTech Dashboard',
    agency: 'FinTech Integrations LLC',
    type: 'Contract (6 months)',
    budget: '$80 - $110 / hr',
    posted: '2 hours ago',
    skills: ['React', 'TypeScript', 'Redux', 'TailwindCSS'],
    description: 'We are looking for an experienced frontend developer to lead the architecture and development of our new enterprise financial dashboard.',
    bids: 12
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Architect',
    agency: 'CloudScale Enterprises',
    type: 'Full-time',
    budget: '$140k - $180k / yr',
    posted: '5 hours ago',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'Python'],
    description: 'Seeking a seasoned cloud architect to securely migrate our legacy monolithic systems to a scalable microservices architecture on AWS.',
    bids: 8
  },
  {
    id: 3,
    title: 'Mobile App Developer (React Native)',
    agency: 'HealthSync Innovations',
    type: 'Contract (3 months)',
    budget: '$70 - $90 / hr',
    posted: '1 day ago',
    skills: ['React Native', 'iOS', 'Android', 'GraphQL'],
    description: 'Help us launch the V2 of our health tracking app. Needs deep knowledge of React Native animations and offline-first data synchronization.',
    bids: 24
  },
  {
    id: 4,
    title: 'Backend Node.js Engineer',
    agency: 'Nexus Streaming App',
    type: 'Contract to Hire',
    budget: '$90 - $120 / hr',
    posted: '2 days ago',
    skills: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
    description: 'Join our core platform team to optimize and scale our video streaming API that currently serves millions of daily active users.',
    bids: 5
  }
];

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isBidding, setIsBidding] = useState(false);

  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBidClick = (jobId: number) => {
    setSelectedJob(jobId);
    setIsBidding(true);
    // Scroll to top on mobile for bidding panel
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="job-board">
      <div className="board-header bg-pattern">
        <div className="container header-container text-center">
          <h1 className="animate-fade-in">Discover <span className="text-gradient">Premium IT Jobs</span></h1>
          <p className="subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Find your next big contract, bid on exclusive opportunities, and grow your freelance career.
          </p>
          
          <div className="search-bar-wrapper animate-fade-in" style={{ animationDelay: '0.2s', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
            <div className="search-input-group glass">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search jobs by title or skill..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary" className="search-btn">Find Jobs</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container board-content">
        <div className="jobs-layout">
          <div className="jobs-list">
            <div className="list-header">
              <h2>Recent Openings ({filteredJobs.length})</h2>
              <div className="sort-filter">
                <span className="text-secondary" style={{ marginRight: '0.5rem' }}>Sort by:</span>
                <select className="sort-select glass">
                  <option>Newest</option>
                  <option>Highest Budget</option>
                  <option>Fewest Bids</option>
                </select>
              </div>
            </div>

            <div className="jobs-grid">
              {filteredJobs.map((job) => (
                <Card 
                  key={job.id} 
                  className={`job-card ${selectedJob === job.id ? 'active-job' : ''}`}
                  hoverEffect={true}
                >
                  <div className="job-card-header">
                    <h3>{job.title}</h3>
                    <div className="job-agency">
                      <Building size={16} className="text-gradient" /> {job.agency}
                    </div>
                  </div>
                  
                  <div className="job-meta">
                    <div className="meta-tag glass">
                      <DollarSign size={14} className="text-gradient" /> {job.budget}
                    </div>
                    <div className="meta-tag glass">
                      <Briefcase size={14} className="text-gradient" /> {job.type}
                    </div>
                    <div className="meta-tag glass">
                      <Clock size={14} className="text-gradient" /> {job.posted}
                    </div>
                  </div>

                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-skills">
                    {job.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <div className="job-footer">
                    <span className="bids-count">
                      <strong className="text-gradient">{job.bids}</strong> freelancers bidding
                    </span>
                    <Button 
                      variant={selectedJob === job.id && isBidding ? "secondary" : "primary"} 
                      onClick={() => handleBidClick(job.id)}
                    >
                      {selectedJob === job.id && isBidding ? 'Bidding...' : 'Place Bid'} <ChevronRight size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bidding Sidebar/Modal substitute for demo */}
          {isBidding && selectedJob && (
            <div className="bidding-panel-container animate-fade-in" style={{ animationDuration: '0.3s' }}>
              <div className="bidding-panel glass">
                <div className="panel-header">
                  <h3>Submit Your Proposal</h3>
                  <p className="text-secondary panel-subtitle">You are bidding on: <br/><strong className="text-primary">{MOCK_JOBS.find(j => j.id === selectedJob)?.title}</strong></p>
                </div>
                
                <div className="form-group">
                  <label>Your Proposed Rate</label>
                  <input type="text" className="form-input glass" placeholder="e.g. $85 / hr" />
                </div>
                
                <div className="form-group">
                  <label>Cover Letter / Pitch</label>
                  <textarea 
                    className="form-input glass" 
                    rows={5} 
                    placeholder="Explain why you are the perfect fit for this IT project..."
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label>Estimated Completion</label>
                  <input type="text" className="form-input glass" placeholder="e.g. 3 months" />
                </div>
                
                <div className="panel-actions">
                  <Button variant="outline" onClick={() => setIsBidding(false)}>Cancel</Button>
                  <Button variant="primary" fullWidth onClick={() => {
                    alert('Bid submitted successfully! The agency will review your proposal.');
                    setIsBidding(false);
                  }}>Submit Bid</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;

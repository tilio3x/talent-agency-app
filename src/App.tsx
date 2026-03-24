import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder Pages - We will create these next
import Landing from './pages/Landing';
import TalentDirectory from './pages/TalentDirectory';
import JobBoard from './pages/JobBoard';
import FreelancerProfile from './pages/FreelancerProfile';

import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/talent" element={<TalentDirectory />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/profile/:id" element={<FreelancerProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

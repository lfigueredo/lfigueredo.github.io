import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import JoinUs from './pages/JoinUs';
import JoinUsOld from './pages/JoinUsOld';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/join-old" element={<JoinUsOld />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;

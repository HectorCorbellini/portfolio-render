import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Home/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';
import './index.css';
import { injectAnimations } from './utils/animations';

function App() {
  // Default language is set in i18n.ts, no need for state here

  useEffect(() => {
    // Update page title
    document.title = 'Héctor Corbellini | Java Developer Portfolio';
    // Inject animations
    const cleanupAnimations = injectAnimations();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = anchor.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      cleanupAnimations();
    };
  }, []);



  return (
    <div className="min-h-screen bg-white dark:bg-indigo-950 text-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
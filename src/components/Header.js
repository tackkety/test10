import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header
      setIsSticky(window.scrollY > 100);

      // Active section detection
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });

      // Close menu on scroll
      if (menuActive) {
        setMenuActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuActive]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuActive(false);
    }
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
        Afrirobot
      </a>

      <i 
        className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} 
        id="menu-icon"
        onClick={() => setMenuActive(!menuActive)}
      ></i>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
        <a 
          href="#services" 
          className={activeSection === 'services' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'services')}
        >
          Services
        </a>
        <a 
          href="#Testimonials" 
          className={activeSection === 'Testimonials' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'Testimonials')}
        >
          Testimonials
        </a>
        <a 
          href="#portfolio" 
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'portfolio')}
        >
          Portfolio
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;


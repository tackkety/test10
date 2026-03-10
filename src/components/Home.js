import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = ({ onOrderClick }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Graphic Design", "Video Editing", "Tech Dev", "Unlimited Service"],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <br />
        <h1>Design, Edit, Develop.<br /> Hire top talent today!</h1>
        <h3>Offering <span className="multiple-text" ref={typedRef}></span></h3>
        <p>with a simple package deal.</p>

        <div className="social-media">
          <a href="https://www.linkedin.com/company/afrirobot" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://www.instagram.com/afrirobot" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram-alt'></i>
          </a>
          <a href="https://www.youtube.com/@Afrirobot" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-youtube'></i>
          </a>
          <a href="https://x.com/Afrirobot1" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <a 
          href="#" 
          className="btn order-now-btn" 
          onClick={(e) => {
            e.preventDefault();
            onOrderClick();
          }}
        >
          Order Now
        </a>
      </div>
      <div className="home-img">
        <img src="logos/logo.avif" alt="Afrirobot Logo" />
      </div>
    </section>
  );
};

export default Home;


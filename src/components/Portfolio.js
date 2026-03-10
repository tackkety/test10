import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Portfolio = ({ onViewPortfolio }) => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.portfolio .heading', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-category-box', { origin: 'bottom' });
  }, []);

  const handleViewPortfolio = (e, category) => {
    e.preventDefault();
    onViewPortfolio(category);
  };

  const portfolioCategories = [
    {
      category: 'graphic-design',
      icon: 'bx bx-pencil',
      title: 'Graphic Design',
      description: 'View our creative design projects including social media graphics, thumbnails, and advertisements',
      previews: ['Logo Design', 'Thumbnails', 'Ad Designs']
    },
    {
      category: 'video-editing',
      icon: 'bx bx-video',
      title: 'Video Editing',
      description: 'Explore our video editing projects for short-form and long-form content',
      previews: ['Short Form', 'Long Form']
    },
    {
      category: 'tech-development',
      icon: 'bx bx-code-alt',
      title: 'Tech Development',
      description: 'Discover our development projects including web apps, mobile apps, AI, and security solutions',
      previews: ['Web Dev', 'Mobile Dev', 'AI Dev', 'Security Dev']
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Our <span>Portfolio</span></h2>
      
      <div className="portfolio-categories-container">
        {portfolioCategories.map((cat) => (
          <div key={cat.category} className="portfolio-category-box" data-category={cat.category}>
            <div className="category-icon">
              <i className={cat.icon}></i>
            </div>
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
            <div className="portfolio-preview">
              {cat.previews.map((preview, index) => (
                <div key={index} className="preview-item">
                  <span>{preview}</span>
                </div>
              ))}
            </div>
            <a 
              href="#" 
              className="btn view-portfolio-btn" 
              data-category={cat.category}
              onClick={(e) => handleViewPortfolio(e, cat.category)}
            >
              View {cat.title === 'Graphic Design' ? 'Design' : cat.title === 'Video Editing' ? 'Video' : 'Tech'} Portfolio
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


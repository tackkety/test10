import React, { useState, useEffect } from 'react';

const PortfolioShowcaseModal = ({ isOpen, onClose, onViewImage }) => {
  const [activeCategory, setActiveCategory] = useState('graphic-design');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleViewImage = (e, imageSrc, title, description) => {
    e.preventDefault();
    onViewImage(imageSrc, title, description);
  };

  if (!isOpen) return null;

  const graphicDesignItems = [
    {
      image: 'graphics design/logos design.avif',
      title: 'Logo Design',
      description: 'Creative logos designed to represent your brand identity',
      features: ['Custom Concepts', 'Brand Consistency']
    },
    {
      image: 'graphics design/thumbnail.avif',
      title: 'YouTube Thumbnails',
      description: 'High-click-through-rate thumbnail designs that drive views',
      features: ['High CTR', 'Engaging Visuals']
    },
    {
      image: 'graphics design/ads design.avif',
      title: 'Advertisement Designs',
      description: 'Professional ad creatives for digital marketing campaigns',
      features: ['Conversion Focused', 'Multi-Platform']
    }
  ];

  const videoEditingItems = [
    {
      image: 'video edit/short.avif',
      title: 'Short Form Videos',
      description: 'Engaging Reels, TikTok, and Shorts content with dynamic editing',
      features: ['Fast-paced Editing', 'Trend Integration'],
      videoUrl: 'https://youtu.be/5-OiY2m-uQM?si=sku9pNFWo8yzAcaB'
    },
    {
      image: 'video edit/long.avif',
      title: 'Long Form Videos',
      description: 'Detailed YouTube tutorials, documentaries, and presentations',
      features: ['Professional Narration', 'Detailed Content'],
      videoUrl: 'https://youtu.be/hjrQfO1XEek?si=AjIPYSApFMfsoXgd'
    }
  ];

  const techDevItems = [
    {
      image: 'tech dev/1.avif',
      title: 'E-Commerce Website',
      description: 'Full-featured online store with shopping cart and payment processing',
      features: ['Responsive Design', 'Payment Integration', 'Admin Dashboard'],
      link: '#'
    },
    {
      image: 'tech dev/2.avif',
      title: 'Fitness Tracker App',
      description: 'Mobile application for tracking workouts and nutrition',
      features: ['Cross-Platform', 'Workout Plans', 'Progress Tracking'],
      link: '#'
    },
    {
      image: 'tech dev/3.avif',
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating marketing content',
      features: ['Content Creation', 'SEO Optimization', 'Multi-language'],
      link: '#'
    },
    {
      image: 'tech dev/4.avif',
      title: 'Security Dashboard',
      description: 'Real-time security monitoring and threat detection system',
      features: ['Real-time Monitoring', 'Threat Detection', 'Automated Reports'],
      link: 'https://redhorn.vercel.app/'
    }
  ];

  return (
    <>
      <div className="modal-overlay active" onClick={onClose}></div>
      <div className="half-page-modal active" id="portfolioShowcaseModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Portfolio Showcase</h3>
            <span className="close-modal" id="closeShowcaseModal" onClick={onClose}>&times;</span>
          </div>
          
          <div className="modal-body">
            <div className="showcase-category-selector">
              <button
                className={`category-btn ${activeCategory === 'graphic-design' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('graphic-design')}
              >
                <i className='bx bx-pencil'></i>
                Graphic Design
              </button>
              <button
                className={`category-btn ${activeCategory === 'video-editing' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('video-editing')}
              >
                <i className='bx bx-video'></i>
                Video Editing
              </button>
              <button
                className={`category-btn ${activeCategory === 'tech-development' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('tech-development')}
              >
                <i className='bx bx-code-alt'></i>
                Tech Dev
              </button>
            </div>
            
            <div className="showcase-content">
              {/* Graphic Design Showcase */}
              {activeCategory === 'graphic-design' && (
                <div className="showcase-category active" id="graphic-design-showcase">
                  <div className="portfolio-category-info">
                    <i className='bx bx-pencil'></i>
                    <h4>Graphic Design Portfolio</h4>
                    <p>Creative visual designs that capture attention and communicate effectively</p>
                  </div>
                  
                  <div className="showcase-items">
                    {graphicDesignItems.map((item, index) => (
                      <div key={index} className="showcase-item">
                        <div className="item-preview">
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/300x200/0cf/000?text=${item.title.replace(/\s+/g, '+')}`;
                            }}
                          />
                          <div className="item-overlay">
                            <button
                              className="view-btn"
                              data-type="image"
                              onClick={(e) => handleViewImage(e, item.image, item.title, item.description)}
                            >
                              <i className='bx bx-zoom-in'></i> View Full Size
                            </button>
                          </div>
                        </div>
                        <div className="item-info">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <div className="item-features">
                            {item.features.map((feature, idx) => (
                              <span key={idx}>
                                <i className='bx bx-check'></i> {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Video Editing Showcase */}
              {activeCategory === 'video-editing' && (
                <div className="showcase-category active" id="video-editing-showcase">
                  <div className="portfolio-category-info">
                    <i className='bx bx-video'></i>
                    <h4>Video Editing Portfolio</h4>
                    <p>Professional video content that tells compelling stories and drives engagement</p>
                  </div>
                  
                  <div className="showcase-items">
                    {videoEditingItems.map((item, index) => (
                      <div key={index} className="showcase-item">
                        <div className="item-preview">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="video-thumbnail"
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/300x200/0cf/000?text=${item.title.replace(/\s+/g, '+')}`;
                            }}
                          />
                          <div className="item-overlay">
                            <a
                              href={item.videoUrl}
                              className="view-btn"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className='bx bx-play'></i> Watch Video
                            </a>
                          </div>
                        </div>
                        <div className="item-info">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <div className="item-features">
                            {item.features.map((feature, idx) => (
                              <span key={idx}>
                                <i className='bx bx-check'></i> {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tech Development Showcase */}
              {activeCategory === 'tech-development' && (
                <div className="showcase-category active" id="tech-development-showcase">
                  <div className="portfolio-category-info">
                    <i className='bx bx-code-alt'></i>
                    <h4>Tech Development Portfolio</h4>
                    <p>Live demos of our development projects. Click "View Live Demo" to see them in action.</p>
                  </div>
                  
                  <div className="showcase-items">
                    {techDevItems.map((item, index) => (
                      <div key={index} className="showcase-item">
                        <div className="item-preview">
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/300x200/0cf/000?text=${item.title.replace(/\s+/g, '+')}`;
                            }}
                          />
                          <div className="item-overlay">
                            <a
                              href={item.link}
                              className="view-btn"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className='bx bx-link-external'></i> View Live Demo
                            </a>
                          </div>
                        </div>
                        <div className="item-info">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <div className="item-features">
                            {item.features.map((feature, idx) => (
                              <span key={idx}>
                                <i className='bx bx-check'></i> {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioShowcaseModal;


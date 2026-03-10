import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { servicePricing } from '../config/servicePricing';

const Services = ({ onOrderClick }) => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.services .heading', { origin: 'top' });
    ScrollReveal().reveal('.services-box', { origin: 'bottom' });
  }, []);

  const services = [
    {
      key: 'graphic-design',
      icon: 'bx bx-pencil',
      title: 'Graphic Design',
      description: 'We design custom, creative graphic solutions that enhance your brand and deliver visuals that truly stand out.',
      features: ['Logo Design', 'Thumbnail Design', 'Ad Design'],
      price: 'From $15/design'
    },
    {
      key: 'video-editing',
      icon: 'bx bx-video',
      iconStyle: { color: '#0cf' },
      title: 'Video Editing',
      description: 'We create custom, dynamic video edits that elevate your brand and drive engagement. Experience visuals that truly stand out.',
      features: ['Short Form', 'Long Form'],
      price: 'From $25/video'
    },
    {
      key: 'tech-development',
      icon: 'bx bx-code-alt',
      title: 'Tech Dev',
      description: 'We create custom, innovative tech solutions that elevate your business. Experience technology that truly stands out.',
      features: ['Web Dev', 'Mobile Dev', 'AI Dev', 'Security Dev'],
      price: 'From $300/project'
    },
    {
      key: 'unlimited-service',
      icon: 'bx bx-infinite',
      title: 'Unlimited',
      description: 'Unlimited graphic design and video editing with flexible monthly or yearly subscription plans.',
      features: ['Graphics Desgin', 'Video Editing'],
      price: 'Subscription'
    }
  ];

  const handleOrderClick = (e, service) => {
    e.preventDefault();
    onOrderClick(service);
  };

  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.key} className="services-box">
            <i className={service.icon} style={service.iconStyle}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-features">
              {service.features.map((feature, index) => (
                <span key={index}>
                  <i className='bx bx-check'></i> {feature}
                </span>
              ))}
            </div>
            <div className="pricing-info">
              <span className="price-tag">{service.price}</span>
            </div>
            <a 
              href="#" 
              className="btn order-btn" 
              data-service={service.key}
              data-icon={service.icon}
              onClick={(e) => handleOrderClick(e, service.key)}
            >
              Order Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


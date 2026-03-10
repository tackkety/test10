import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const Testimonials = () => {
  const testimonialsSectionRef = useRef(null);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.testimonials .heading', { origin: 'top' });
    ScrollReveal().reveal('.testimonial-card', { origin: 'bottom', interval: 200 });
  }, []);

  const testimonials = [
    {
      quote: "Stunning graphics that perfectly captured our brand identity.",
      author: "Quasar Central",
      position: "Media Platform",
      profileImage: "logos/2.avif",
      initials: "KR"
    },
    {
      quote: "Communication was smooth, clear, and very professional",
      author: "Marvin G Kane",
      position: "Motivator",
      profileImage: "logos/9.avif",
      initials: "JF"
    },
    {
      quote: "Fast delivery without compromising on design quality",
      author: "George Rodriguez",
      position: "Washington Realtor",
      profileImage: "logos/3.avif",
      initials: "BO"
    },
    {
      quote: "Attention to detail made every project exceptional.",
      author: "Ariel Acosta",
      position: "Aspiring Actor",
      profileImage: "logos/12.avif",
      initials: "CC"
    },
    {
      quote: "Video edits were clean, engaging, and highly professional.",
      author: "Day Off DIY",
      position: "Mechanic,Content Creator",
      profileImage: "logos/5.avif",
      initials: "CC"
    },
    {
      quote: "Creative designs that truly stand out in the market.",
      author: "Mario Valencia",
      position: "Co Founder: Lume Energy",
      profileImage: "logos/6.avif",
      initials: "CC"
    }
  ];

  return (
    <section className="Testimonials" id="Testimonials" ref={testimonialsSectionRef}>
      <div className="testimonials_section">
        <div className="testimonials_head">
          <h2 className="heading">
          <center>Our <span>Testimonials</span></center>
        </h2>
        </div>

        <div className="testimonials_grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <i className='bx bxs-quote-alt-left'></i>
              </div>
              
              <div className="testimonial-profile">
                <div className="profile-image-container">
                  {testimonial.profileImage ? (
                    <img 
                      src={testimonial.profileImage} 
                      alt={testimonial.author}
                      className="profile-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="profile-initials" style={{ display: testimonial.profileImage ? 'none' : 'flex' }}>
                    {testimonial.initials}
                  </div>
                </div>
                <div className="profile-info">
                  <h4>{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
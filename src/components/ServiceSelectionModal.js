import React from 'react';
import { servicePricing } from '../config/servicePricing';

const ServiceSelectionModal = ({ isOpen, onClose, onSelectService }) => {
  if (!isOpen) return null;

  const services = [
    { key: 'graphic-design', icon: 'bx bx-pencil', name: 'Graphic Design', price: 'From $15/design' },
    { key: 'video-editing', icon: 'bx bx-video', name: 'Video Editing', price: 'From $25/video' },
    { key: 'tech-development', icon: 'bx bx-code-alt', name: 'Tech Development', price: 'From $300/project' },
    { key: 'unlimited-service', icon: 'bx bx-infinite', name: 'Unlimited Service', price: 'Monthly & Yearly Subscription' }
  ];

  const handleServiceClick = (serviceKey) => {
    onSelectService(serviceKey);
    onClose();
  };

  return (
    <>
      <div className="modal-overlay active" onClick={onClose}></div>
      <div className="service-selection-modal active" id="serviceSelectionModal">
        <div className="service-selection-content">
          <div className="service-selection-header">
            <h3>Choose a Service</h3>
            <span className="close-service-modal" onClick={onClose}>&times;</span>
          </div>
          <div className="service-options">
            {services.map((service) => (
              <div
                key={service.key}
                className="service-option"
                data-service={service.key}
                onClick={() => handleServiceClick(service.key)}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.name}</h4>
                <p>{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSelectionModal;


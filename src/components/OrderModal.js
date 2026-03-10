import React, { useState, useEffect } from 'react';
import { servicePricing } from '../config/servicePricing';

const OrderModal = ({ isOpen, onClose, selectedService }) => {
  const [currentService, setCurrentService] = useState(selectedService || null);
  const [selections, setSelections] = useState({});
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    driveLink: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (selectedService) {
        setCurrentService(selectedService);
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset form when closing
      setSelections({});
      setTotal(0);
      setFormData({ name: '', email: '', phone: '', details: '', driveLink: '' });
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, selectedService]);

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

  useEffect(() => {
    updateOrderSummary();
  }, [selections, currentService]);

  const updateOrderSummary = () => {
    let newTotal = 0;

    if (!currentService || !servicePricing[currentService]) {
      setTotal(0);
      return;
    }

    const service = servicePricing[currentService];

    if (currentService === 'graphic-design' || currentService === 'video-editing') {
      if (selections.designType && selections.packageType) {
        const option = service.options[selections.designType];
        if (selections.packageType === 'single') {
          const quantity = selections.quantity || 1;
          newTotal = option.single * quantity;
        } else {
          newTotal = option.package;
        }
      }
    } else if (currentService === 'tech-development' || currentService === 'unlimited-service') {
      if (selections.devType && selections.tier) {
        newTotal = selections.tier.price;
      }
    }

    setTotal(newTotal);
  };

  const handleDesignTypeSelect = (type) => {
    setSelections(prev => ({
      ...prev,
      designType: type,
      packageType: null,
      quantity: 1
    }));
  };

  const handlePackageSelect = (packageType) => {
    setSelections(prev => ({
      ...prev,
      packageType
    }));
  };

  const handleQuantityChange = (e) => {
    setSelections(prev => ({
      ...prev,
      quantity: parseInt(e.target.value) || 1
    }));
  };

  const handleDevTypeSelect = (type) => {
    setSelections(prev => ({
      ...prev,
      devType: type,
      tier: null
    }));
  };

  const handleTierSelect = (tier) => {
    setSelections(prev => ({
      ...prev,
      tier
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (total === 0) {
      alert('Please select service options before submitting your order.');
      return;
    }

    setIsSubmitting(true);

    const service = servicePricing[currentService];
    let orderType = '';
    let packageInfo = '';

    if (selections.designType) {
      const typeName = service.options[selections.designType].name;
      orderType = typeName;
      packageInfo = selections.packageType === 'single' 
        ? `Single Item (Qty: ${selections.quantity || 1})` 
        : 'Bundle Package';
    } else if (selections.devType) {
      const typeName = service.options[selections.devType].name;
      orderType = typeName;
      packageInfo = `Tier: ${selections.tier.name}`;
    }

    const submitData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      details: formData.details,
      drivelink: formData.driveLink,
      service: service.name,
      total: `$${total}`,
      ordertype: orderType,
      packageinfo: packageInfo
    };

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqZYhuQxv9IwViPBLZjVninKD6sD8kS1e6j2vzFM7SkWZP5hZAJd6tBhw9yxcL3Xn2/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      alert(`Thank you, ${formData.name}! Your order has been received.\n\nService: ${service.name}\nTotal: $${total}\n\nWe will contact you at ${formData.email} or ${formData.phone} shortly.`);
      onClose();
      setFormData({ name: '', email: '', phone: '', details: '', driveLink: '' });
      setSelections({});
      setTotal(0);
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an issue submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const service = currentService ? servicePricing[currentService] : null;

  return (
    <>
      <div className="modal-overlay active" onClick={onClose}></div>
      <div className="half-page-modal active" id="halfPageModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Place Your Order</h3>
            <span className="close-modal" onClick={onClose}>&times;</span>
          </div>
          <div className="modal-body">
            {service && (
              <>
                <div className="service-info">
                  <i className={service.icon} id="modalIcon"></i>
                  <h4 id="modalTitle">{service.name}</h4>
                  <p id="modalDescription">{service.description}</p>
                </div>
                
                <div className="service-selection" id="serviceSelection">
                  {(currentService === 'graphic-design' || currentService === 'video-editing') ? (
                    <>
                      <div className="service-option-group">
                        <h5><i className='bx bx-category'></i> Select Design Type</h5>
                        <div className="option-buttons" id="designTypeButtons">
                          {Object.entries(service.options).map(([key, option]) => (
                            <button
                              key={key}
                              className={`option-btn ${selections.designType === key ? 'active' : ''}`}
                              onClick={() => handleDesignTypeSelect(key)}
                            >
                              {option.name}
                              {option.description && <br />}
                              {option.description && <small>{option.description}</small>}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {selections.designType && (
                        <div className="service-option-group" id="packageSelection" style={{ display: 'block' }}>
                          <h5><i className='bx bx-package'></i> Choose Package</h5>
                          <div className="package-options">
                            <div
                              className={`package-option ${selections.packageType === 'single' ? 'active' : ''}`}
                              onClick={() => handlePackageSelect('single')}
                            >
                              <h6>Single Design</h6>
                              <div className="price">${service.options[selections.designType].single}</div>
                              <h4>Per/Project</h4>
                            </div>
                            <div
                              className={`package-option ${selections.packageType === 'bundle' ? 'active' : ''}`}
                              onClick={() => handlePackageSelect('bundle')}
                            >
                              <h6>Bundle Package</h6>
                              <div className="price">${service.options[selections.designType].package}</div>
                              <div className="savings">
                                Save ${(service.options[selections.designType].single * service.options[selections.designType].packageCount) - service.options[selections.designType].package}
                              </div>
                              <h4>15 Project</h4>
                            </div>
                          </div>
                          {selections.packageType === 'single' && (
                            <div className="quantity-selector" id="quantitySelector" style={{ display: 'flex' }}>
                              <label htmlFor="quantity">Quantity:</label>
                              <input
                                type="number"
                                id="quantity"
                                className="quantity-input"
                                min="1"
                                value={selections.quantity || 1}
                                onChange={handleQuantityChange}
                                max="50"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (currentService === 'tech-development' || currentService === 'unlimited-service') ? (
                    <>
                      <div className="service-option-group">
                        <h5>
                          <i className='bx bx-category'></i>{' '}
                          {currentService === 'unlimited-service' ? 'Select Plan Type' : 'Select Development Type'}
                        </h5>
                        <div className="option-buttons" id="devTypeButtons">
                          {Object.entries(service.options).map(([key, option]) => (
                            <button
                              key={key}
                              className={`option-btn ${selections.devType === key ? 'active' : ''}`}
                              onClick={() => handleDevTypeSelect(key)}
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {selections.devType && (
                        <div className="service-option-group" id="tierSelection" style={{ display: 'block' }}>
                          <h5><i className='bx bx-stats'></i> Select Tier</h5>
                          <div className="package-options">
                            {service.options[selections.devType].tiers.map((tier, index) => (
                              <div
                                key={index}
                                className={`package-option ${selections.tier?.name === tier.name ? 'active' : ''}`}
                                onClick={() => handleTierSelect(tier)}
                              >
                                <h6>{tier.name}</h6>
                                <div className="price">${tier.price}</div>
                                <small>{tier.description}</small>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : null}
                </div>

                <div className="order-summary" id="orderSummary">
                  <h4>Order Summary</h4>
                  <div className="summary-items" id="summaryItems">
                    {total > 0 && (
                      <>
                        {selections.designType && selections.packageType ? (
                          <>
                            {selections.packageType === 'single' ? (
                              <div className="summary-item">
                                <div className="item-details">
                                  {service.options[selections.designType].name} (Single) × {selections.quantity || 1}
                                </div>
                                <div className="item-price">${total}</div>
                              </div>
                            ) : (
                              <>
                                <div className="summary-item">
                                  <div className="item-details">
                                    {service.options[selections.designType].name} Bundle ({service.options[selections.designType].packageCount} items)
                                  </div>
                                  <div className="item-price">${service.options[selections.designType].package}</div>
                                </div>
                                <div className="summary-item">
                                  <div className="item-details" style={{ color: '#4CAF50', fontStyle: 'italic' }}>
                                    You save ${(service.options[selections.designType].single * service.options[selections.designType].packageCount) - service.options[selections.designType].package}
                                  </div>
                                  <div className="item-price" style={{ color: '#4CAF50' }}>
                                    -${(service.options[selections.designType].single * service.options[selections.designType].packageCount) - service.options[selections.designType].package}
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        ) : selections.devType && selections.tier ? (
                          <div className="summary-item">
                            <div className="item-details">
                              {service.options[selections.devType].name} - {selections.tier.name}
                            </div>
                            <div className="item-price">${selections.tier.price}</div>
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>
                  <div className="total-price">
                    <strong>Total: $<span id="totalAmount">{total}</span></strong>
                  </div>
                </div>

                <form className="order-form" id="orderForm" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="orderName"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="orderEmail"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      id="orderPhone"
                      placeholder="your whatsApp phone number"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="details"
                      id="orderDetails"
                      placeholder="Project Details & Requirements"
                      rows="3"
                      value={formData.details}
                      onChange={handleFormChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group" style={{ marginTop: '5px' }}>
                    <label htmlFor="driveLink" style={{ fontSize: '1.3rem', color: '#0cf', marginBottom: '5px', display: 'block' }}>
                      <i className='bx bxl-google-cloud'></i> Upload assets to Drive & paste link here:
                    </label>
                    <input
                      type="url"
                      name="driveLink"
                      id="driveLink"
                      placeholder="https://drive.google.com/..."
                      style={{ width: '100%' }}
                      value={formData.driveLink}
                      onChange={handleFormChange}
                    />
                  </div>
                  <button type="submit" className="submit-order-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing Order...' : 'Submit Order Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;


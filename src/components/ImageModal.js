import React, { useEffect } from 'react';

const ImageModal = ({ isOpen, onClose, image }) => {
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

  if (!isOpen || !image) return null;

  return (
    <div className="image-modal active" id="imageModal" onClick={(e) => {
      if (e.target.id === 'imageModal') {
        onClose();
      }
    }}>
      <div className="image-modal-content">
        <span className="close-image-modal" onClick={onClose}>&times;</span>
        <img id="fullSizeImage" src={image.src} alt={image.title} />
        <div className="image-info">
          <h4 id="imageTitle">{image.title}</h4>
          <p id="imageDescription">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;


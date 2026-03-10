import React, { useState } from 'react';
import Header from './components/Header';
import BackgroundAnimation from './components/BackgroundAnimation';
import BlurOverlay from './components/BlurOverlay';
import Home from './components/Home';
import Tools from './components/Tools';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import PortfolioShowcaseModal from './components/PortfolioShowcaseModal';
import ImageModal from './components/ImageModal';
import ServiceSelectionModal from './components/ServiceSelectionModal';

function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [serviceSelectionModalOpen, setServiceSelectionModalOpen] = useState(false);

  const handleOpenOrderModal = (service) => {
    if (!service) {
      // If no service specified, show service selection modal
      setServiceSelectionModalOpen(true);
    } else {
      setSelectedService(service);
      setOrderModalOpen(true);
    }
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedService(null);
  };

  const handleOpenPortfolioModal = () => {
    setPortfolioModalOpen(true);
  };

  const handleClosePortfolioModal = () => {
    setPortfolioModalOpen(false);
  };

  const handleOpenImageModal = (imageSrc, title, description) => {
    setSelectedImage({ src: imageSrc, title, description });
    setImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <BlurOverlay />
      <BackgroundAnimation />
      <Header />
      <Home onOrderClick={() => handleOpenOrderModal(null)} />
      <Tools />
      <About />
      <Services onOrderClick={handleOpenOrderModal} />
      <Testimonials />
      <Portfolio onViewPortfolio={handleOpenPortfolioModal} />
      <Contact />
      <Footer />
      
      <OrderModal 
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        selectedService={selectedService}
      />
      
      <PortfolioShowcaseModal 
        isOpen={portfolioModalOpen}
        onClose={handleClosePortfolioModal}
        onViewImage={handleOpenImageModal}
      />
      
      <ImageModal 
        isOpen={imageModalOpen}
        onClose={handleCloseImageModal}
        image={selectedImage}
      />

      <ServiceSelectionModal
        isOpen={serviceSelectionModalOpen}
        onClose={() => setServiceSelectionModalOpen(false)}
        onSelectService={handleSelectService}
      />
    </div>
  );
}

export default App;


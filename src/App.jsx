import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Phone, Mail, MessageSquare } from 'lucide-react';

const Slide1 = ({ isActive }) => (
  <div className="slide slide-1">
    <div className={`badge-open ${isActive ? 'animate-scale-in' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <Sparkles size={16} /> NOW OPEN
    </div>
    
    <h1 className={`heading-main slide-1-title ${isActive ? 'animate-fade-up delay-100' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      Welcome to <br />
      <span className="slide-1-highlight">Authentic<br />Mithila<br />Cuisine</span><br />
      Cafe & Restro
    </h1>
    
    <p className={`text-body slide-1-desc ${isActive ? 'animate-fade-up delay-200' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      A taste of Mithila — slow-cooked traditions, fragrant spices, and warm hospitality.
    </p>
    
    <div className={`location-btn ${isActive ? 'animate-bounce-up delay-300' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <MapPin size={24} color="#facc15" />
      <div>
        Behrampur, Vijay Nagar,<br />
        Ghaziabad
      </div>
    </div>
  </div>
);

const Slide2 = ({ isActive }) => (
  <div className="slide slide-2">
    <h1 className={`heading-main ${isActive ? 'animate-fade-up' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <span className="slide-2-title-1">Thekua &</span><br />
      <span className="slide-2-title-2">Makhana<br />Snacks</span>
    </h1>
    
    <p className={`text-body slide-2-desc ${isActive ? 'animate-fade-up delay-100' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      Hand-crafted using time-honored Mithila recipes — crisp Thekua kissed with jaggery and roasted Makhana in irresistible flavors.
    </p>

    <ul className={`bullet-list ${isActive ? 'animate-fade-up delay-200' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <li>Traditional jaggery Thekua</li>
      <li>Roasted & flavored Makhana</li>
      <li>Fresh, no preservatives</li>
    </ul>
    
    <div className={`bento-cards ${isActive ? 'animate-scale-in delay-300' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <div className="bento-card card-yellow">
        <div className="card-label">Bestseller</div>
        <div className="card-title">Thekua</div>
        <div className="card-features">
          Crisp &middot;<br />
          Jaggery &middot;<br />
          Ghee
        </div>
      </div>
      
      <div className="bento-card card-red">
        <div className="card-label">Healthy</div>
        <div className="card-title">Makhana</div>
        <div className="card-features">
          Roasted &middot;<br />
          Spiced &middot;<br />
          Light
        </div>
      </div>
    </div>
  </div>
);

const Slide3 = ({ isActive }) => (
  <div className="slide slide-3">
    <h1 className={`heading-main ${isActive ? 'animate-fade-up' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <span className="slide-3-title-1">Get a Frenchie</span><br />
      <span className="slide-3-title-2">Business<br />Free of Cost</span>
    </h1>
    
    <p className={`text-body slide-3-desc ${isActive ? 'animate-fade-up delay-100' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      Start your own Frenchie outlet with zero franchise fee. We provide the brand, the recipes and the support — you bring the passion.
    </p>
    
    <div className="feature-cards">
      <div className={`feature-card ${isActive ? 'animate-bounce-up delay-200' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
        <div className="feature-val">₹0</div>
        <div className="feature-label">Franchise Fee</div>
      </div>
      
      <div className={`feature-card ${isActive ? 'animate-bounce-up delay-300' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
        <div className="feature-val">100%</div>
        <div className="feature-label">Brand Support</div>
      </div>
      
      <div className={`feature-card ${isActive ? 'animate-bounce-up delay-400' : ''}`} style={{ marginBottom: '-1rem', paddingBottom: '3rem', opacity: isActive ? undefined : 0 }}>
        <div className="feature-val">Quick</div>
        <div className="feature-label">Setup</div>
      </div>
    </div>
  </div>
);

const Slide4 = ({ isActive }) => (
  <div className="slide slide-4">
    <div className={`connect-badge ${isActive ? 'animate-scale-in' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
      <MessageSquare size={16} /> LET'S CONNECT
    </div>
    
    <h1 className={`heading-main ${isActive ? 'animate-fade-up delay-100' : ''}`} style={{ textAlign: 'center', opacity: isActive ? undefined : 0 }}>
      <span style={{ color: '#8b1b1b' }}>Contact for</span><br />
      <span style={{ color: '#d96214' }}>Other Business</span>
    </h1>
    
    <p className={`text-body ${isActive ? 'animate-fade-up delay-200' : ''}`} style={{ textAlign: 'center', color: '#5a4b41', padding: '0 1rem', opacity: isActive ? undefined : 0 }}>
      Catering, bulk orders, partnerships or franchise inquiries — we'd love to talk.
    </p>
    
    <div className="contact-cards">
      <div className={`contact-card ${isActive ? 'animate-bounce-up delay-300' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
        <div className="contact-icon icon-red">
          <Phone size={24} />
        </div>
        <div className="contact-info">
          <div className="contact-label">CALL US</div>
          <div className="contact-value">+91 98999 17041</div>
        </div>
      </div>
      
      <div className={`contact-card ${isActive ? 'animate-bounce-up delay-400' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
        <div className="contact-icon icon-orange">
          <Mail size={24} />
        </div>
        <div className="contact-info">
          <div className="contact-label">EMAIL</div>
          <div className="contact-value" style={{ fontSize: '1rem' }}>sales@mithilacafe.in</div>
        </div>
      </div>
      
      <div className={`contact-card ${isActive ? 'animate-bounce-up delay-500' : ''}`} style={{ opacity: isActive ? undefined : 0 }}>
        <div className="contact-icon icon-red">
          <MapPin size={24} />
        </div>
        <div className="contact-info">
          <div className="contact-label">VISIT</div>
          <div className="contact-value" style={{ fontSize: '1rem', lineHeight: 1.3 }}>
            Behrampur, Vijay Nagar,<br />
            Ghaziabad
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  
  // Slide configs for dynamic header colors
  const slideConfigs = [
    { titleColor: '#4dd0e1', counterColor: '#ffffff', dotClass: 'light' }, // Slide 1
    { titleColor: '#3a2215', counterColor: '#3a2215', dotClass: 'dark' },  // Slide 2
    { titleColor: '#4dd0e1', counterColor: '#ffffff', dotClass: 'light' }, // Slide 3
    { titleColor: '#3a2215', counterColor: '#3a2215', dotClass: 'dark' }   // Slide 4
  ];
  
  const currentConfig = slideConfigs[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  // Simple swipe detection
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchStartX.current - touchEndX.current > swipeThreshold) {
      handleNext(); // Swipe left
    }
    if (touchEndX.current - touchStartX.current > swipeThreshold) {
      handlePrev(); // Swipe right
    }
  };

  return (
    <div className="app-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {/* Dynamic Header Overlay */}
      <div className="header-overlay">
        <div className="header-title" style={{ color: currentConfig.titleColor, transition: 'color 0.5s' }}>
          AUTHENTIC MITHILA CAFE
        </div>
        <div className="header-counter" style={{ color: currentConfig.counterColor, transition: 'color 0.5s' }}>
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button className="nav-arrow nav-arrow-left" onClick={handlePrev} aria-label="Previous Slide">
          <ChevronLeft size={24} />
        </button>
      )}
      
      {currentSlide < totalSlides - 1 && (
        <button className="nav-arrow nav-arrow-right" onClick={handleNext} aria-label="Next Slide">
          <ChevronRight size={24} />
        </button>
      )}

      {/* Slides Wrapper */}
      <div 
        className="slides-wrapper" 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Slide1 isActive={currentSlide === 0} />
        <Slide2 isActive={currentSlide === 1} />
        <Slide3 isActive={currentSlide === 2} />
        <Slide4 isActive={currentSlide === 3} />
      </div>

      {/* Pagination Indicators */}
      <div className="pagination-container">
        <div className="pagination-pill">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index} 
              className={`dot ${currentConfig.dotClass} ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

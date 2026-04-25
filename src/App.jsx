import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Phone, Mail, MessageSquare, User, Home } from 'lucide-react';
import { supabase } from './supabaseClient';

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

const AuthPage = ({ setCurrentView }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setMessage('Successfully signed in!');
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              phone: phone,
            }
          }
        });
        if (error) throw error;
        
        // Attempt to insert into a public users table
        if (data.user && fullName) {
          const { error: insertError } = await supabase
            .from('users')
            .insert([{ id: data.user.id, full_name: fullName, email: email, phone: phone }]);
            
          if (insertError) {
             console.error('Error inserting into public users table:', insertError);
          }
        }
        
        setMessage('Registration successful! Redirecting to home...');
        setTimeout(() => {
          setCurrentView('home');
        }, 1500);
      }
    } catch (err) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="auth-subtitle">
          {isLogin ? 'Sign in to access your Mithila Cafe account' : 'Join us to enjoy authentic flavors'}
        </p>

        {error && <div style={{ color: '#d93025', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '500' }}>{error}</div>}
        {message && <div style={{ color: '#188038', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '500' }}>{message}</div>}

        <form className="auth-form" onSubmit={handleAuth}>
          {!isLogin && (
            <>
              <div className="input-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={!isLogin}
                />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 9876543210" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </>
          )}
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        <div className="auth-toggle">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setMessage('');
            }} 
            className="toggle-btn"
            type="button"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ currentView, setCurrentView }) => {
  return (
    <nav className="main-nav">
      <div className="nav-brand">
        AUTHENTIC MITHILA CAFE
      </div>
      <div className="nav-links">
        <button
          className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentView('home')}
        >
          <Home size={20} />
          <span className="nav-label">Home</span>
        </button>
        <button
          className={`nav-item ${currentView === 'auth' ? 'active' : ''}`}
          onClick={() => setCurrentView('auth')}
        >
          <User size={20} />
          <span className="nav-label">Sign In</span>
        </button>
      </div>
    </nav>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');
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
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === 'home' ? (
        <>
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
        </>
      ) : (
        <AuthPage setCurrentView={setCurrentView} />
      )}
    </div>
  );
}

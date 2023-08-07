import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';

function HeroBanner({ token }) {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="wrap">
          <div className="row">
            <div className="col-12">
              {/* <p className="fw-400" data-aos="fade-up">Here comes the new <span
                className="color-primary fw-bold d-inline-block">Connct</span></p> */}
              <h1 className="text-black" data-aos="fade-up" data-aos-delay="100" style={{fontFamily: "'Poppins', sans-serif",fontWeight:'600',fontSize:'51px'}}>The most powerful business card you will<br/> ever
                own!</h1>
              <div className="tagline">
                <span className="color-primary fw-500 d-inline-block pb-3" data-aos="fade-up"
                  data-aos-delay="100" style={{fontWeight:'600',fontSize:'29px',color:'#04459d'}}>Paperless<strong>.</strong></span>&nbsp;
                <span className="color-secondary fw-500 d-inline-block pb-3" data-aos="fade-up"
                  data-aos-delay="200"style={{fontWeight:'600',fontSize:'29px',color:'#f9d572'}}>Seamless<strong>.</strong></span>&nbsp;
                <span className="fw-500 d-inline-block pb-3" data-aos="fade-up"
                  data-aos-delay="250"style={{fontWeight:'600',fontSize:'29px'}}>Timeless<strong>.</strong></span>
              </div>
              <div>
      <button>
       
        Click to Connect
        <span className="handshake-emoji">🤝</span>
      </button>
      <img
      src={require('../assets/images/header-img1.png')}
      alt="Logo23"
    />
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;

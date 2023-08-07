import React from 'react';
import './Home9.css';

const Home9 = () => {
  return (
    <section className="section user-types">
      <div className="container slider-section1">
        <div className="row">
          <div className="col-md-2" style={{ marginTop: '-120px' }}>
          <img
  src={require('../assets/images/bottom-curved-image.png')}
  className="img-fluid first-img"
  alt="Curved bottom design element"
  
/>

          </div>
          <div className="col-md-10">
            <div className="row left-img">
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="img-block"style={{ marginTop: '-90px' }}>
                
                  <img
              src={require('../assets/images/professionals.png')}
              className="img-fluid"
              alt="The modern professional’s choice of sharing information"
            />
                  <div className="img-caption">The modern professional’s choice of sharing information</div>
                </div>
                <h6>.Professionals</h6>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="150">
                <div className="img-block"style={{ marginTop: '-90px' }}>
                 
                  <img
              src={require('../assets/images/freelancer.png')}
              className="img-fluid"
              alt="Share your portfolio, social links & more with your potential clients"
            />
                  <div className="img-caption">Share your portfolio, social links & more with your potential clients</div>
                </div>
                <h6>.Freelancer</h6>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block" style={{ marginTop: '-90px' }}>
                
                  <img
              src={require('../assets/images/events.jpg')}
              className="img-fluid"
              alt="Extract the full potential of networking at your event with the ultimate digital visiting card"
            />
                  <div className="img-caption">Extract the full potential of networking at your event with the ultimate digital visiting card.</div>
                </div>
                <h6>.Events</h6>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block">
                  
                  <img
              src={require('../assets/images/founders.jpg')}
              className="img-fluid"
              alt="Share all your business information with your potential clients, investors & all the stakeholders"
            />
                  <div className="img-caption">Share all your business information with your potential clients, investors & all the stakeholders.</div>
                </div>
                <h6>.Founders</h6>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block">
            
                  <img
              src={require('../assets/images/content-creators.jpg')}
              className="img-fluid"
              alt="Showcase your social links & your proof of work and score potential brand deals" 
            />
                  <div className="img-caption">Showcase your social links & your proof of work and score potential brand deals.</div>
                </div>
                <h6>.Content Creators</h6>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block">
                  
                  <img
              src={require('../assets/images/retail.jpg')}
              className="img-fluid"
              alt="Share your business info with all your walk-ins with Connct NFC card" 
            />
                  <div className="img-caption">Share your business info with all your walk-ins with Connct NFC card.</div>
                </div>
                <h6>.Retail</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home9;

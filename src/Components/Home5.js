import React from 'react'
import './Home1.css';

const Home5 = () => {
  return (
    <section className="mt-4 section">
      <div className="container">
        <div className="row profile-details">
          <div className="align-center">
            <div className="mx-auto">
              <h2 data-aos="fade-up">Share-Ready Profile within seconds</h2>
              <div data-aos="fade-up" data-aos-delay="100">
                   <img
        src={require('../assets/images/share-ready.gif')}
        className="img-fluid image-lg mx-auto d-block"
        width="45%"
        alt="Share-Ready Profile"
  
      />
              </div>
              <h6 data-aos="fade-up" className="pt-2">
                <a href="#/upgrade-to-pro">Upgrade</a> to the pro version for the ultimate experience with Connct pro.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home5
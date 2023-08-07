import React from 'react';
import './Home1.css';

const Home6 = () => {
  return (
    <section className="section bg-blue">
      <div className="container mt-4">
        <div className="row document-sec-4">

          <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay="100">
            <img
              src={require('../assets/images/track-con.gif')}
              className="img-fluid image-lg mx-auto d-block"
              alt="Connection Tracker"
            />
          </div>
          <div className="col-md-6" data-aos="fade-up" style={{ marginTop: '110px' ,textAlign:'left'}}>
            <div>
              <h2 data-aos="fade-up" className="color-primary">Track your connections in real-time</h2>
              <h5 data-aos="fade-up">Real-time auto-saving ensures you never lose anyone you connect with.</h5>
              <ul className="circle-bullet text-left">
                <li data-aos="fade-up">&#10003; Track your customers</li>
                <li data-aos="fade-up">&#10003; Connect with prospects anytime</li>
                <li data-aos="fade-up">&#10003; Download &amp; Integrate to CRM for conversion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home6;

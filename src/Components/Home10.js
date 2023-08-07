import React from 'react';
import './Home10.css'; // Make sure to import your CSS file

const Home10 = () => {
  return (
    <section className="section bg-black">
      <div className="container slider-section2">
        <div className="text-len" data-aos="fade-up">
          <h2 style={{textAlign:'left'}}>Let’s hear what people say</h2>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="100">

            <img
              src={require('../assets/images/client-testmonial.jpg')}
              alt="Client Testimonial"
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <h5 style={{textAlign:'left'}}>Great Design & Solution!</h5>
            <p style={{textAlign:'left'}}>Easy to use and the best way to share your information with your potential client. It has worked great when I had to share information with them</p>
            <div className="row bottom-part">
              <div className="col-sm-2">
                <img
              src={require('../assets/images/testi-user-pic.png')}
              className="img-fluid mx-auto d-block"
             alt="User"
            />
              </div>
              <div className="col-sm-10" style={{textAlign:'left'}}>
                <h5>Emad</h5>
                <p className="small">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home10;

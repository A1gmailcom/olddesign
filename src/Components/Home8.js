import React from 'react';
import './Home8.css';

const Home8 = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row qr-section">
          <div className="col-md-7 align-center" data-aos="fade-up">
            <div style={{textAlign:'left'}}>
              <h2 className="fw-bold"> Share your profile with a link</h2>
              <ul className="circle-bullet">
                <li data-aos="fade-up">Update your email signature with the your custom URL</li>
                <li data-aos="fade-up">Share with anyone as a text</li>
                <li data-aos="fade-up">Add on your website</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 text-center" data-aos="fade-up" data-aos-delay="100">
            <img
              className="img-fluid image-sm mx-auto d-block"
              src={require("../assets/images/share-your-profile-with-a-link.png")}
              alt="Share your profile with a link"
            />
          </div>
        </div>

        <div className="row qr-section">
          <div className="col-md-5 text-center" data-aos="fade-up" data-aos-delay="100">
            <img
              className="img-fluid image-sm mx-auto d-block"
              alt="Share your profile with QR code"
              src={require("../assets/images/qr-scan.gif")}
              style={{height:'380px'}}
            />
          </div>
          <div className="col-md-7 align-center" data-aos="fade-up">
            <div style={{textAlign:'left'}}>
              <h2 className="fw-bold">Share your profile with QR code</h2>
              <ul className="circle-bullet">
                <li data-aos="fade-up">For older phones without NFC share your profile with QR</li>
                <li data-aos="fade-up">Add in zoom meeting background</li>
                <li data-aos="fade-up">Download & Display anywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home8;

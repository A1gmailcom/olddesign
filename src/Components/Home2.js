import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faAddressCard, faLink } from '@fortawesome/free-solid-svg-icons';

const Home2 = () => {
  return (
    <section className="section bg-blue" style={{marginTop:'80px'}}>
      <div className="container feature-list mt-0">
        <div className="row">
          <div className="col-md-6 align-center">
            <div>
              <h2 className="color-primary" style={{textAlign:'left',color:'#04459d',fontFamily: "'Poppins', sans-serif",fontWeight:'600',fontSize:'33px'}}>Share all your contact details & more<br/> in three easy steps: </h2><br/>
              <div className="row">
                <div className="col-12">
                <div className="step" style={{ display: 'flex', alignItems: 'center' }}>
  <div className="step-icon">
    <FontAwesomeIcon icon={faMobile} />
  </div>
  <div className="step-content" style={{ textAlign: 'left', marginLeft: '20px' }}>
  <h6 style={{marginTop:'20px',fontWeight:'500',fontSize:'24px'}}>Download the app</h6>
  <p className="mb-0" style={{color:'grey',fontSize:'17px',fontWeight:'400'}}>Android, ios, we are everywhere!</p>
  <div className="download-app" style={{marginTop:'10px'}}>
    <a href="https://apps.apple.com/app/connct-app/id1625064091" target="_blank" rel="noopener noreferrer">
      <img
        src={require('../assets/images/appingstore.png')}
        className="img-fluid"
        width="120"
        alt="App Store"
        style={{marginRight:'10px'}}
      />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.connct.waves_app" target="_blank" rel="noopener noreferrer">
      <img
        src={require('../assets/images/playingstore.png')}
        className="img-fluid"
        width="120"
        alt="Play Store"
      />
    </a>
  </div>
</div>

</div>
<br/>

<div className="step" data-aos="fade-up" data-aos-delay="100" style={{ display: 'flex', alignItems: 'center' }}>
  <div className="step-icon">
    <FontAwesomeIcon icon={faAddressCard} />
  </div>
  <div className="step-content" style={{ textAlign: 'left', marginLeft: '20px' }}>
    <h6 style={{fontSize:'24px',fontWeight:'500'}}>Create your profile </h6>
    <p>Showcase your business by adding your contact details, social media & other important business info.</p>
  </div>
</div>
<br/>

<div className="step" data-aos="fade-up" data-aos-delay="150" style={{ display: 'flex', alignItems: 'center' }}>
  <div className="step-icon">
    <FontAwesomeIcon icon={faLink} />
  </div>
  <div className="step-content" style={{ textAlign: 'left', marginLeft: '20px' }}>
    <h6 style={{fontSize:'24px',fontWeight:'500'}}>Link your profile to the digital business card </h6>
    <p>Connect your profile with the ultimate digital business card & be one-tap ready </p>
  </div>
</div>


                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 sec-2 contact-gif" data-aos="fade-up" data-aos-delay="100" >
            <img
      src={require('../assets/images/share-contact.gif')}
      className="d-block mx-auto img-fluid"
      alt="Contact GIF"
      style={{height:'700px',marginTop:'-40px'}}
    />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;

import React, { useState } from 'react';
import { FormControl, FormGroup, FormText, Button } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Email address is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <footer>
      <div className="container pt-5 mt-5">
        <div className="row pb-3 justify-content-evenly">
          <div className="col-md-4" style={{textAlign:'left'}}>
            <a href="/">
            <img
              src={require("../assets/images/logo.png")}
              alt="Logo"
              className="logo desktop-logo"
              style={{ width: "240px", height: "40px", cursor: "pointer" }}
            />
            </a>
            <h4>Ace Modern Networking</h4>
            <div className="social-media-links">
              <a href="https://www.linkedin.com/company/connct/" target="_blank">
             
                <img
              src={require("../assets/images/linkedin.png")}
              alt="Logo"
              className="logo desktop-logo"
              style={{ width: "40px", height: "30px", cursor: "pointer" }}
            />
              </a>
              <a href="https://www.facebook.com/connctcard" target="_blank">
              <img
              src={require("../assets/images/facebook.png")}
              alt="Logo"
              className="logo desktop-logo2"
              style={{ width: "40px", height: "30px", cursor: "pointer" }}
            />
              </a>
              <a href="https://www.instagram.com/connct.ai/" target="_blank">
              <img
              src={require("../assets/images/instagram.png")}
              alt="Logo"
              className="logo desktop-logo3"
              style={{ width: "40px", height: "30px", cursor: "pointer" }}
            />
              </a>
              <a href="https://twitter.com/connct_ai" target="_blank">
              <img
              src={require("../assets/images/twitter.png")}
              alt="Logo"
              className="logo desktop-logo4"
              style={{ width: "40px", height: "30px", cursor: "pointer" }}
            />
              </a>
            </div>
          </div>
          <div className="col-md-2 col-6 my-2 my-md-0" style={{textAlign:'left'}}>
  <h6>info.</h6>
  <a href="/terms" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Terms & Condition</a>
  <a href="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Privacy Policy</a>
  <a href="/faq" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>FAQ</a>
</div>

<div className="col-md-2 col-6 my-2 my-md-0" style={{textAlign:'left'}}>
  <h6>Connct.</h6>
  <a href="/compatible-devices" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Compatible Devices</a>
  <a href="/upgrade-to-pro" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>PRO</a>
  <a href="/ambassador" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>Become an Ambassador</a>
</div>

          <div className="col-md-4 newsletter" style={{textAlign:'left'}}>
            <h6>join newsletter</h6>
            <p>Subscribe our newsletter to get free design course and resource</p>
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email">
                <FormControl
                  type="email"
                  name="footer-nwsbox"
                  id="footer-nwsbox"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  required
                />
                <FormText>
                  {emailError}
                </FormText>
              </FormGroup>
              <Button type="submit" className="nws-submit">
                <i className="las la-arrow-right"></i>
              </Button>
            </form>
          </div>
        </div>
        <div className="row pb-4 pt-4 copy">
          <div className="col-md-6">Copyright © 2022. All rights reserved</div>
          <div className="col-md-6 cookies">We use cookies for better service.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home4.css';

const Home4 = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://api.connct.ai/v1/api/public-api/list-products')
      .then((response) => {
        if (response.data && Array.isArray(response.data.cards)) {
          setCards(response.data.cards);
        } else {
          console.error('Invalid data format:', response.data);
          setCards([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setCards([]);
      });
  }, []);

  return (
<div className="container mt-5">
  <div style={{ marginTop: '130px' }}>
    <div className="row">
      {cards.length >= 1 && (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Link to="/minimalisticwhite" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card" style={{ height: '440px', position: 'relative', backgroundColor: 'white' }}>
            <div style={{ position: 'relative', height: '350px', marginTop: '10px', textAlign: 'center' }}>
              <img
                src={require("../assets/images/cart2.png")}
                alt="Logo"
                className="logo desktop-logo"
                style={{ width: "70%", height: '240px', cursor: "pointer" }}
              />
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '14px' }}>
                New 
              </div>
            </div>
            <div className="card-body" style={{ whiteSpace: 'nowrap', }}>
              <h3 style={{ textAlign: 'left' }}>Minimalistic white</h3>
              <p className="card-text" style={{ textAlign: 'left' }}> &#8377;{cards[0].price}</p>
              <button className="btn btn-primary btn-block btn-custom">Try Now</button>
            </div>
          </div>
          </Link>
        </div>
      )}

      {cards.length >= 2 && (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Link to="/glossyblack" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card" style={{ height: '440px', position: 'relative', backgroundColor: 'white' }}>
            <div style={{ position: 'relative', height: '350px', marginTop: '10px', textAlign: 'center' }}>
              <img
                src={require("../assets/images/cart1.png")}
                alt="Logo"
                className="logo desktop-logo"
                style={{ width: "70%", height: '240px', cursor: "pointer" }}
              />
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '14px' }}>
                New 
              </div>
            </div>
            <div className="card-body" style={{ whiteSpace: 'nowrap' }}>
              <h3 style={{ textAlign: 'left' }}>glossyblack</h3>
              <p className="card-text" style={{ textAlign: 'left' }}> &#8377;{cards[1].price}</p>
              <button className="btn btn-primary btn-block btn-custom">Try Now</button>
            </div>
          </div>
          </Link>
        </div>
      )}

      {cards.length >= 3 && (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Link to="/matteblack" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card" style={{ height: '440px', position: 'relative', backgroundColor: 'white' }}>
            <div style={{ position: 'relative', height: '350px', marginTop: '10px', textAlign: 'center' }}>
              <img
                src={require("../assets/images/cart1.png")}
                alt="Logo"
                className="logo desktop-logo"
                style={{ width: "70%", height: "260px", cursor: "pointer" }}
              />
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '14px' }}>
                New 
              </div>
            </div>
            <div className="card-body" style={{ whiteSpace: 'nowrap' }}>
              <h3 style={{ textAlign: 'left' }}>Classic Matte Black</h3>
              <p className="card-text" style={{ textAlign: 'left' }}> &#8377;{cards[2].price}</p>
              <button className="btn btn-primary btn-block btn-custom">Try Now</button>
            </div>
          </div>
          </Link>
        </div>
      )}
   
    </div>
  </div>
</div>

  
  
  
  )
};

export default Home4;

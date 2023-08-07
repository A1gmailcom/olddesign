import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Dropdown, Button } from 'react-bootstrap';
import Header from './Header';

const Matteblack = () => {
  const [card, setCard] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    axios
      .get('https://api.connct.ai/v1/api/public-api/list-products/matt-card')
      .then((response) => {
        const cardIdToDisplay = 4; // Change this value to display the desired glossy black card by ID
        const cardToDisplay = response.data.cards.find((card) => card.id === cardIdToDisplay);
        setCard(cardToDisplay);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setCard(null);
      });
  }, []);

  const handleCustomize = () => {
    // Implement customization logic here
  };

  const handleAddToCart = () => {
    // Implement add to cart logic here
  };

  return (
    <div style={{ marginTop: '160px' }}>
      <div style={{ background: '#FBFBFB' }}>
        <Header />
      </div>
      <div className="container mt-5">
        {card ? (
          <Row>
            <Col lg={6} md={12}>
              <div style={{ border: '1px solid rgba(136, 136, 136, 0.2)', padding: '10px', borderRadius: '10px' }}>
                <img
                  src={require("../assets/images/cart1.png")}
                  alt="Logo"
                  className="logo desktop-logo img-fluid"
                  style={{
                    width: '100%',
                    marginTop: '60px',
                  }}
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="custom-title-style" style={{ fontWeight: 'bold', fontFamily: 'Poppins, serif', fontSize: '40px', textDecoration: 'none', textAlign: 'left' }}>
                {card.name}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="card-text" style={{ fontFamily: 'Poppins, serif', fontSize: '38px', fontWeight: '900', display: 'inline' }}>₹{card.price}</p>
                <span style={{ fontSize: '18px', color: '#888', whiteSpace: 'pre-wrap' }}>Shipping calculated at checkout.*</span>
              </div>
              <br />
              <br />
              <p className="card-text" style={{ fontWeight: 500, fontSize: '18px', color: '#888', textAlign: 'left', whiteSpace: 'pre-wrap' }}>
                {card.description}
              </p>
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                  />
                </div>
                <div style={{ position: 'relative' }}>
                <Dropdown className="custom-dropdown">
  <Dropdown.Toggle variant="primary" id="item-dropdown">
    {selectedColor ? selectedColor : card.name}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item onClick={() => setSelectedColor(null)}>
      All Colors
    </Dropdown.Item>
    {card.colors && card.colors.map((color) => (
      <Dropdown.Item key={color} onClick={() => setSelectedColor(color)}>
        {color}
      </Dropdown.Item>
    ))}
    <Dropdown.Divider />
    <Dropdown.Item>
      {card.name}
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

                </div>
                <div>
                  <Button variant="info" onClick={handleCustomize}>Customize</Button>{' '}
                  <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Matteblack;

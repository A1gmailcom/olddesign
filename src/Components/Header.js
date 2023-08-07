import React, { useState } from 'react';
import './Header.css';
const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const items = []; // Replace with your items array
  const token = null; // Replace with your token
  const username = null; // Replace with your username
  const email = null; // Replace with your email

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const logout = () => {
    // Implement your logout logic here
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed"style={{ height: '100px' }}>
        <div className="container" style={{marginLeft:'160px'}}>
          <a className="navbar-brand" href="/" >
          <img
              src={require("../assets/images/logo.png")}
              alt="Logo"
              className="logo desktop-logo"
              style={{ width: "240px", height: "40px", cursor: "pointer" }}
            />
          </a>
          <div className="d-flex gap-2">
            <span className="menu-cart-2">
              <a className="nav-link cart-btn" href="/shopping-cart">
                <img src="../../assets/images/cart.png" alt="Cart" />
                <span className="badge circle">{items.length > 0 && items.length}</span>
              </a>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-expanded={!isCollapsed}
              aria-controls="navbarSupportedContent"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto main-nav">
              <li className="nav-item dropdown dropdown-mega dr-2">
                <a className="nav-link dropdown-toggle dropdown-link" href="#" data-bs-toggle="dropdown">
                  Discover
                </a>
                <div className="dropdown-menu shadow">
                  <div className="mega-content">
                    <div className="container gx-0 gy-0 no-gutters">
                      <div className="row align-items-center">
                        <div className="col-sm-4 py-4">
                          <h5>Browse Products</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="/product-list">
                              All Products
                            </a>
                            <a className="list-group-item" href="/product-detail/matt-card">
                              Matte Cards
                            </a>
                            <a className="list-group-item" href="/product-detail/gloss-card">
                              Gloss Cards
                            </a>
                            <a className="list-group-item" href="/product-detail/metallic-card">
                              Metallic Cards
                            </a>
                          </div>
                        </div>

                        <div className="col-sm-6 mob-hidden">{/* ... Content ... */}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/upgrade-to-pro">
                  <span className="badge">Pro</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/enterprise">
                  Enterprise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  Faq
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blogs
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto right-nav">
              {/* ... Rest of the code ... */}
              <li className="nav-item cart-menu" >
                <a className="nav-link cart-btn" href="/shopping-cart">
                  <img
        src={require('../assets/images/cart.png')}
        alt="Cart"
      />
                  <span className="badge circle">{items.length > 0 && items.length}</span>
                </a>
              </li>
              {!token && (
                <li className="nav-item">
                  <a className="btn btn-primary" href="/login">
                    Login
                  </a>
                </li>
              )}
              {token && (
                <li className="nav-item dropdown user-info">
                  <a
                    className="nav-link dropdown-toggle align-center gap-2"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  
                    <div>
                      <span className="f-small text-capitalize">{username}</span>
                      <span className="f-small">{username === null && email}</span>
                    </div>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/forgot-password">
                      Forgot Password
                    </a>
                    <a className="dropdown-item" href="#" onClick={logout}>
                      Sign Out
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {showSearch && (
        <div className="search-box">
          <form action="">
            <input type="text" className="form-control" placeholder="Search product" />
            <button type="submit" className="nws-submit">
              <i className="las la-search"></i>
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;

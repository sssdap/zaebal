import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUser, FaHeart, FaFilm, FaTv, FaHome, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

/**
 * Header Component
 * Main navigation bar with logo, menu items, and user actions
 */
const Header = ({ user, onLogout }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
    setExpanded(false);
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      className="header-navbar" 
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="logo" onClick={handleNavClick}>
          <span className="logo-text">ILLUMINOS</span>
          <span className="logo-dot">.</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />

        {/* Navigation Menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-item-custom" onClick={handleNavClick}>
              <FaHome className="nav-icon" />
              <span>Главная</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/movies" className="nav-item-custom" onClick={handleNavClick}>
              <FaFilm className="nav-icon" />
              <span>Фильмы</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/series" className="nav-item-custom" onClick={handleNavClick}>
              <FaTv className="nav-icon" />
              <span>Сериалы</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites" className="nav-item-custom" onClick={handleNavClick}>
              <FaHeart className="nav-icon" />
              <span>Избранное</span>
            </Nav.Link>
          </Nav>

          {/* User Actions */}
          <Nav className="ms-auto align-items-center">
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile" className="user-profile" onClick={handleNavClick}>
                  <FaUser className="me-2" />
                  <span>{user.name}</span>
                  {user.role === 'admin' && (
                    <span className="badge bg-danger ms-2">Admin</span>
                  )}
                  {user.subscription && (
                    <span className="badge bg-success ms-2">Premium</span>
                  )}
                </Nav.Link>
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  <FaSignOutAlt className="me-2" />
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" onClick={handleNavClick}>
                  <Button variant="outline-light" size="sm">
                    Войти
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/register" onClick={handleNavClick}>
                  <Button variant="primary" size="sm" className="ms-2">
                    Регистрация
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

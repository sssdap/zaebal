import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';
import './Footer.css';

/**
 * Footer Component
 * Site footer with links, social media, and copyright information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          {/* About Section */}
          <Col lg={4} md={6} className="footer-section mb-4">
            <h3 className="footer-logo">ILLUMINOS<span className="dot">.</span></h3>
            <p className="footer-description">
              Современный стриминговый сервис с огромной коллекцией фильмов и сериалов. 
              Смотрите в любое время, в любом месте.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTelegram />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="footer-section mb-4">
            <h5 className="footer-title">Навигация</h5>
            <ul className="footer-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/movies">Фильмы</Link></li>
              <li><Link to="/series">Сериалы</Link></li>
              <li><Link to="/favorites">Избранное</Link></li>
            </ul>
          </Col>

          {/* Account Links */}
          <Col lg={3} md={6} className="footer-section mb-4">
            <h5 className="footer-title">Аккаунт</h5>
            <ul className="footer-links">
              <li><Link to="/profile">Личный кабинет</Link></li>
              <li><Link to="/subscription">Подписка</Link></li>
              <li><Link to="/login">Войти</Link></li>
              <li><Link to="/register">Регистрация</Link></li>
            </ul>
          </Col>

          {/* Support Links */}
          <Col lg={3} md={6} className="footer-section mb-4">
            <h5 className="footer-title">Поддержка</h5>
            <ul className="footer-links">
              <li><a href="#help">Помощь</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Политика конфиденциальности</a></li>
              <li><a href="#terms">Условия использования</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="copyright">
              © {currentYear} <span className="text-gradient">ILLUMINOS</span>. Все права защищены.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

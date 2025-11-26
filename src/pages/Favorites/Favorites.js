import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaFilm } from 'react-icons/fa';
import ContentCard from '../../components/ContentCard/ContentCard';
import './Favorites.css';

/**
 * Favorites Page Component
 * Displays user's favorite movies and series
 */
const Favorites = ({ user, favorites, removeFromFavorites }) => {
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <div className="favorites-page">
        <Container>
          <div className="auth-required fade-in">
            <FaHeart className="auth-icon" />
            <h2>Войдите, чтобы увидеть избранное</h2>
            <p>Сохраняйте любимые фильмы и сериалы в одном месте</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/login')}>
              Войти
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <Container>
        {/* Page Header */}
        <div className="page-header fade-in">
          <h1 className="page-title">
            <FaHeart className="me-3" />
            Избранное
          </h1>
          <p className="page-subtitle">Ваша личная коллекция любимого контента</p>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <>
            <div className="results-info">
              <p>Всего в избранном: <strong>{favorites.length}</strong></p>
            </div>
            <Row>
              {favorites.map((item) => (
                <Col key={item.id} lg={2} md={3} sm={4} xs={6} className="mb-4">
                  <ContentCard content={item} />
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <div className="empty-favorites fade-in">
            <FaFilm className="empty-icon" />
            <h3>Ваше избранное пусто</h3>
            <p>Добавьте фильмы и сериалы, чтобы смотреть их позже</p>
            <div className="empty-actions">
              <Button variant="primary" onClick={() => navigate('/movies')}>
                Смотреть фильмы
              </Button>
              <Button variant="secondary" className="ms-3" onClick={() => navigate('/series')}>
                Смотреть сериалы
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Favorites;

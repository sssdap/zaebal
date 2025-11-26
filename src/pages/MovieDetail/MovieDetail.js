import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlay, FaHeart, FaRegHeart, FaStar, FaClock, FaCalendar } from 'react-icons/fa';
import ContentCard from '../../components/ContentCard/ContentCard';
import { moviesData, getSimilarContent } from '../../data/mockData';
import './Detail.css';

/**
 * MovieDetail Page Component
 * Displays detailed information about a specific movie
 */
const MovieDetail = ({ user, favorites, addToFavorites, removeFromFavorites }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Find movie by ID
    const foundMovie = moviesData.find(m => m.id === parseInt(id));
    if (foundMovie) {
      setMovie(foundMovie);
      setSimilarMovies(getSimilarContent(foundMovie));
      
      // Check if in favorites
      setIsFavorite(favorites.some(fav => fav.id === foundMovie.id));
    } else {
      navigate('/movies');
    }
  }, [id, navigate, favorites]);

  // Toggle favorite
  const handleFavoriteToggle = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (isFavorite) {
      removeFromFavorites(movie.id);
      setIsFavorite(false);
    } else {
      addToFavorites(movie);
      setIsFavorite(true);
    }
  };

  // Watch trailer
  const handleWatchTrailer = () => {
    window.open(movie.trailer, '_blank');
  };

  if (!movie) {
    return (
      <div className="loading-screen">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Hero Section */}
      <section className="detail-hero" style={{ backgroundImage: `url(${movie.banner})` }}>
        <div className="detail-overlay">
          <Container>
            <Row>
              <Col lg={4} md={5} className="poster-col">
                <div className="poster-wrapper fade-in">
                  <img src={movie.poster} alt={movie.title} className="detail-poster" />
                </div>
              </Col>
              <Col lg={8} md={7} className="info-col">
                <div className="detail-info fade-in">
                  <h1 className="detail-title">{movie.title}</h1>
                  <p className="detail-title-en">{movie.titleEn}</p>

                  {/* Meta Info */}
                  <div className="detail-meta">
                    <Badge bg="primary" className="me-2">
                      <FaCalendar className="me-1" />
                      {movie.year}
                    </Badge>
                    <Badge bg="warning" text="dark" className="me-2">
                      <FaStar className="me-1" />
                      {movie.rating}
                    </Badge>
                    <Badge bg="info" className="me-2">
                      <FaClock className="me-1" />
                      {movie.duration}
                    </Badge>
                    {movie.new && <Badge bg="danger">Новинка</Badge>}
                  </div>

                  {/* Genres */}
                  <div className="detail-genres">
                    {movie.genre.map((g, index) => (
                      <span key={index} className="genre-pill">{g}</span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="detail-description">{movie.description}</p>

                  {/* Credits */}
                  <div className="detail-credits">
                    <div className="credit-item">
                      <strong>Режиссёр:</strong> {movie.director}
                    </div>
                    <div className="credit-item">
                      <strong>В ролях:</strong> {movie.cast.join(', ')}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="detail-actions">
                    <Button variant="primary" size="lg" onClick={handleWatchTrailer}>
                      <FaPlay className="me-2" />
                      Смотреть трейлер
                    </Button>
                    <Button 
                      variant={isFavorite ? "danger" : "outline-light"} 
                      size="lg" 
                      className="ms-3"
                      onClick={handleFavoriteToggle}
                    >
                      {isFavorite ? <FaHeart className="me-2" /> : <FaRegHeart className="me-2" />}
                      {isFavorite ? 'В избранном' : 'В избранное'}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Similar Movies */}
      {similarMovies.length > 0 && (
        <section className="similar-section">
          <Container>
            <h2 className="section-title">Похожие фильмы</h2>
            <Row>
              {similarMovies.map((item) => (
                <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <ContentCard content={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default MovieDetail;

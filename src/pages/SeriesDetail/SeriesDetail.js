import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlay, FaHeart, FaRegHeart, FaStar, FaTv, FaCalendar } from 'react-icons/fa';
import ContentCard from '../../components/ContentCard/ContentCard';
import { seriesData, getSimilarContent } from '../../data/mockData';
import '../MovieDetail/Detail.css';

/**
 * SeriesDetail Page Component
 * Displays detailed information about a specific series
 */
const SeriesDetail = ({ user, favorites, addToFavorites, removeFromFavorites }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [series, setSeries] = useState(null);
  const [similarSeries, setSimilarSeries] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Find series by ID
    const foundSeries = seriesData.find(s => s.id === parseInt(id));
    if (foundSeries) {
      setSeries(foundSeries);
      setSimilarSeries(getSimilarContent(foundSeries));
      
      // Check if in favorites
      setIsFavorite(favorites.some(fav => fav.id === foundSeries.id));
    } else {
      navigate('/series');
    }
  }, [id, navigate, favorites]);

  // Toggle favorite
  const handleFavoriteToggle = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (isFavorite) {
      removeFromFavorites(series.id);
      setIsFavorite(false);
    } else {
      addToFavorites(series);
      setIsFavorite(true);
    }
  };

  // Watch trailer
  const handleWatchTrailer = () => {
    window.open(series.trailer, '_blank');
  };

  if (!series) {
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
      <section className="detail-hero" style={{ backgroundImage: `url(${series.banner})` }}>
        <div className="detail-overlay">
          <Container>
            <Row>
              <Col lg={4} md={5} className="poster-col">
                <div className="poster-wrapper fade-in">
                  <img src={series.poster} alt={series.title} className="detail-poster" />
                </div>
              </Col>
              <Col lg={8} md={7} className="info-col">
                <div className="detail-info fade-in">
                  <h1 className="detail-title">{series.title}</h1>
                  <p className="detail-title-en">{series.titleEn}</p>

                  {/* Meta Info */}
                  <div className="detail-meta">
                    <Badge bg="primary" className="me-2">
                      <FaCalendar className="me-1" />
                      {series.year}
                    </Badge>
                    <Badge bg="warning" text="dark" className="me-2">
                      <FaStar className="me-1" />
                      {series.rating}
                    </Badge>
                    <Badge bg="info" className="me-2">
                      <FaTv className="me-1" />
                      {series.seasons} {series.seasons === 1 ? 'сезон' : 'сезона'}
                    </Badge>
                    <Badge bg="secondary" className="me-2">
                      {series.episodes} серий
                    </Badge>
                    {series.new && <Badge bg="danger">Новинка</Badge>}
                  </div>

                  {/* Genres */}
                  <div className="detail-genres">
                    {series.genre.map((g, index) => (
                      <span key={index} className="genre-pill">{g}</span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="detail-description">{series.description}</p>

                  {/* Credits */}
                  <div className="detail-credits">
                    <div className="credit-item">
                      <strong>Создатель:</strong> {series.creator}
                    </div>
                    <div className="credit-item">
                      <strong>В ролях:</strong> {series.cast.join(', ')}
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

      {/* Similar Series */}
      {similarSeries.length > 0 && (
        <section className="similar-section">
          <Container>
            <h2 className="section-title">Похожие сериалы</h2>
            <Row>
              {similarSeries.map((item) => (
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

export default SeriesDetail;

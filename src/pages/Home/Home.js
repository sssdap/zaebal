import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch, FaPlay, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ContentCard from '../../components/ContentCard/ContentCard';
import { 
  getFeaturedContent, 
  getNewReleases, 
  getPopularMovies, 
  getPopularSeries,
  genres,
  getContentByGenre,
  searchContent
} from '../../data/mockData';
import './Home.css';

/**
 * Home Page Component
 * Main landing page with featured content, search, and content sections
 */
const Home = ({ user }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Все жанры');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const featuredContent = getFeaturedContent();
  const mainFeatured = featuredContent[0];
  const newReleases = getNewReleases();
  const popularMovies = getPopularMovies();
  const popularSeries = getPopularSeries();

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = searchContent(searchQuery);
      setSearchResults(results);
      setIsSearching(true);
    }
  };

  // Handle genre filter
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre !== 'Все жанры') {
      const results = getContentByGenre(genre);
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
    setSelectedGenre('Все жанры');
  };

  // Navigate to detail page
  const handleWatch = () => {
    if (mainFeatured) {
      navigate(`/${mainFeatured.type}/${mainFeatured.id}`);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner" style={{ backgroundImage: `url(${mainFeatured?.banner})` }}>
        <div className="hero-overlay">
          <Container>
            <Row>
              <Col lg={6} className="hero-content">
                <h1 className="hero-title fade-in">{mainFeatured?.title}</h1>
                <div className="hero-meta fade-in">
                  <span className="badge bg-primary">{mainFeatured?.year}</span>
                  <span className="badge bg-secondary ms-2">⭐ {mainFeatured?.rating}</span>
                  {mainFeatured?.type === 'movie' && (
                    <span className="badge bg-info ms-2">{mainFeatured?.duration}</span>
                  )}
                  {mainFeatured?.type === 'series' && (
                    <span className="badge bg-info ms-2">{mainFeatured?.seasons} сезона</span>
                  )}
                </div>
                <p className="hero-description fade-in">{mainFeatured?.description}</p>
                <div className="hero-genres fade-in">
                  {mainFeatured?.genre.map((g, index) => (
                    <span key={index} className="genre-tag">{g}</span>
                  ))}
                </div>
                <div className="hero-actions fade-in">
                  <Button variant="primary" size="lg" onClick={handleWatch}>
                    <FaPlay className="me-2" />
                    Смотреть
                  </Button>
                  <Button variant="outline-light" size="lg" className="ms-3" onClick={handleWatch}>
                    <FaInfoCircle className="me-2" />
                    Подробнее
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Form onSubmit={handleSearch} className="search-form">
                <div className="search-input-wrapper">
                  <FaSearch className="search-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Поиск фильмов и сериалов..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  {isSearching && (
                    <Button 
                      variant="link" 
                      className="clear-search"
                      onClick={clearSearch}
                    >
                      ✕
                    </Button>
                  )}
                </div>
                <Button variant="primary" type="submit" className="search-btn">
                  Найти
                </Button>
              </Form>
            </Col>
          </Row>

          {/* Genre Filter */}
          <Row className="mt-4">
            <Col>
              <div className="genre-filter">
                {genres.map((genre, index) => (
                  <button
                    key={index}
                    className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                    onClick={() => handleGenreChange(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search Results */}
      {isSearching && (
        <section className="content-section">
          <Container>
            <h2 className="section-title">
              Результаты поиска
              <span className="results-count">({searchResults.length})</span>
            </h2>
            {searchResults.length > 0 ? (
              <Row>
                {searchResults.map((item) => (
                  <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="mb-4">
                    <ContentCard content={item} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="no-results">
                <p>Ничего не найдено. Попробуйте изменить запрос.</p>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Content Sections */}
      {!isSearching && (
        <>
          {/* New Releases */}
          <section className="content-section">
            <Container>
              <h2 className="section-title">Новинки</h2>
              <Row>
                {newReleases.map((item) => (
                  <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="mb-4">
                    <ContentCard content={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Popular Movies */}
          <section className="content-section">
            <Container>
              <h2 className="section-title">Популярные фильмы</h2>
              <Row>
                {popularMovies.map((item) => (
                  <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="mb-4">
                    <ContentCard content={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Popular Series */}
          <section className="content-section">
            <Container>
              <h2 className="section-title">Популярные сериалы</h2>
              <Row>
                {popularSeries.map((item) => (
                  <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="mb-4">
                    <ContentCard content={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Recommendations */}
          {user && (
            <section className="content-section">
              <Container>
                <h2 className="section-title">Рекомендации для вас</h2>
                <Row>
                  {popularMovies.slice(0, 6).map((item) => (
                    <Col key={item.id} lg={2} md={4} sm={6} xs={6} className="mb-4">
                      <ContentCard content={item} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

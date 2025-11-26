import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import ContentCard from '../../components/ContentCard/ContentCard';
import { seriesData, genres } from '../../data/mockData';
import '../Movies/ContentPage.css';

/**
 * Series Page Component
 * Displays all available series with search and filter options
 */
const Series = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Все жанры');
  const [filteredSeries, setFilteredSeries] = useState(seriesData);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    let results = seriesData;
    
    // Apply genre filter
    if (selectedGenre !== 'Все жанры') {
      results = results.filter(series => series.genre.includes(selectedGenre));
    }
    
    // Apply search filter
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(series => 
        series.title.toLowerCase().includes(lowerQuery) ||
        series.titleEn.toLowerCase().includes(lowerQuery) ||
        series.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    setFilteredSeries(results);
  };

  // Handle genre filter
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    
    let results = seriesData;
    
    // Apply genre filter
    if (genre !== 'Все жанры') {
      results = results.filter(series => series.genre.includes(genre));
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      results = results.filter(series => 
        series.title.toLowerCase().includes(lowerQuery) ||
        series.titleEn.toLowerCase().includes(lowerQuery) ||
        series.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    setFilteredSeries(results);
  };

  return (
    <div className="content-page">
      <Container>
        {/* Page Header */}
        <div className="page-header fade-in">
          <h1 className="page-title">Сериалы</h1>
          <p className="page-subtitle">Лучшие сериалы для долгих вечеров</p>
        </div>

        {/* Search Bar */}
        <Row className="mb-4">
          <Col lg={8} className="mx-auto">
            <div className="search-wrapper">
              <FaSearch className="search-icon-page" />
              <Form.Control
                type="text"
                placeholder="Поиск сериалов..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-input-page"
              />
            </div>
          </Col>
        </Row>

        {/* Genre Filter */}
        <div className="genre-filter-page">
          {genres.map((genre, index) => (
            <button
              key={index}
              className={`genre-btn-page ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => handleGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Найдено сериалов: <strong>{filteredSeries.length}</strong></p>
        </div>

        {/* Series Grid */}
        {filteredSeries.length > 0 ? (
          <Row>
            {filteredSeries.map((series) => (
              <Col key={series.id} lg={2} md={3} sm={4} xs={6} className="mb-4">
                <ContentCard content={series} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-results-page">
            <p>Сериалы не найдены. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Series;

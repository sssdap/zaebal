import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import ContentCard from '../../components/ContentCard/ContentCard';
import { moviesData, genres, getContentByGenre, searchContent } from '../../data/mockData';
import './ContentPage.css';

/**
 * Movies Page Component
 * Displays all available movies with search and filter options
 */
const Movies = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Все жанры');
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    let results = moviesData;
    
    // Apply genre filter
    if (selectedGenre !== 'Все жанры') {
      results = results.filter(movie => movie.genre.includes(selectedGenre));
    }
    
    // Apply search filter
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(movie => 
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.titleEn.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    setFilteredMovies(results);
  };

  // Handle genre filter
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    
    let results = moviesData;
    
    // Apply genre filter
    if (genre !== 'Все жанры') {
      results = results.filter(movie => movie.genre.includes(genre));
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      results = results.filter(movie => 
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.titleEn.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    setFilteredMovies(results);
  };

  return (
    <div className="content-page">
      <Container>
        {/* Page Header */}
        <div className="page-header fade-in">
          <h1 className="page-title">Фильмы</h1>
          <p className="page-subtitle">Огромная коллекция фильмов на любой вкус</p>
        </div>

        {/* Search Bar */}
        <Row className="mb-4">
          <Col lg={8} className="mx-auto">
            <div className="search-wrapper">
              <FaSearch className="search-icon-page" />
              <Form.Control
                type="text"
                placeholder="Поиск фильмов..."
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
          <p>Найдено фильмов: <strong>{filteredMovies.length}</strong></p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <Row>
            {filteredMovies.map((movie) => (
              <Col key={movie.id} lg={2} md={3} sm={4} xs={6} className="mb-4">
                <ContentCard content={movie} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-results-page">
            <p>Фильмы не найдены. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Movies;

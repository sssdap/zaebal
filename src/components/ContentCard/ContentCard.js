import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaPlay } from 'react-icons/fa';
import './ContentCard.css';

/**
 * ContentCard Component
 * Displays a movie or series card with poster, title, and rating
 */
const ContentCard = ({ content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${content.type}/${content.id}`);
  };

  return (
    <Card className="content-card" onClick={handleClick}>
      <div className="card-image-wrapper">
        <Card.Img 
          variant="top" 
          src={content.poster} 
          alt={content.title}
          className="card-image"
        />
        <div className="card-overlay">
          <div className="play-button">
            <FaPlay />
          </div>
        </div>
        {content.new && (
          <span className="new-badge">Новинка</span>
        )}
        <div className="rating-badge">
          <FaStar className="star-icon" />
          <span>{content.rating}</span>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="card-title-custom">{content.title}</Card.Title>
        <div className="card-meta">
          <span className="year">{content.year}</span>
          <span className="separator">•</span>
          {content.type === 'movie' ? (
            <span className="duration">{content.duration}</span>
          ) : (
            <span className="seasons">{content.seasons} сезона</span>
          )}
        </div>
        <div className="card-genres">
          {content.genre.slice(0, 2).map((genre, index) => (
            <span key={index} className="genre-badge">{genre}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;

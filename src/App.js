import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import SeriesDetail from './pages/SeriesDetail/SeriesDetail';
import Subscription from './pages/Subscription/Subscription';

function App() {
  // User state management
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('illuminos_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    const savedFavorites = localStorage.getItem('illuminos_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Login handler
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('illuminos_user', JSON.stringify(userData));
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('illuminos_user');
  };

  // Add to favorites
  const addToFavorites = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem('illuminos_favorites', JSON.stringify(newFavorites));
  };

  // Remove from favorites
  const removeFromFavorites = (itemId) => {
    const newFavorites = favorites.filter(item => item.id !== itemId);
    setFavorites(newFavorites);
    localStorage.setItem('illuminos_favorites', JSON.stringify(newFavorites));
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/movies" element={<Movies user={user} />} />
            <Route path="/series" element={<Series user={user} />} />
            <Route 
              path="/favorites" 
              element={
                <Favorites 
                  user={user} 
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              } 
            />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route 
              path="/movie/:id" 
              element={
                <MovieDetail 
                  user={user}
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              } 
            />
            <Route 
              path="/series/:id" 
              element={
                <SeriesDetail 
                  user={user}
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              } 
            />
            <Route path="/subscription" element={<Subscription user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

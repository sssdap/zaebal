import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import './Auth.css';

/**
 * Login Page Component
 * User authentication page with form validation
 */
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);

    if (validateForm()) {
      // Mock authentication - in real app, this would call an API
      const mockUser = {
        id: 1,
        name: formData.email.split('@')[0],
        email: formData.email,
        role: formData.email.includes('admin') ? 'admin' : 'user',
        subscription: formData.email.includes('premium') ? 'premium' : null
      };

      onLogin(mockUser);
      navigate('/');
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={7} sm={10}>
            <div className="auth-card fade-in">
              <div className="auth-header">
                <h1 className="auth-title">Вход в <span className="text-gradient">ILLUMINOS</span></h1>
                <p className="auth-subtitle">Добро пожаловать! Войдите в свой аккаунт</p>
              </div>

              {showError && Object.keys(errors).length > 0 && (
                <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                  Пожалуйста, исправьте ошибки в форме
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="auth-form">
                {/* Email Field */}
                <Form.Group className="mb-4">
                  <Form.Label>
                    <FaEnvelope className="me-2" />
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className="auth-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4">
                  <Form.Label>
                    <FaLock className="me-2" />
                    Пароль
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Введите пароль"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    className="auth-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Forgot Password Link */}
                <div className="text-end mb-4">
                  <Link to="#" className="forgot-link">Забыли пароль?</Link>
                </div>

                {/* Submit Button */}
                <Button variant="primary" type="submit" size="lg" className="w-100 auth-btn">
                  Войти
                </Button>

                {/* Demo Accounts Info */}
                <div className="demo-info">
                  <p className="demo-title">Демо аккаунты:</p>
                  <p className="demo-text">• admin@illuminos.com - Админ</p>
                  <p className="demo-text">• premium@illuminos.com - Премиум</p>
                  <p className="demo-text">• user@illuminos.com - Обычный</p>
                  <p className="demo-note">Пароль: любой (мин. 6 символов)</p>
                </div>
              </Form>

              <div className="auth-footer">
                <p>Нет аккаунта? <Link to="/register" className="auth-link">Зарегистрироваться</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

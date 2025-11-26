import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaCheck } from 'react-icons/fa';
import './Auth.css';

/**
 * Register Page Component
 * User registration page with form validation
 */
const Register = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Имя обязательно';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

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
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = 'Пароль должен содержать заглавные и строчные буквы';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Подтвердите пароль';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Необходимо согласие с условиями';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);

    if (validateForm()) {
      // Mock registration - in real app, this would call an API
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: 'user',
        subscription: null
      };

      onLogin(newUser);
      navigate('/');
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={10}>
            <div className="auth-card fade-in">
              <div className="auth-header">
                <h1 className="auth-title">Регистрация в <span className="text-gradient">ILLUMINOS</span></h1>
                <p className="auth-subtitle">Создайте аккаунт и начните смотреть</p>
              </div>

              {showError && Object.keys(errors).length > 0 && (
                <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                  Пожалуйста, исправьте ошибки в форме
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="auth-form">
                {/* Name Field */}
                <Form.Group className="mb-4">
                  <Form.Label>
                    <FaUser className="me-2" />
                    Имя
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    className="auth-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

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
                    placeholder="Минимум 6 символов"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    className="auth-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Confirm Password Field */}
                <Form.Group className="mb-4">
                  <Form.Label>
                    <FaLock className="me-2" />
                    Подтвердите пароль
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    className="auth-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Terms Checkbox */}
                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    isInvalid={!!errors.agreeToTerms}
                    label={
                      <span>
                        Я согласен с <Link to="#" className="auth-link">условиями использования</Link> и{' '}
                        <Link to="#" className="auth-link">политикой конфиденциальности</Link>
                      </span>
                    }
                    className="auth-checkbox"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.agreeToTerms}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" size="lg" className="w-100 auth-btn">
                  <FaCheck className="me-2" />
                  Создать аккаунт
                </Button>
              </Form>

              <div className="auth-footer">
                <p>Уже есть аккаунт? <Link to="/login" className="auth-link">Войти</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;

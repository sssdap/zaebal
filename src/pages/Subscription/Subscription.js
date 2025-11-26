import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Alert } from 'react-bootstrap';
import { FaCheck, FaCreditCard, FaShieldAlt } from 'react-icons/fa';
import './Subscription.css';

/**
 * Subscription Page Component
 * Displays subscription plans and payment options
 */
const Subscription = ({ user }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Subscription plans
  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: 299,
      period: 'месяц',
      features: [
        'HD качество (720p)',
        'Просмотр на 1 устройстве',
        'Стандартная библиотека контента',
        'Реклама'
      ],
      color: '#6c757d',
      popular: false
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 599,
      period: 'месяц',
      features: [
        'Full HD качество (1080p)',
        'Просмотр на 2 устройствах',
        'Полная библиотека контента',
        'Без рекламы',
        'Скачивание контента'
      ],
      color: '#6c63ff',
      popular: true
    },
    {
      id: 'family',
      name: 'Семейный',
      price: 899,
      period: 'месяц',
      features: [
        '4K Ultra HD качество',
        'Просмотр на 4 устройствах',
        'Полная библиотека контента',
        'Без рекламы',
        'Скачивание контента',
        'Детский профиль',
        'Приоритетная поддержка'
      ],
      color: '#00d4ff',
      popular: false
    }
  ];

  // Handle plan selection
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
    setPaymentSuccess(false);
  };

  // Handle payment
  const handlePayment = (e) => {
    e.preventDefault();
    // Mock payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1500);
  };

  return (
    <div className="subscription-page">
      <Container>
        {/* Page Header */}
        <div className="page-header fade-in">
          <h1 className="page-title">Выберите подписку</h1>
          <p className="page-subtitle">
            Наслаждайтесь неограниченным просмотром фильмов и сериалов
          </p>
        </div>

        {/* Current Subscription Info */}
        {user && user.subscription && (
          <Alert variant="info" className="subscription-alert fade-in">
            <strong>Текущая подписка:</strong> {user.subscription} • 
            Следующее списание: 02.11.2025
          </Alert>
        )}

        {/* Subscription Plans */}
        <Row className="justify-content-center">
          {plans.map((plan) => (
            <Col key={plan.id} lg={4} md={6} className="mb-4">
              <Card className={`subscription-card ${plan.popular ? 'popular' : ''} fade-in`}>
                {plan.popular && (
                  <div className="popular-badge">Популярный</div>
                )}
                <Card.Body>
                  <h3 className="plan-name" style={{ color: plan.color }}>
                    {plan.name}
                  </h3>
                  <div className="plan-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-currency">₽</span>
                    <span className="price-period">/{plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck className="feature-icon" style={{ color: plan.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 plan-button"
                    style={{
                      background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}dd 100%)`
                    }}
                    onClick={() => handleSelectPlan(plan)}
                  >
                    Выбрать план
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Features Section */}
        <div className="features-section fade-in">
          <h2 className="section-title">Почему выбирают Illuminos?</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FaShieldAlt className="feature-icon-large" />
                </div>
                <h4>Безопасность</h4>
                <p>Защищённые платежи и конфиденциальность данных</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FaCheck className="feature-icon-large" />
                </div>
                <h4>Без обязательств</h4>
                <p>Отмените подписку в любое время без штрафов</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FaCreditCard className="feature-icon-large" />
                </div>
                <h4>Удобная оплата</h4>
                <p>Поддержка всех популярных платёжных систем</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Payment Modal */}
      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        centered
        className="payment-modal"
      >
        <Modal.Header closeButton className="payment-modal-header">
          <Modal.Title>Оформление подписки</Modal.Title>
        </Modal.Header>
        <Modal.Body className="payment-modal-body">
          {!paymentSuccess ? (
            <>
              <div className="selected-plan-info">
                <h4>{selectedPlan?.name}</h4>
                <p className="plan-price-modal">
                  {selectedPlan?.price} ₽ / {selectedPlan?.period}
                </p>
              </div>

              <Form onSubmit={handlePayment}>
                <Form.Group className="mb-3">
                  <Form.Label>Номер карты</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="payment-input"
                    required
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Срок действия</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MM/YY"
                        className="payment-input"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="123"
                        className="payment-input"
                        maxLength="3"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Имя владельца карты</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IVAN IVANOV"
                    className="payment-input"
                    required
                  />
                </Form.Group>

                <div className="payment-security">
                  <FaShieldAlt className="me-2" />
                  Платёж защищён SSL-шифрованием
                </div>

                <Button variant="primary" type="submit" size="lg" className="w-100 mt-3">
                  Оплатить {selectedPlan?.price} ₽
                </Button>
              </Form>
            </>
          ) : (
            <div className="payment-success">
              <div className="success-icon">
                <FaCheck />
              </div>
              <h3>Оплата успешна!</h3>
              <p>Подписка "{selectedPlan?.name}" активирована</p>
              <Button
                variant="primary"
                onClick={() => {
                  setShowPaymentModal(false);
                  setPaymentSuccess(false);
                }}
              >
                Отлично!
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Subscription;

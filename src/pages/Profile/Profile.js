import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaCrown, FaHistory, FaCog, FaShieldAlt } from 'react-icons/fa';
import './Profile.css';

/**
 * Profile Page Component
 * User profile with account information, history, and settings
 */
const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Mock viewing history
  const viewingHistory = [
    { id: 1, title: 'Звёздный Путь', type: 'movie', watchedAt: '2024-10-01', progress: 100 },
    { id: 2, title: 'Хроники Будущего', type: 'series', watchedAt: '2024-09-30', progress: 65 },
    { id: 3, title: 'Тени Прошлого', type: 'movie', watchedAt: '2024-09-28', progress: 100 },
  ];

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <div className="profile-page">
        <Container>
          <div className="auth-required fade-in">
            <FaUser className="auth-icon" />
            <h2>Войдите, чтобы увидеть профиль</h2>
            <p>Управляйте своим аккаунтом и настройками</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/login')}>
              Войти
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Container>
        {/* Profile Header */}
        <div className="profile-header fade-in">
          <div className="profile-avatar">
            <FaUser />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
            <div className="profile-badges">
              {user.role === 'admin' && (
                <Badge bg="danger" className="me-2">
                  <FaShieldAlt className="me-1" />
                  Администратор
                </Badge>
              )}
              {user.subscription && (
                <Badge bg="warning" text="dark">
                  <FaCrown className="me-1" />
                  Premium подписка
                </Badge>
              )}
              {!user.subscription && (
                <Badge bg="secondary">
                  Базовый аккаунт
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="profile-content fade-in">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="profile-tabs"
          >
            {/* Account Info Tab */}
            <Tab eventKey="profile" title={<span><FaUser className="me-2" />Профиль</span>}>
              <Card className="profile-card">
                <Card.Body>
                  <h3 className="card-title-profile">Информация об аккаунте</h3>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Имя</Form.Label>
                          <Form.Control
                            type="text"
                            defaultValue={user.name}
                            className="profile-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            defaultValue={user.email}
                            className="profile-input"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Роль</Form.Label>
                          <Form.Control
                            type="text"
                            value={user.role === 'admin' ? 'Администратор' : 'Пользователь'}
                            className="profile-input"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Статус подписки</Form.Label>
                          <Form.Control
                            type="text"
                            value={user.subscription ? 'Premium' : 'Базовый'}
                            className="profile-input"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary">Сохранить изменения</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab>

            {/* Subscription Tab */}
            <Tab eventKey="subscription" title={<span><FaCrown className="me-2" />Подписка</span>}>
              <Card className="profile-card">
                <Card.Body>
                  <h3 className="card-title-profile">Управление подпиской</h3>
                  {user.subscription ? (
                    <div className="subscription-active">
                      <div className="subscription-info">
                        <FaCrown className="subscription-icon" />
                        <div>
                          <h4>Premium подписка активна</h4>
                          <p>Следующее списание: 02.11.2025</p>
                          <p className="subscription-benefits">
                            ✓ Без рекламы<br />
                            ✓ 4K качество<br />
                            ✓ Скачивание контента<br />
                            ✓ 4 одновременных устройства
                          </p>
                        </div>
                      </div>
                      <Button variant="outline-danger">Отменить подписку</Button>
                    </div>
                  ) : (
                    <div className="subscription-inactive">
                      <p>У вас базовый аккаунт. Оформите подписку для доступа к премиум функциям.</p>
                      <Button variant="primary" onClick={() => navigate('/subscription')}>
                        Выбрать тариф
                      </Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Tab>

            {/* History Tab */}
            <Tab eventKey="history" title={<span><FaHistory className="me-2" />История</span>}>
              <Card className="profile-card">
                <Card.Body>
                  <h3 className="card-title-profile">История просмотров</h3>
                  <div className="history-list">
                    {viewingHistory.map((item) => (
                      <div key={item.id} className="history-item">
                        <div className="history-info">
                          <h5>{item.title}</h5>
                          <p>
                            <Badge bg="secondary" className="me-2">
                              {item.type === 'movie' ? 'Фильм' : 'Сериал'}
                            </Badge>
                            Просмотрено: {item.watchedAt}
                          </p>
                        </div>
                        <div className="history-progress">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${item.progress}%` }}
                              aria-valuenow={item.progress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {item.progress}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline-danger" className="mt-3">
                    Очистить историю
                  </Button>
                </Card.Body>
              </Card>
            </Tab>

            {/* Settings Tab */}
            <Tab eventKey="settings" title={<span><FaCog className="me-2" />Настройки</span>}>
              <Card className="profile-card">
                <Card.Body>
                  <h3 className="card-title-profile">Настройки аккаунта</h3>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label>Язык интерфейса</Form.Label>
                      <Form.Select className="profile-input">
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Качество видео по умолчанию</Form.Label>
                      <Form.Select className="profile-input">
                        <option value="auto">Автоматически</option>
                        <option value="4k">4K (только Premium)</option>
                        <option value="1080p">1080p Full HD</option>
                        <option value="720p">720p HD</option>
                        <option value="480p">480p</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="switch"
                        id="autoplay"
                        label="Автовоспроизведение следующей серии"
                        defaultChecked
                        className="profile-switch"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="switch"
                        id="notifications"
                        label="Уведомления о новинках"
                        defaultChecked
                        className="profile-switch"
                      />
                    </Form.Group>

                    <hr className="my-4" />

                    <h4 className="mb-3">Безопасность</h4>
                    <Button variant="outline-primary" className="mb-3 me-3">
                      Изменить пароль
                    </Button>
                    <Button variant="outline-secondary">
                      Двухфакторная аутентификация
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Profile;

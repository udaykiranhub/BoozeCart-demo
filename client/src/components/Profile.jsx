import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { User, Smartphone, MapPin, Mail, CreditCard, Gift, Settings } from 'lucide-react';

function Profile() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          <User size={32} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          My Profile
        </h1>
        <Row className="g-4">
          {/* Personal Information Card */}
          <Col md={6}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <User size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Personal Information
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <User size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>Name:</strong> John Doe
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Smartphone size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>Phone:</strong> +1234567890
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Mail size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>Email:</strong> john.doe@example.com
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <MapPin size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>Address:</strong> 123 Main St, City, Country
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Payment Information Card */}
          <Col md={6}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <CreditCard size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Payment Information
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CreditCard size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>Card Number:</strong> **** **** **** 1234
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CreditCard size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>Expiry Date:</strong> 12/25
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CreditCard size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  <strong>CVV:</strong> ***
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Order History Card */}
          <Col md={6}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <Gift size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Order History
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                  }}
                >
                  <strong>Recent Orders:</strong>
                  <ul style={{ listStyle: 'none', padding: '0' }}>
                    <li>Order #123 - Delivered</li>
                    <li>Order #124 - In Transit</li>
                    <li>Order #125 - Processing</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Account Settings Card */}
          <Col md={6}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <Settings size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Account Settings
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '15px',
                  }}
                >
                  <strong>Manage:</strong>
                  <ul style={{ listStyle: 'none', padding: '0' }}>
                    <li>Change Password</li>
                    <li>Update Email</li>
                    <li>Delete Account</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add global styles for hover effects */}
      <style>
        {`
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
}

export default Profile;
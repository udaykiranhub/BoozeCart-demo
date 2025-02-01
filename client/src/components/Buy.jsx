import React from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { CreditCard, Truck, MapPin, User, CheckCircle } from 'lucide-react';

function Buy() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <CheckCircle size={32} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          Complete Your Purchase
        </h1>
        <Row className="g-4">
          {/* Delivery Address */}
          <Col md={6}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <MapPin size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Delivery Address
                </h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your address" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter your postal code" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" required />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Payment Information */}
          <Col md={6}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <CreditCard size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Payment Information
                </h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter card number" required />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="CVV" required />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Additional Information */}
          <Col md={12}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Body>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <User size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Additional Information
                </h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Special Instructions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Any special instructions for delivery?"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth (Age Verification)</Form.Label>
                    <Form.Control type="date" required />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Confirm Purchase Button */}
          <Col md={12}>
            <Button
              variant="primary"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                marginTop: '20px',
              }}
            >
              Confirm Purchase
            </Button>
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

export default Buy;
import React from 'react';
import { Container, Card, Button, Form, Row, Col,Table } from 'react-bootstrap';
import { CreditCard, Truck, MapPin, CheckCircle } from 'lucide-react';

function Checkout() {
  const cartItems = [
    { id: 1, name: 'Red Wine', price: 20, quantity: 2 },
    { id: 2, name: 'Whiskey', price: 50, quantity: 1 },
    { id: 3, name: 'Vodka', price: 30, quantity: 3 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          <CheckCircle size={32} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          Checkout
        </h1>
        <Row className="g-4">
          {/* Order Summary */}
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
                <Card.Title
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  Order Summary
                </Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div style={{ textAlign: 'right', marginTop: '20px' }}>
                  <h4 style={{ fontWeight: 'bold' }}>Total: ${totalPrice}</h4>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Delivery Information */}
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
                <Card.Title
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  <Truck size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Delivery Information
                </Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter address" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter postal code" required />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Payment Information */}
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

          {/* Place Order Button */}
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
              Place Order
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

export default Checkout;
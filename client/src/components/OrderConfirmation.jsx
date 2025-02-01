import React from 'react';
import { Container, Card } from 'react-bootstrap';

function OrderConfirmation() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Card>
        <Card.Body>
          <Card.Title>Order Confirmed</Card.Title>
          <Card.Text>Your order has been placed successfully.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrderConfirmation;
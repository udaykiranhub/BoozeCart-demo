import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Checkout() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Card>
        <Card.Body>
          <Card.Title>Order Summary</Card.Title>
          <Card.Text>Total: $40</Card.Text>
          <Button variant="primary">Place Order</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Checkout;
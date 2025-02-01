import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';

function ProductDetails() {
  const { id } = useParams();
  const product = { id: 1, name: 'Red Wine', price: 20, description: 'A premium red wine.' };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import new images
import wine1 from "../assets/wine1 - Copy.jpg";
import wine2 from "../assets/wine3 - Copy.png";
import wine3 from "../assets/wine3 - Copy.png";
import wine4 from "../assets/wine4 - Copy.jpg";
import wine5 from "../assets/wine5 - Copy.jpg";
import wine6 from "../assets/wine9.jpg";
import wine7 from "../assets/wine10.jpg";
import wine11 from "../assets/wine11.jpg";
import wine12 from "../assets/wine12.jpg";
import wine13 from "../assets/wine13.png";
import wine14 from "../assets/wine14.png";
import wine15 from "../assets/wine16.jpg";
import wine16 from "../assets/wine17.jpg";

function ProductList() {
  // Sample product data with new images
  const products = [
    {
      id: 1,
      name: 'Red Wine',
      price: 20,
      image: wine1, // Updated image
      category: 'Wine',
      rating: 4,
    },
    {
      id: 2,
      name: 'Whiskey',
      price: 50,
      image: wine2, // Updated image
      category: 'Whisky',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vodka',
      price: 30,
      image: wine3, // Updated image
      category: 'Vodka',
      rating: 4,
    },
    {
      id: 4,
      name: 'Premium Wine',
      price: 150,
      image: wine4, // Updated image
      category: 'Wine',
      rating: 4,
    },
    {
      id: 5,
      name: 'Sparkling Wine',
      price: 120,
      image: wine5, // Updated image
      category: 'Wine',
      rating: 4,
    },
    {
      id: 6,
      name: 'Craft Vodka',
      price: 300,
      image: wine6, // Updated image
      category: 'Vodka',
      rating: 3,
    },
    {
      id: 7,
      name: 'Classic Whiskey',
      price: 800,
      image: wine7, // Updated image
      category: 'Whisky',
      rating: 4,
    },
    {
      id: 8,
      name: 'Luxury Vodka',
      price: 500,
      image: wine11, // Updated image
      category: 'Vodka',
      rating: 5,
    },
    {
      id: 9,
      name: 'Rose Wine',
      price: 90,
      image: wine12, // Updated image
      category: 'Wine',
      rating: 4,
    },
    {
      id: 10,
      name: 'Chardonnay',
      price: 70,
      image: wine13, // Updated image
      category: 'Wine',
      rating: 4,
    },
    {
      id: 11,
      name: 'Blended Whiskey',
      price: 200,
      image: wine14, // Updated image
      category: 'Whisky',
      rating: 5,
    },
    {
      id: 12,
      name: 'Rum',
      price: 150,
      image: wine15, // Updated image
      category: 'Rum',
      rating: 4,
    },
    {
      id: 13,
      name: 'Tequila',
      price: 250,
      image: wine16, // Updated image
      category: 'Tequila',
      rating: 5,
    },
  ];

  // State to manage cart items
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Featured Products
      </h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} style={{ marginBottom: '20px' }}>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
              className="card-hover"
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '10px',
                  }}
                >
                  {product.name}
                </Card.Title>
                <Card.Text style={{ color: '#555', marginBottom: '10px' }}>
                  ${product.price}
                </Card.Text>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Star size={16} style={{ marginRight: '5px', color: '#ffc107' }} />
                  <span style={{ color: '#555' }}>{product.rating} / 5</span>
                </div>
                <Button
                  variant="primary"
                  style={{ width: '100%', padding: '10px', borderRadius: '10px' }}
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={16} style={{ marginRight: '8px' }} /> Add to Cart
                </Button>
                <Link to="/buy">
                  <Button
                    variant="dark"
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', marginTop: '2%' }}
                  >
                    Buy
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { ShoppingCart, Gift, Star, Check, X, Wine, Users, Truck } from 'lucide-react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from './Footer';
function Home() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        padding: '20px 0',
      }}
    >
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div
              style={{
                textAlign: 'center',
                padding: '50px 0',
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#333' }}>
                Welcome to <span style={{ color: '#2575fc' }}>BoozeCart</span>
              </h1>
              <p style={{ fontSize: '18px', margin: '20px 0', color: '#555' }}>
                Your one-stop shop for premium alcohol. Order now and enjoy doorstep delivery!
              </p>
              <Link to="/products" style={{ textDecoration: 'none' }}> {/* Add Link here */}
                <Button
                  variant="primary"
                  size="lg"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 auto',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                  }}
                  className="button-hover"
                >
                  <ShoppingCart size={20} style={{ marginRight: '10px' }} /> Shop Now
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="mb-5">
          <Col>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
              }}
            >
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                <Star size={28} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Our Vision
              </h2>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                At BoozeCart, we aim to revolutionize the way people purchase alcohol by providing a seamless,
                secure, and enjoyable online shopping experience. Our platform ensures that every order is
                delivered responsibly, adhering to legal age restrictions and local regulations.
              </p>
            </Card>
          </Col>

          
        </Row>

        {/* Pros and Cons Section */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
                height: '100%',
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                <Check size={24} style={{ marginRight: '10px', verticalAlign: 'middle', color: '#28a745' }} />
                Pros
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', color: '#555' }}>
                <li style={{ marginBottom: '10px' }}>✅ Wide selection of premium alcohol.</li>
                <li style={{ marginBottom: '10px' }}>✅ Fast and reliable delivery.</li>
                <li style={{ marginBottom: '10px' }}>✅ Secure payment options.</li>
                <li style={{ marginBottom: '10px' }}>✅ Age verification for responsible drinking.</li>
              </ul>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
                height: '100%',
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                <X size={24} style={{ marginRight: '10px', verticalAlign: 'middle', color: '#dc3545' }} />
                Cons
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', color: '#555' }}>
                <li style={{ marginBottom: '10px' }}>❌ Limited delivery areas.</li>
                <li style={{ marginBottom: '10px' }}>❌ Restrictions on bulk orders for events.</li>
                <li style={{ marginBottom: '10px' }}>❌ Age verification can be cumbersome.</li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Featured Products Section */}
        <Row className="mb-5">
          <Col>
          <center>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
              <Wine size={28} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              Featured Products
            </h2>
          </center>


            <Row >

  

{[1].map((item) => (
              <center>
                  <Col key={item} md={4}  sm={6} md={6} lg={6} className="mb-4"   key={item}
                className="mb-4 d-flex justify-content-center align-items-center"
                >
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: '15px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      textAlign:'center'
                      
                    }}
                    className="card-hover"
                  >
                    <Card.Img
                      variant="top"
                      src={`https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                      style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                    />
                    <Card.Body>
                     
                      <Card.Text style={{ color: '#555' }}>
                        A premium selection of alcohol for every occasion.
                      </Card.Text>
                      <Link to="/cart" style={{ textDecoration: 'none' }}> {/* Wrap the button with Link */}
      
    </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </center>
              ))}
            </Row>
          </Col>




          
        </Row>




        {/* Delivery Info Section */}
        <Row className="mb-5">
          <Col>
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
              }}
            >
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                <Truck size={28} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Fast Delivery
              </h2>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                We offer fast and reliable delivery services to ensure your orders reach you on time. Our delivery
                partners are trained to handle alcohol responsibly and verify age upon delivery.
              </p>
            </Card>
          </Col>
        </Row>
      

        <Footer/>
      </Container>

      {/* Global Styles for Hover Effects */}
      <style>
        {`
          .button-hover:hover {
            background: #6a11cb !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}

export default Home;
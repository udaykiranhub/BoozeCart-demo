import React from 'react';
import { Container, Row, Col, Form, Button,Card } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
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
          Contact Us
        </h1>
        <Row className="g-4">
          {/* Contact Form */}
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
                  Send Us a Message
                </h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      background: '#2575fc',
                      border: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    className="button-hover"
                  >
                    <Send size={16} style={{ marginRight: '8px' }} /> Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
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
                  Contact Information
                </h2>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  <li style={{ marginBottom: '15px' }}>
                    <MapPin size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    <strong>Address:</strong> 123 Main St, City, Country
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <Phone size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    <strong>Phone:</strong> +123 456 7890
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <Mail size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    <strong>Email:</strong> info@boozecart.com
                  </li>
                </ul>

                {/* Embedded Map */}
                <div style={{ marginTop: '20px' }}>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#333',
                      marginBottom: '10px',
                    }}
                  >
                    Our Location
                  </h3>
                  <iframe
                    title="BoozeCart Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4f4b1e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549402999!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: '0', borderRadius: '10px' }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
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
          .button-hover:hover {
            background: #6a11cb !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
          }
        `}
      </style>
    </div>
  );
}

export default Contact;
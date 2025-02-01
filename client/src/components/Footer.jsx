import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '40px 0',
        marginTop: '40px',
      }}
    >
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>About Us</h5>
            <p>
              BoozeCart is your one-stop shop for premium alcohol. We deliver the finest selection of
              wines, whiskeys, and vodkas right to your doorstep.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li>
                <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/products" style={{ color: '#fff', textDecoration: 'none' }}>
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
                  Cart
                </a>
              </li>
              <li>
                <a href="/profile" style={{ color: '#fff', textDecoration: 'none' }}>
                  Profile
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Contact Us</h5>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '10px' }}>
                <MapPin size={16} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                123 Main St, City, Country
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Phone size={16} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                +123 456 7890
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Mail size={16} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                info@boozecart.com
              </li>
            </ul>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="mt-4">
          <Col className="text-center">
            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', margin: '0 10px' }}
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', margin: '0 10px' }}
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', margin: '0 10px' }}
              >
                <Instagram size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p style={{ margin: '0', fontSize: '14px' }}>
              &copy; {new Date().getFullYear()} BoozeCart. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
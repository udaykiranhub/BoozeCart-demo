import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { User, Calendar, Smartphone, Home, CreditCard } from 'lucide-react';

function Registration() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container style={{ maxWidth: '500px' }}>
        <Card
          style={{
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '20px',
              color: '#333',
              fontWeight: 'bold',
            }}
          >
            <User size={28} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            Register
          </h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500', color: '#555' }}>
                <Calendar size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Date of Birth
              </Form.Label>
              <Form.Control
                type="date"
                required
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ddd',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                }}
                className="form-control-hover"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500', color: '#555' }}>
                <CreditCard size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Aadhar Number
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Aadhar Number"
                required
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ddd',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                }}
                className="form-control-hover"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500', color: '#555' }}>
                <Smartphone size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Phone Number
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone Number"
                required
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ddd',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                }}
                className="form-control-hover"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500', color: '#555' }}>
                <Home size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Address
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Address"
                required
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ddd',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                }}
                className="form-control-hover"
              />
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
              Register
            </Button>
          </Form>
        </Card>
      </Container>

      {/* Add global styles for hover effects */}
      <style>
        {`
          .form-control-hover:hover {
            border-color: #2575fc !important;
            box-shadow: 0 0 8px rgba(37, 117, 252, 0.3);
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

export default Registration;
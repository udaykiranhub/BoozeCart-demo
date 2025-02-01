import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Smartphone, Lock } from 'lucide-react';

function Login() {
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
            border: 'none',
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
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Login
          </h2>
          <Form>
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
                <Lock size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
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
              Login
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

export default Login;
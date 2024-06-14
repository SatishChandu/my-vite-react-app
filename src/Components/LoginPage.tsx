import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  Alert  from 'react-bootstrap/Alert';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { users, addUser } from '../Util';
import { useAuth } from './AuthContext';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();
    //Login handler
    const loginHandler = () => {
        if(!email || !password){
            setError("Please enter the valid credentials");
            return;
        }
        const user = users.find((u) => u.email === email && u.password === password);
        if(user){
          login();
          navigate('./landingpage');
        } else {
            setError("Invalid credentials");
          }
    };
    //SignUp Handler
    const signupHandler = () => {
      setShowSignupModal(true);
    };

    const handleSignupSubmit = () => {
        if(!signupEmail || !signupPassword) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            return;
        } 
        addUser(signupEmail, signupPassword);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 3000);
        setTimeout(() => setShowSignupModal(false), 3000);
    };

  return (
    <>
    <div className="main-container">
      <div className="login-form">
          <h3 className='text-center mb-3'>Welcome to the User Profiles Access Portal</h3>
          {error && <div className="err-msg">{error}</div>}
          <Form.Label htmlFor="Email">Username
              <FloatingLabel
              controlId="Email"
              label="Enter Email address"
              className="mb-3"
              >
                  <Form.Control 
                  type="email" 
                  placeholder="name@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
          </FloatingLabel>
          </Form.Label>
              <Form.Label htmlFor="Password">Password
                  <FloatingLabel controlId="Password" label="Enter Password">
                      <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                  </FloatingLabel>
              </Form.Label>
          <div className="btn-submit">
            <Button variant="outline-primary" onClick={loginHandler}>Login</Button>{' '}
            <Button variant="outline-warning" onClick={signupHandler}>Signup</Button>   
        </div>  
      </div>

      <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Register user here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            {showAlert && (
                  <Alert variant="danger">
                      Please enter the user credentials.
                  </Alert>
              )}
              {showSuccessAlert && (
                  <Alert variant="success">
                      User Registration is successful! You can now log in with your new credentials.
                  </Alert>
              )}
              <Form.Group controlId="signupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="signupPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShowSignupModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSignupSubmit}>
              Register
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default LoginPage;
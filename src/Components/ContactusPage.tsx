import axios from 'axios';
import React, { useState } from 'react';
import { Col, FloatingLabel, Row, Form, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const ContactusPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    organization: '',
    message: '',
  })

  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if(form.checkValidity() === false){
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try{
      await axios.post("http://localhost:3030/contacts", formData);
      alert("Form submitted successfully");
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        organization: '',
        message: '',
      });
      setValidated(true);
    }catch(error){
      console.error("Error submitting form Data", error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center m-3 p-2 w-auto">
        <div className="h-100 border border-2 p-3 rounded-5">
          <h2 className='border border-3 rounded-5 text-center p-1 mb-3'>Contact Us</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="g-2 mb-3">
              <Col md>
                <FloatingLabel label="Full Name*">
                  <Form.Control 
                  type="text" 
                  placeholder="Enter your full name" 
                  required 
                  pattern='^[A-Za-z]+$'
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your full name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
              <FloatingLabel label="Email address*">
                  <Form.Control 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                  pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your email.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-2 mb-3">
              <Col md>
                <FloatingLabel label="Mobile Number*">
                  <Form.Control 
                  type="text" 
                  placeholder="Enter your mobile number" 
                  required 
                  pattern="^[6-9]\d{9}$"
                  maxLength={10}
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your mobile number.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
              <FloatingLabel label="Organization Name*">
                  <Form.Control 
                  type="text" 
                  placeholder="Enter your organization name" 
                  required
                  pattern='^[A-Za-z]+$'
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your organization name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel label="Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                className='mb-3'
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </FloatingLabel>
            <div className='text-center'>
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default ContactusPage;
import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Row, Form, Button } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import axios from 'axios';

interface Profile {
    fullName: string;
    organisation: string;
    mobile: number;
    email: string;
}

const EditProfile: React.FC = () => {
    const [users, setUsers] = useState<Profile[]>([]);
    // const [formData, setFormData] = useState();
    // const [password, setPassword] = useState('');
    // const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3030/users")
        .then(res => {
          setUsers(res.data);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });
      },[]);
    
    //From db.json
    const user = users.find((u) => u.fullName && u.organisation && u.mobile && u.email);
    
    //using AuthContext
    const {email} = useAuth();

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleChange = () => {
        
    };
  return (
    <>
      <div className="d-flex justify-content-center m-3 p-2 w-auto">
        <div className="h-100 border border-2 p-3 rounded-5">
          <h2 className='border border-3 rounded-5 text-center p-1 mb-3'>Edit User Profile</h2>
          <Form onSubmit={handleSave}>
            <Row className="g-2 mb-3">
              <Col md>
                <FloatingLabel label="Full Name">
                  <Form.Control 
                  type="text" 
                  name="fullName"
                  placeholder='Full Name'
                  onChange={handleChange}
                  value={user?.fullName}
                  />
                </FloatingLabel>
              </Col>
              <Col md>
              <FloatingLabel label="Email address">
                  <Form.Control 
                  type="email" 
                  name="email"
                  placeholder='Email address'
                  onChange={handleChange}
                  value={email}
                  disabled
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-2 mb-3">
              <Col md>
                <FloatingLabel label="New Password">
                  <Form.Control 
                  type="password" 
                  name="password"
                  placeholder='New Password'
                  onChange={handleChange}
                  value=""
                  />
                </FloatingLabel>
              </Col>
              <Col md>
              <FloatingLabel label="Confirm New Password">
                  <Form.Control 
                  type="password" 
                  name="cnfPassword"
                  placeholder='Confirm New Password'
                  onChange={handleChange}
                  value=""
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-2 mb-3">
              <Col md>
                <FloatingLabel label="Mobile Number">
                  <Form.Control 
                  type="text" 
                  name="mobile"
                  placeholder='Mobile Number'
                  onChange={handleChange}
                  value={user?.mobile}
                  disabled
                  />
                </FloatingLabel>
              </Col>
              <Col md>
              <FloatingLabel label="Organization Name">
                  <Form.Control 
                  type="text" 
                  name="organization"
                  placeholder='Organization Name'
                  onChange={handleChange}
                  value={user?.organisation}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className='text-center'>
              <Button variant="primary" size="lg" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EditProfile;
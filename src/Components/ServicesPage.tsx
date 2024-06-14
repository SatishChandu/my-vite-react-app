import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3030/services")
    .then(res => {
      setServices(res.data);
    })
    .catch(err => {
      console.error("Error fetching data:", err);
    })
  })
  return (
    <>
      <div className="service-page">
        <h2>Benefits of Using Web/Mobile App Development Solution</h2>
        <p>It will be enhancing your overall outlook on your business , and the way you would like to interact with your potential audience.</p>
        <div className='container'>
          <Container>
            <Row>
              {services.map(service => (
                <Col key={service.id} sm={12} md={6} lg={4} className='mb-4'>
                  <Card className='m-2 p-2 h-100'>
                    <div>
                      <Card.Img variant="top" src={service.image} className="w-auto border border-black"/>
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

        </div>
      </div>
      <Outlet />
    </>
  )
}

export default ServicesPage;
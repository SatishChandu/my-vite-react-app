import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import bgImage from '../assets/bg_img.jpg';
import { Outlet } from 'react-router-dom';


interface Profile{
  id: number;
  fullName: string;
  designation: string;
  organisation: string;
  achievements: string[];
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<Profile[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3030/users")
    .then(res => {
      setUsers(res.data);
    })
    .catch(err => {
      console.error("Error fetching data:", err);
    });
  },[]);

  return (
    <>
        <div className='d-flex justify-content-center flex-column m-2 w-auto p-2 h-100'>
           {/* <img  src={bgImage} width="auto"/> */}
              <div>
                <h2>Some of the User Profiles may help you to crafting of Web/Mobile apps that's what exactly you need</h2>
              </div>
              <div>
              <Container>
            <Row>
              {users.map(user => (
                <Col key={user.id} sm={12} md={6} lg={4} className="p-3">
                  <Card className='p-2 h-100'>
                    <Card.Title>{user.fullName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.designation}</Card.Subtitle>
                    <Card.Text>
                      <strong>Organization: </strong> {user.organisation}
                    </Card.Text>
                    <Card.Text>
                      <strong>Achievements: </strong>
                      <ul>
                        {user.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>

          </Container>
              </div>
          {/* <Container>
            <Row>
              {users.map(user => (
                <Col key={user.id} sm={12} md={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Title>{user.fullName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.designation}</Card.Subtitle>
                    <Card.Text>
                      <strong>Organization: </strong> {user.organisation}
                    </Card.Text>
                    <Card.Text>
                      <strong>Achievements: </strong>
                      <ul>
                        {user.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>

          </Container> */}
           <Outlet />
        </div>

    </>
  )
}

export default HomePage;
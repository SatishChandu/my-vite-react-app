import { Dropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import HomeMegaMenu from "./MegaMenu/HomeMegaMenu";
import ServicesMegaMenu from "./MegaMenu/ServicesMegaMenu";
import ContactusMegaMenu from "./MegaMenu/ContactusMegaMenu";
import EnquiryMegaMenu from "./MegaMenu/EnquiryMegaMenu";
import Avatar from 'react-avatar';
import '../App.css';
import { useAuth } from "./AuthContext";

const LandingPage: React.FC = () => {
    const {email, logout} = useAuth();
    const handleLogout = () => {
        logout();
    }
    return (
        <>
        
        <div className="d-flex justify-content-center flex-column m-2 p-2 w-auto" >
            <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
            <h1>Welcome to the User Profile Page</h1>
            <div className="ms-auto mb-3">

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                        <Avatar name={email} size="50" round="20px" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ zIndex: 1050 }}>
                      <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </div>
            </div>
            <Navbar bg="primary" sticky="top" style={{zIndex: 1000}}>
            <Container fluid>
                <LinkContainer to="home">
                    <Nav.Link className="text-light">
                        Home
                        <HomeMegaMenu />
                    </Nav.Link>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="services">
                        <Nav.Link className="text-light">
                            Services
                            <ServicesMegaMenu />
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="contactus">
                        <Nav.Link className="text-light">
                            Contact us
                            <ContactusMegaMenu />
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="enquiry">
                        <Nav.Link className="text-light">
                            Enquiry
                            <EnquiryMegaMenu />
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </div>
        </>
    );
    
};

export default LandingPage;
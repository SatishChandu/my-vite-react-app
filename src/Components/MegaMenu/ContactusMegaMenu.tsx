import React from 'react';
import { Link } from 'react-router-dom';

const ContactusMegaMenu: React.FC = () => {
  return (
    <>
    <div className="mega-menu">
        <ul>
            <li><Link to="/landingpage/contactus/subcontact1">Subcontact 1</Link></li>
            <li><Link to="/landingpage/contactus/subcontact2">Subcontact 2</Link></li>
            <li><Link to="/landingpage/contactus/subcontact3">Subcontact 3</Link></li>
        </ul>
    </div>    
    </>
)
}

export default ContactusMegaMenu;
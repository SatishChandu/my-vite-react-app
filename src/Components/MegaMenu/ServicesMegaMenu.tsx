import React from 'react';
import { Link } from 'react-router-dom';

const ServicesMegaMenu: React.FC = () => {
  return (
    <>
    <div className="mega-menu">
      <ul>
        <li><Link to="/landingpage/services/subservice1">Subservice 1</Link></li>
        <li><Link to="/landingpage/services/subservice2">Subservice 2</Link></li>
        <li><Link to="/landingpage/services/subservice3">Subservice 3</Link></li>
      </ul>
    </div>
    </>
  )
}

export default ServicesMegaMenu
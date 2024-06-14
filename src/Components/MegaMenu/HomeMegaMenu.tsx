import React from 'react';
import { Link } from 'react-router-dom';

const HomeMegaMenu: React.FC = () => {
  return (
    <>
    <div className="mega-menu">
      <ul>
        <li><Link to="/landingpage/home/subpage1">Subpage 1</Link></li>
        <li><Link to="/landingpage/home/subpage2">Subpage 2</Link></li>
        <li><Link to="/landingpage/home/subpage3">Subpage 3</Link></li>
      </ul>
    </div>
    </>
  )
}

export default HomeMegaMenu;
import React from 'react';
import { Link } from 'react-router-dom';

const EnquiryMegaMenu: React.FC = () => {
  return (
    <div className="mega-menu">
      <ul>
        <li><Link to="/landingpage/enquiry/subenquiry1">Subenquiry 1</Link></li>
        <li><Link to="/landingpage/enquiry/subenquiry2">Subenquiry 2</Link></li>
        <li><Link to="/landingpage/enquiry/subenquiry3">Subenquiry 3</Link></li>
      </ul>
    </div>
)
}

export default EnquiryMegaMenu;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage.tsx';
import LandingPage from './Components/LandingPage.tsx';
import HomePage from './Components/HomePage.tsx';
import ServicesPage from './Components/ServicesPage.tsx';
import ContactusPage from './Components/ContactusPage.tsx';
import EnquiryPage from './Components/EnquiryPage.tsx';
import Subpage1 from './Components/home/Subpage1.tsx';
import Subpage2 from './Components/home/Subpage2.tsx';
import Subpage3 from './Components/home/Subpage3.tsx';
import Subservice1 from './Components/services/Subservice1.tsx';
import Subservice2 from './Components/services/Subservice2.tsx';
import Subservice3 from './Components/services/Subservice3.tsx';
import Subcontact1 from './Components/contactus/Subcontact1.tsx';
import Subcontact2 from './Components/contactus/Subcontact2.tsx';
import Subcontact3 from './Components/contactus/Subcontact3.tsx';
import Subenquiry1 from './Components/enquiry/Subenquiry1.tsx';
import Subenquiry2 from './Components/enquiry/Subenquiry2.tsx';
import Subenquiry3 from './Components/enquiry/Subenquiry3.tsx';
import { AuthProvider } from './Components/AuthContext.tsx';
import PrivateRoute from './Components/PrivateRoute.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0Callback from './Components/Auth0Callback.tsx';
import EditProfile from './Components/EditProfile.tsx';

const App: React.FC = () => {
  return (
    <>
    <Auth0Provider
    domain="dev-iwi5abr18yz3piud.us.auth0.com"
    clientId="JGflAGltYC0gY7lSAheKBlVpOnRtf2tI"
    authorizationParams={{
      redirect_uri: window.location.origin + '/callback',
    }}
    >
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/callback" element={<Auth0Callback />} />
          <Route path="landingpage" element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
            }>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />}>
              <Route path="subpage1" element={<Subpage1 />} />
              <Route path="subpage2" element={<Subpage2 />} />
              <Route path="subpage3" element={<Subpage3 />} />
            </Route>
            <Route path="services" element={<ServicesPage />}>
              <Route path="subservice1" element={<Subservice1 />} />
              <Route path="subservice2" element={<Subservice2 />} />
              <Route path="subservice3" element={<Subservice3 />} />
            </Route>
            <Route path="contactus" element={<ContactusPage />}>
              <Route path="subcontact1" element={<Subcontact1 />} />
              <Route path="subcontact2" element={<Subcontact2 />} />
              <Route path="subcontact3" element={<Subcontact3 />} />
            </Route>
            <Route path="enquiry" element={<EnquiryPage />}>
            <Route path="subenquiry1" element={<Subenquiry1 />} />
            <Route path="subenquiry2" element={<Subenquiry2 />} />
            <Route path="subenquiry3" element={<Subenquiry3 />} />
            </Route>
            <Route path="editprofile" element={<EditProfile />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    </Auth0Provider>
    </>
  );
}

export default App;

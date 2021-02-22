import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UploadFacturePage from './components/views/uplaodFacturePage/uploadFacturePage'
import LoginPage from "./components/views/LoginPage/LoginPage.js";
import RegisterPage from "./components/views/RegisterPage/RegisterPage.js";
import NavBar from "./components/views/Navbar/Navbar.js";

import Auth from "../src/authentication/auth";

function App() {
  return (
    <Router>

    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/facture/upload" component={Auth(UploadFacturePage,true)} />
      </div>
    </Suspense>
    </Router>

  );
}

export default App;
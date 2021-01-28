import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UploadFacturePage from './components/views/uplaodFacturePage/uploadFacturePage'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
      
          <Route exact path="/" component={UploadFacturePage} />
      </div>
      </Router>
    </Suspense>
  );
}

export default App;

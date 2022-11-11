import React from 'react'
// import '/bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import MyRoutes from './Router/MyRoutes'
// import { BrowserRouter as Router, Routes, Route, Link } from 'Router'

// import Login from './components/Signin'
// import SignUp from './components/Signup'
import './App.css';
// import MyRoutes from './Router/MyRoutes';

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <MyRoutes/>
        </div>
      </div>
    </div>
  );
}

export default App;

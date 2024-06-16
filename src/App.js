import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './DataArrays/RoutesData';
import Project from './Components/Projects';
import BackButton from './BackButton';


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Project />} />
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <div className="footer">
          <BackButton />
        </div>
      </div>
    </Router>
  );

}
export default App;

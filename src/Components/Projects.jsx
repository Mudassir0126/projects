import React from "react";
import { useNavigate } from "react-router-dom";
import data from '../DataArrays/RoutesData'
import './Projects.css'


function Project() {
    
  const navigate = useNavigate();

  return (
    <div className="parent">
      <div className="title">
        <h1>My Projects</h1>
      </div>
      <div className="content">
        {
            data.map((project) => (
            <button onClick={() => navigate(project.path)}>
                <h2>{project.name}</h2>
            </button>
            ))
        } 
        
      </div>
    </div>
  );
}

export default Project;

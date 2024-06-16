// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Assuming you want to add some styles for the button

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate('/')}>
      Projects
    </button>
  );
};

export default BackButton;

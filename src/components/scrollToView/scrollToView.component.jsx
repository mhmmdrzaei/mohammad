import React, { useState } from 'react';
import { useNavigate,Link, useLocation } from "react-router-dom";


const ScrollToView = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust the timeout as needed to ensure the navigation completes before scrolling
  };

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      scrollToAbout();
    } else {
      scrollToAbout();
    }
  };


  return (


<Link to="/"
      onClick={handleClick}>
 About </Link>
  );
};

export default ScrollToView;

//Import React.

//This component uses the useState hook to manage the visibility state of the button
//and the useEffect hook to add an event listener for the scroll event.

//The toggleVisibility function sets the button visibility based on the scroll position.

//The scrollToTop function smoothly scrolls the page to the top when the button is clicked.

import React, { useState, useEffect } from 'react';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <button onClick={scrollToTop}>
          ↑ Top
        </button>
      }
    </div>
  );
};

export default TopButton;
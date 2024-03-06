import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  const wrappedRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        // If the scroll position is at the top, scroll down by 20 pixels
        window.scrollTo(0, 100);
      } else {
        // Otherwise, scroll to the top
        window.scrollTo(0, 0);
      }
    };

    const wrappedElement = wrappedRef.current;
    if (wrappedElement) {
      wrappedElement.addEventListener("click", handleClick);
    }

    return () => {
      if (wrappedElement) {
        wrappedElement.removeEventListener("click", handleClick);
      }
    };
  }, [location]);

  return <div ref={wrappedRef}>{props.children}</div>;
};

export default ScrollToTop;


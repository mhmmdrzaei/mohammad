import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  const wrappedRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      // Move up by 10 pixels from the current scroll position
      window.scrollTo(0, 0);
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

import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollBy = (props) => {
  const location = useLocation();
  const wrappedRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      // Move up by 10 pixels from the current scroll position
      window.scrollBy(0, -200);
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

export default ScrollBy;

import { useEffect, useState } from "react";

function getWindowPositions() {
  const { scrollX, scrollY } = window;
  return {
    scrollX,
    scrollY,
  };
}

export const useWindowPositions = () => {
  const [windowPositions, setWindowPositions] = useState(getWindowPositions());

  useEffect(() => {
    function handleScroll() {
      setWindowPositions(getWindowPositions());
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return windowPositions;
};
// import { useLayoutEffect, useState } from "react";

// export const useWindowPosition = () => {
//   const [scrollPosition, setPosition] = useState(0);
//   useLayoutEffect(() => {
//     function updatePosition() {
//       setPosition(window.pageYOffset);
//     }
//     window.addEventListener("scroll", updatePosition);
//     updatePosition();
//     return () => window.removeEventListener("scroll", updatePosition);
//   }, []);
//   return scrollPosition;
// };

import { useEffect, useRef } from "react";

const MagneticCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
        }
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: "30px",
        height: "30px",
        border: "2px solid red",
        borderRadius: "50%",
        transition: "transform 0.2s ease-out",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MagneticCursor;

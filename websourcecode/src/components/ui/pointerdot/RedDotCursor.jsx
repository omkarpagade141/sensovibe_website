import { useState, useEffect } from "react";

const RedDotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "10px",
        height: "10px",
        backgroundColor: "#F58220",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "top 0.1s ease-out, left 0.1s ease-out",
        zIndex: 9999,
      }}
    />
  );
};

export default RedDotCursor;

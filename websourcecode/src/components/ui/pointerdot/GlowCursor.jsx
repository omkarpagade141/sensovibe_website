import { useState, useEffect } from "react";

const GlowCursor = () => {
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
        width: "30px",
        height: "30px",
        background: "rgba(255, 0, 0, 0.2)",
        boxShadow: "0 0 10px rgba(255, 0, 0, 0.8)",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "top 0.15s ease-out, left 0.15s ease-out",
        zIndex: 9999,
      }}
    />
  );
};

export default GlowCursor;

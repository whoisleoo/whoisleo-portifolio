import React, { useEffect, useRef } from "react";

const HoverEffect = ({ children, className = "" }) => {
  const ref = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const cursor = document.createElement("div");
    cursor.className = "hover-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: white;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.3s ease;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const handleMouseEnter = (e) => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      element.style.cursor = "none";
    };

    const handleMouseLeave = (e) => {
      cursor.style.transform = "translate(-50%, -50%) scale(0)";
      element.style.cursor = "";
    };

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default HoverEffect;
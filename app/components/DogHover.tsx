"use client";

import Image from "next/image";
import { useState } from "react";

export default function DogHover() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    setPos({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
        style={{
          cursor: "pointer",
          color: "var(--link-color)",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationThickness: "1px",
        }}
      >
        Oscar
      </span>
      {visible && (
        <span
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, calc(-100% - 12px))",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <Image
            src="/images/oscar.jpg"
            alt="Oscar"
            width={260}
            height={260}
            className="shadow-lg object-cover"
            style={{ borderRadius: "2px" }}
            style={{ display: "block" }}
          />
        </span>
      )}
    </>
  );
}

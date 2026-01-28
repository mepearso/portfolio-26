"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CARD_HEIGHT = 220; // Approximate height of the preview card

interface LinkMetadata {
  title: string;
  description: string;
  objectCover?: boolean;
  image?: string;
  video?: string;
}

const DEBUG_ALWAYS_SHOW = false; // Set to false when done testing

const linkMetadata: Record<string, LinkMetadata> = {
  "https://www.raycast.com/": {
    title: "Raycast",
    description: "Cult-favorite productivity tool built by and for developers.",
    video: "/images/raycast.mp4",
  },
  "https://pitch.com/": {
    title: "Pitch",
    description: "Collaborative presentation software for modern teams.",
    image: "/images/pitch.png",
  },
  "https://bakkenbaeck.com/": {
    title: "Bakken & Bæck",
    description:
      "Design and technology studio building digital products, from zero to launch.",
    video: "/images/bb.mp4",
    objectCover: true,
  },
};

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function LinkPreview({
  href,
  children,
  className = "",
  target,
}: LinkPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, showBelow: false });
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const metadata = linkMetadata[href];

  const handleMouseEnter = () => {
    if (!metadata) return;

    timeoutRef.current = setTimeout(() => {
      const rect = linkRef.current?.getBoundingClientRect();
      if (rect) {
        const showBelow = rect.top < CARD_HEIGHT;
        setPosition({
          x: rect.left + rect.width / 2,
          y: showBelow ? rect.bottom : rect.top,
          showBelow,
        });
      }
      setIsVisible(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // If no metadata, just render a regular link
  if (!metadata) {
    return (
      <a href={href} className={className} target={target}>
        {children}
      </a>
    );
  }

  return (
    <>
      {/* Preload video */}
      {metadata.video && (
        <link rel="preload" href={metadata.video} as="video" />
      )}
      <a
        ref={linkRef}
        href={href}
        className={className}
        target={target}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
      {mounted &&
        (isVisible || (DEBUG_ALWAYS_SHOW && metadata.title === "Raycast")) &&
        createPortal(
          <div
            className={`link-preview-card ${position.showBelow ? "show-below" : ""}`}
            style={{
              left: DEBUG_ALWAYS_SHOW ? 500 : position.x,
              top: DEBUG_ALWAYS_SHOW ? 500 : position.y,
            }}
          >
            <div className="link-preview-media">
              {metadata.video ? (
                <video
                  src={metadata.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className={metadata.objectCover ? "object-cover" : ""}
                />
              ) : metadata.image ? (
                <Image
                  src={metadata.image}
                  alt={metadata.title}
                  width={280}
                  height={140}
                  style={{ objectFit: "cover" }}
                />
              ) : null}
            </div>
            <div className="link-preview-content">
              <div className="link-preview-title">{metadata.title}</div>
              <div className="link-preview-description">
                {metadata.description}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

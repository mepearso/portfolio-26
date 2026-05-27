"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CARD_HEIGHT = 180;

interface LinkMetadata {
  objectCover?: boolean;
  image?: string;
  video?: string;
}

const linkMetadata: Record<string, LinkMetadata> = {
  "https://www.raycast.com/": {
    image: "/images/raycast.jpg",
  },
  "https://pitch.com/": {
    image: "/images/pitch.jpg",
  },
  "https://bakkenbaeck.com/": {
    video: "/images/bb.mp4",
    objectCover: true,
  },
  "https://sunriserobotics.co/": {
    image: "/images/sunrise-robotics.jpg",
  },
  oscar: {
    image: "/images/oscar.jpg",
    objectCover: true,
  },
};

interface LinkPreviewProps {
  href?: string;
  previewKey?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function LinkPreview({
  href,
  previewKey,
  children,
  className = "",
  target,
}: LinkPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, showBelow: false });
  const triggerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const metadata = linkMetadata[previewKey ?? href ?? ""];

  const handleMouseEnter = () => {
    if (!metadata) return;
    timeoutRef.current = setTimeout(() => {
      const rect = triggerRef.current?.getBoundingClientRect();
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const eventProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const preview =
    mounted && isVisible && metadata
      ? createPortal(
          <div
            className={`link-preview-card ${position.showBelow ? "show-below" : ""}`}
            style={{ left: position.x, top: position.y }}
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
                  alt=""
                  width={240}
                  height={180}
                  style={{ objectFit: "cover" }}
                  className={metadata.objectCover ? "object-cover" : ""}
                />
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  if (href) {
    return (
      <>
        {metadata?.video && (
          <link rel="preload" href={metadata.video} as="video" />
        )}
        <a
          ref={triggerRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={className}
          target={target}
          {...eventProps}
        >
          {children}
        </a>
        {preview}
      </>
    );
  }

  return (
    <>
      <span
        ref={triggerRef as React.RefObject<HTMLSpanElement>}
        className={`link-preview-trigger${className ? ` ${className}` : ""}`}
        {...eventProps}
      >
        {children}
      </span>
      {preview}
    </>
  );
}

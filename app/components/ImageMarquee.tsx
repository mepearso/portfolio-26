"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageMarqueeProps {
  images: string[];
  speed?: number;
  direction?: "left" | "right";
}

export default function ImageMarquee({
  images,
  speed = 20,
  direction = "left",
}: ImageMarqueeProps) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (direction === "left") {
          return prev - 2;
        } else {
          return prev + 2;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, direction]);

  // Reset position for infinite loop
  useEffect(() => {
    const imageWidth = 300; // Approximate width of each image
    const gap = 1; // Gap between images
    const totalWidth = (imageWidth + gap) * images.length;

    if (direction === "left" && position < -totalWidth) {
      setPosition(0);
    } else if (direction === "right" && position > totalWidth) {
      setPosition(0);
    }
  }, [position, direction, images.length]);

  return (
    <div className="overflow-hidden w-full h-full">
      <div
        className="flex gap-1 items-center h-full"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image}
              alt={`Marquee image ${index + 1}`}
              width={300}
              height={350}
              className="object-contain shadow-lg h-[150px] w-auto"
              style={{ width: "auto", height: "350px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Silder = () => {
  const imageCount = 5;

  // Responsive width & height
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setSize({ width: 500, height: 500 }); // lg
      } else {
        setSize({ width: 300, height: 300 });
      }
    };

    updateSize(); // initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div>
      <div
        className="slider w-[90vw] md:w-[300px] lg:w-[500px] mx-auto overflow-hidden rounded-2xl"
        style={{
          height: `${size.height}px`,
          "--width": `${size.width}px`,
          "--height": `${size.height}px`,
          "--quantity": imageCount,
        } as React.CSSProperties}
      >
        <div
          className="list flex relative"
          style={{
            minWidth: `calc(${size.width}px * ${imageCount})`,
          }}
        >
          {Array.from({ length: imageCount }, (_, i) => (
            <div
              key={i}
              className="item overflow-hidden p-4"
              style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
                "--position": i + 1,
              } as React.CSSProperties}
            >
              <Image
                src={`/img/slider/${i + 1}.png`}
                alt={`Image ${i + 1}`}
                width={size.width}
                height={size.height}
                className="rounded-md shadow-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Silder;

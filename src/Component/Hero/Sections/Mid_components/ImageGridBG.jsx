import React from "react";
import styles from "./midComponent.module.css";

const images = [
  {
    id: 1,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 1",
    r: 1,
    c: 3,
    mr: 1,
    mc: 2,
  },
  {
    id: 2,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 2",
    r: 1,
    c: 7,
    mr: 1,
    mc: 3,
  },
  {
    id: 3,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 3",
    r: 2,
    c: 2,
    mr: 2,
    mc: 1,
  },
  {
    id: 4,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 4",
    r: 2,
    c: 6,
    mr: 2,
    mc: 3,
  },
  {
    id: 5,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 5",
    r: 3,
    c: 4,
    mr: 3,
    mc: 2,
  },
  {
    id: 6,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 6",
    r: 3,
    c: 8,
    mr: 3,
    mc: 3,
  },
  {
    id: 7,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 7",
    r: 4,
    c: 1,
    mr: 4,
    mc: 1,
  },
  {
    id: 8,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 8",
    r: 4,
    c: 4,
    mr: 4,
    mc: 2,
  },
  {
    id: 9,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 9",
    r: 5,
    c: 2,
    mr: 5,
    mc: 1,
  },
  {
    id: 10,
    src: "/src/Assets/head-bg-01.jpg",
    alt: "Image 10",
    r: 5,
    c: 6,
    mr: 5,
    mc: 3,
  },
];

const ImageGridBG = () => {
  return (
    <div
      className={`${styles.grid} absolute top-0 left-0 w-full h-full bg-black/50`}
    >
      {images.map((img) => (
        <div
          key={img.id}
          className="aspect-square overflow-hidden"
          style={{
            "--r": img.r,
            "--c": img.c,
            "--mr": img.mr,
            "--mc": img.mc,
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGridBG;

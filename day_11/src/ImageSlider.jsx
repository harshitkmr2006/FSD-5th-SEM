import React, { useState, useEffect } from "react";

const ImageSlider = () => {

  const images = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500",
    "https://picsum.photos/id/1020/800/500"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div
      style={{
        width: "800px",
        height: "500px",
        margin: "50px auto",
        overflow: "hidden"
      }}
    >

      <img
        src={images[index]}
        alt="Slider"
        style={{
          width: "800px",
          height: "500px",
          objectFit: "cover"
        }}
      />

    </div>
  );
};

export default ImageSlider;
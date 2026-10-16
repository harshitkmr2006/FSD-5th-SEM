import React from "react";

const ImageSlider = () => {

    const images = [
        "https://picsum.photos/id/1015/500/300",
        "https://picsum.photos/id/1016/500/300",
        "https://picsum.photos/id/1018/500/300",
        "https://picsum.photos/id/1020/500/300"
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const previousImage = () => {

        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }

    };

    const nextImage = () => {

        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }

    };

    return (
        <div>

            <h2>Image Slider</h2>

            <img
                src={images[currentIndex]}
                alt="Slider"
                width="500"
                height="300"
            />

            <br />
            <br />

            <button onClick={previousImage}>
                ←
            </button>

            <button onClick={nextImage}>
                →
            </button>

        </div>
    );
};

export default ImageSlider;
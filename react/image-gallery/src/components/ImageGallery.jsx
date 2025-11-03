import { useState } from 'react';
import '../styles/ImageGallery.css';

function ImageGallery() {
    const images = [
        'https://picsum.photos/id/323/800/450',
        'https://picsum.photos/id/129/800/450',
        'https://picsum.photos/id/235/800/450',
        'https://picsum.photos/id/1075/800/450',
        'https://picsum.photos/id/229/800/450',
        'https://picsum.photos/id/536/800/450',
        'https://picsum.photos/id/875/800/450',
    ];
    // currentImageIndex = stores which image index is currently showing
    // setCurrentImageIndex = function to update the value
    // useState(0) = set initial index to 0
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        // % helps the counter restart at 0 when it reaches the end, so the slider loops forever.
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="main-container">
            <h1>Interesting places</h1>
            <img
                className="gallery-img"
                src={images[currentImageIndex]}
                alt={`Slide  ${currentImageIndex + 1}`}
            />

            <div>
                <button className="gallery-btn" onClick={prevImage}>
                    Previous
                </button>
                <button className="gallery-btn" onClick={nextImage}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ImageGallery;

import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg group">
            {/* Images */}
            <div
                className="w-full h-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <img
                            src={img.startsWith('http') ? img : `/uploads/${img}`}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows (visible on hover) */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={prevSlide}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

            {/* Indicators/Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

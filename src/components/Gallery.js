import React, { useState } from 'react';

const Gallery = () => {
    // Import all images from the Gallery folder
    const importAll = (r) => r.keys().map((fileName) => r(fileName).default || r(fileName));
    const images = importAll(require.context("../assets/Gallery", false, /\.(png|jpe?g|svg)$/));
    
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
         <div className="carousel-heading">
                <h1 className="text-center font-bold text-3xl">Our Gallery</h1>
            </div>
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((src, index) => (
                    <div 
                        key={index}
                        className={`${
                            index === activeIndex ? 'block' : 'hidden'
                        } duration-700 ease-in-out`}
                        data-carousel-item={index === activeIndex ? 'active' : ''}
                    >
                        <img 
                            src={src}
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Gallery  ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center pt-4">
                <button 
                    type="button" 
                    className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" 
                    onClick={handlePrevious}
                    data-carousel-prev
                >
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button 
                    type="button" 
                    className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" 
                    onClick={handleNext}
                    data-carousel-next
                >
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Gallery;
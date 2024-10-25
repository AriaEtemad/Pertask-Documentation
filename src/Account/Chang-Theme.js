import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChangeThemeBackground = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  const images = ["/imges/them1.jpg", "/imges/theme2.jpg"];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const showNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeGallery();
    }
  };

  return (
    <div
      className={`flex-1 lg:px-4 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="title-container mb-10">
        <h6 className="text-5xl font-light mb-6">
          Change Theme & Image Background
        </h6>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-4">
              Change Theme and Image Background
            </h3>
            <p className="mb-4">
              You can change the theme color and/or background image:
            </p>
            <div className="instructions pl-4">
              <p className="mb-2">1. Log in to your account.</p>
              <p className="mb-2">
                2. Click on your name (top of the page, right).
              </p>
              <p className="mb-2">
                3. Select <strong>Theme</strong>.
              </p>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-4">
              <img
                src="/imges/them1.jpg"
                alt="Theme 1"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(0)}
              />
              <img
                src="/imges/theme2.jpg"
                alt="Theme 2"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(1)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="video-wrapper mb-10 text-left">
        <video
          src="/video/theme.mp4"
          poster="/imges/poster_theme.png"
          controls
          loop
          className="w-full border border-gray-700"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Horizontal line */}
      <hr className="line border-t border-gray-400 mb-5" />

      {/* Footer with Next link */}
      <div className="footer-links">
        <strong>Next:</strong>
        <Link
          className="next-link text-blue-600 hover:underline font-medium ml-1"
          to="/Account/Linked-Devices"
        >
          Logs & Linked Devices
        </Link>
      </div>

      {/* Social Icons */}
      <div className="social-icons mt-8">
        <button className="text-gray-600 hover:text-blue-600 font-weight text-3xl">
          <FaFacebookSquare />
        </button>
        <button
          className="text-gray-600 hover:text-blue-600 font-weight text-3xl"
          onClick={() => {
            // Define the action here
          }}
        >
          <FaLinkedin />
        </button>
        <button
          className="text-gray-600 hover:text-blue-600 font-weight text-3xl"
          onClick={() => {
            // Define the action here
          }}
        >
          <FiMail />
        </button>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="relative bg-white p-10 rounded-lg max-w-5xl mx-auto">
            <img
              src={images[currentImageIndex]}
              alt={`${currentImageIndex + 1}`}
              className="max-w-full max-h-800 object-contain mx-auto"
            />
            {/* Buttons Container */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                className={`text-gray hover:text-blue-600 text-3xl ${
                  currentImageIndex === 0 ? "opacity-50" : ""
                }`}
                onClick={showPreviousImage}
                disabled={currentImageIndex === 0}
              >
                <FaChevronLeft />
              </button>
              <button
                className={`text-gray text-3xl hover:text-blue-600 ${
                  currentImageIndex === images.length - 1 ? "opacity-50" : ""
                }`}
                onClick={showNextImage}
                disabled={currentImageIndex === images.length - 1}
              >
                <FaChevronRight />
              </button>
            </div>
            <button
              className="absolute top-4 right-4 text-gray hover:text-blue-600 text-xl"
              onClick={closeGallery}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeThemeBackground;

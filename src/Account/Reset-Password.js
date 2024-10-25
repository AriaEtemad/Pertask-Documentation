import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);
  const images = [
    "/imges/pass1.jpg",
    "/imges/pass2.jpg",
    "/imges/pass3.jpg",
    "/imges/pass4.jpg",
  ];

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
        <h1 className="text-5xl font-light mb-6">Reset your password</h1>

        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-4">Forget Password</h3>
            <p className="mb-4">
              To reset your password, please follow these detailed instructions:
            </p>
            <div className="instructions pl-4">
              <p className="mb-2">1. Open the Login page.</p>
              <p className="mb-2">
                2. Under the <strong>Login</strong> button, click on the{" "}
                <strong>Forget Password</strong> link.
              </p>
              <p className="mb-2 mt-24">
                3. On the <strong>Forget Password</strong> page, enter your
                email address.
              </p>
              <p className="mb-2 mt-10">
                4. You will receive an email containing a verification code.
              </p>
              <p className="mb-2 mt-52">
                5. Enter this code in the corresponding field.
              </p>
              <p className="mb-2 mt-80">
                6. Now, you can change your password.
              </p>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Reset password step ${index + 1}`}
                  className="block mb-4 border border-gray-700 cursor-pointer max-w-xs max-h-80" // Set max size for base view
                  onClick={() => openGallery(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="video-wrapper mb-10 text-left">
        <video
          src="/video/password.mp4"
          poster="/imges/poster_pass.png"
          controls
          loop
          className="w-full border border-gray-700"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Horizontal line */}
      <hr className="line border-t border-gray-400 mb-5" />

      <div className="footer-links">
        <strong>Next:</strong>
        <Link
          className="next-link text-blue-600 font-medium ml-1"
          to="/Account/Change-Info"
        >
          Change Your Account Info
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
              alt="" // Simplified alt attribute
              className="max-w-full max-h-[500px] object-contain mx-auto" // Set max size for gallery
            />
            {/* Buttons Container */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                className={`text-gray hover:text-blue-600 text-3xl ${
                  currentImageIndex === 0
                }`}
                onClick={showPreviousImage}
                disabled={currentImageIndex === 0} // Disable button if at the first image
              >
                <FaChevronLeft />
              </button>
              <button
                className={`text-gray hover:text-blue-600 text-3xl ${
                  currentImageIndex === images.length - 1
                }`}
                onClick={showNextImage}
                disabled={currentImageIndex === images.length - 1} // Disable button if at the last image
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

export default ResetPassword;

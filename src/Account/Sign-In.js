import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"; // Import navigation and close icons
import { Link } from "react-router-dom";

const Signin = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  const images = ["/imges/1 account.jpg", "/imges/2 account.jpg"];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
        <h1 className="text-5xl font-light mb-6">
          Sign in and Sign out in Pertask
        </h1>
        {/* Sign in section */}
        <div className="section1 mb-6 flex flex-col lg:flex-row items-start lg:items-start">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-medium mb-4">Sign in</h3>
            <p className="mb-4">
              By following these steps you can sign in to your account:
            </p>
            <div className="instructions pl-8 mb-6">
              <p className="mb-2">
                1. Type PerTask URL address into the browser address bar.
              </p>
              <p className="mb-2">
                2. Enter your credentials (Email & Password).
              </p>
              <p className="mb-2">
                3. Click <strong>Login</strong> button
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 lg:pl-4">
            {/* Image 1 */}
            <img
              className="w-full mx-auto lg:mx-0 border border-gray-700 cursor-pointer"
              src="/imges/1 account.jpg"
              alt="" // Updated alt attribute
              onClick={() => openGallery(0)} // Open gallery on click
            />
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="video-wrapper mb-10 text-left mt-40">
        <video
          src="/video/sign in.mp4"
          poster="/imges/poster_sign.png"
          controls
          loop
          className="w-full border border-gray-700"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Horizontal line */}
      <hr className="line border-t border-gray-400 mb-10" />

      <section>
        {/* Sign out section */}
        <div className="section2 mb-6 flex flex-col lg:flex-row items-start lg:items-start">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-medium mb-4">Sign out</h3>
            <p className="mb-4">
              By following these steps you can sign out of your account:
            </p>
            <div className="pl-8 mb-6">
              <p className="mb-2">
                1. Click on your name (top of the page, right).
              </p>
              <p className="mb-2">
                2. Click on the <strong>Log out</strong> button
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 lg:pl-4">
            {/* Image 2 */}
            <img
              className="w-full mx-auto lg:mx-0 border border-gray-700 cursor-pointer"
              src="/imges/2 account.jpg"
              alt="" // Updated alt attribute
              onClick={() => openGallery(1)} // Open gallery on click
            />
          </div>
        </div>

        {/* Video section */}
        <div className="video-wrapper1 mb-10 text-left mt-40">
          <video
            src="/video/log out.mp4"
            poster="/imges/poster_sign out.png"
            controls
            loop
            className="w-full border border-gray-700"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Horizontal line */}
        <hr className="line1 border-t border-gray-400 mb-5" />
      </section>

      <div className="footer-links">
        <strong>Next:</strong>
        <Link
          className="next-link text-blue-600 hover:underline font-medium ml-1"
          to="/Account/Reset-Password"
        >
          Reset your password
        </Link>
      </div>

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
          onClick={handleBackgroundClick} // Handle clicks outside the image
        >
          <div className="relative bg-white p-10 rounded-lg max-w-5xl mx-auto">
            <img
              src={images[currentImageIndex]}
              alt="" // Simplified alt attribute
              className="max-w-full max-h-800 object-contain mx-auto"
            />
            {/* Buttons Container */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                className="text-gray hover:text-blue-600 text-3xl"
                onClick={showPreviousImage}
              >
                <FaChevronLeft />
              </button>
              <button
                className="text-gray hover:text-blue-600 text-3xl"
                onClick={showNextImage}
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

export default Signin;

import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const CommentsInPertask = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);
  const images = [
    "/imges/comment1.jpg",
    "/imges/comment2.jpg",
    "/imges/comment3.jpg",
    "/imges/comment4.jpg",
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
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
        <h1 className="text-5xl font-light mb-6">Comments in Pertask</h1>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-4">Comments</h3>
            <p className="mb-4">
              To manage and interact with comments effectively, follow these
              guidelines :
            </p>
            <div className="instructions pl-4">
              <p className="mb-2">1. Log in to your account.</p>
              <p className="mb-2">
                2. On the main page, you see the projects list. (You can also
                enter tasks or subtasks of the current project)
              </p>
              <p className="mb-2">
                3. In the right sidebar, click on the <strong>Comment</strong>.
              </p>
              <p className="mb-2 mt-32">
                4. You can see all the registered comments on the project.
                (Registered comments for tasks and subtasks will be displayed in
                their respective sections)
              </p>
              <p className="mb-2">
                5. Click on the <strong>Add</strong> icon.
              </p>
              <p className="mb-2 mt-20">
                6. In the <strong>Comments</strong> modal, you can insert your
                descriptions.
              </p>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/6">
            <div className="image-wrapper mb-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Comment Example ${index + 1}`}
                  className="block mb-4 border border-gray-700 cursor-pointer"
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
          src="/video/comment.mp4"
          poster="/imges/poster_comment.png"
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
        <strong>Next :</strong>
        <Link
          className="next-link text-blue-600 hover:underline font-medium ml-1"
          to="/Projects-Dashboard/Logs-History"
        >
          Logs History
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
          onClick={handleBackgroundClick} // Handle clicks outside the image
        >
          <div className="relative bg-white p-10 rounded-lg max-w-5xl mx-auto">
            <img
              src={images[currentImageIndex]}
              alt={`${currentImageIndex + 1}`} // Simplified alt attribute
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

export default CommentsInPertask;

import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { FiMail } from "react-icons/fi"; // Import mail icon
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"; // Import FontAwesome icons for navigation and close
import { Link } from "react-router-dom";

const ActivityList = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);
  const images = [
    "/imges/list_activity1.jpg",
    "/imges/list_activity2.jpg",
    "/imges/list_activity3.jpg",
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // Move to the next image only if not at the last image
      if (prevIndex < images.length - 1) {
        return prevIndex + 1;
      }
      // Stay at the last image if already at the end
      return prevIndex;
    });
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // Move to the previous image only if not at the first image
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      // Stay at the first image if already at the beginning
      return prevIndex;
    });
  };

  const handleBackgroundClick = (e) => {
    // Close the gallery only if the click is on the background
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
          Task & Subtask Activities List
        </h6>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-3">Activities List</h3>
            <p className="mb-4">
              To view and manage your Task & Subtask Activities list, follow
              these steps :
            </p>
            <div className="instructions pl-4 mb-2">
              <p className="mb-2">1. Log in to your account.</p>
              <p className="mb-2">
                2. On the main page, you see the projects list.
              </p>
              <p className="mb-2">
                3. You can change how projects are displayed. There are four
                display modes:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Table</li>
                <li>Board</li>
                <li>Grid</li>
                <li>Chart</li>
              </ul>
              <p className="mb-2">
                You can also change the way tasks and subtasks are displayed to
                one of the above modes.
              </p>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-10">
              <img
                src="/imges/list_activity1.jpg"
                alt=""
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(0)}
              />
              <img
                src="/imges/list_activity2.jpg"
                alt=""
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(1)}
              />
              <img
                src="/imges/list_activity3.jpg"
                alt=""
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(2)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Video section */}
      <div className="video-wrapper mb-10 text-left">
        <video
          src="/video/task_activity.mp4"
          poster="/imges/poster_activitylist.png"
          controls
          loop
          className="w-full border border-gray-700"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <hr className="line border-t border-gray-400 mb-5" />
      {/* Footer Links */}
      <div className="footer-links">
        <strong>Next :</strong>
        <Link
          className="next-link text-blue-600 hover:underline font-medium ml-1"
          to="/Activities/Create-Activity"
        >
          Create New Activity
        </Link>
      </div>
      {/* Social Icons */}
      <div className="social-icons mt-8">
        <button className="text-gray-600 hover:text-blue-600 font-weight text-xl">
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

export default ActivityList;

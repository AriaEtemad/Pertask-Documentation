import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa"; // Importing necessary icons
import { FiMail } from "react-icons/fi"; // Importing the mail icon
import { Link } from "react-router-dom";

const CreateProject = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  const images = ["/imges/project1.jpg", "/imges/project2.jpg"];

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
        <h6 className="text-5xl font-light mb-6">
          Create a project in Pertask
        </h6>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-4">Create a new project</h3>
            <p className="mb-4">
              To create a new Project, please follow these steps:
            </p>
            <div className="instructions pl-4">
              <p className="mb-2">1. Log in to your account.</p>
              <p className="mb-2">
                2. On the main page, click on the <strong>New</strong> button.
              </p>
              <p className="mb-2 mt-14">
                3. In the opened page, complete the required fields:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li className="mb-2">Title</li>
                <li className="mb-2">State</li>
                <li className="mb-2">Department</li>
                <li className="mb-2">Priority</li>
              </ul>
              <p className="p1">
                <strong>Note:</strong> for a better understanding of all fields
                in Pertask for creating Project go to the{" "}
                <Link
                  className="next-link text-blue-600 font-medium ml-1"
                  to="/Introduction-of-All-Fields/Intro-Project"
                >
                  Fields for Creating Project
                </Link>
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-10">
              <img
                src={images[0]}
                alt="Project creation screen 1"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(0)}
              />
              <img
                src={images[1]}
                alt="Project creation screen 2"
                className="block mb-4 border border-gray-700 cursor-pointer"
                style={{ maxHeight: "300px" }} // Smaller height for the second image
                onClick={() => openGallery(1)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="video-wrapper mb-10 text-left">
        <video
          src="/video/create.mp4"
          poster="/imges/poster_project.png"
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
          className="next-link text-blue-600 hover:underline font-medium"
          to="/Project/Assign-Project"
        >
          Assign member to Project
        </Link>
      </div>

      {/* Social Icons */}
      <div className="social-icons mt-8">
        <button className="text-gray-600 hover:text-blue-600 font-weight text-3xl">
          <FaFacebookSquare />
        </button>
        <button className="text-gray-600 hover:text-blue-600 font-weight text-3xl">
          <FaLinkedin />
        </button>
        <button className="text-gray-600 hover:text-blue-600 font-weight text-3xl">
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
              alt={`Filter Interface ${currentImageIndex + 1}`}
              className={`max-w-full object-contain mx-auto ${
                currentImageIndex === 1 ? "max-h-[550px]" : ""
              }`} // Adjust height for the second image if needed
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

export default CreateProject;

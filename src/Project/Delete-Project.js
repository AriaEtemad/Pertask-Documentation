import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa"; // Import necessary icons
import { FiMail } from "react-icons/fi"; // Import mail icon

const DeleteProject = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/imges/delete1.jpg", "/imges/delete2.jpg"];
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);
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
          Delete a project in Pertask
        </h6>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-3">Delete Project</h3>
            <p className="mb-4">
              To remove a Project, please follow these steps carefully:
            </p>
            <div className="instructions pl-4 mb-2">
              <p className="mb-2">1. Log in to your account.</p>
              <p className="mb-2">
                2. On the main page, find your project row.
              </p>
              <p className="mb-2">
                3. In the <strong>Title</strong> column, click on the three dots
                icon.
              </p>
              <p className="mb-2">
                4. Click on the <strong>Delete</strong> icon.
              </p>
              <p className="mb-2 mt-4">
                If the project has one of the following, it is not possible to
                delete it:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Task or subtask</li>
                <li>Comment</li>
                <li>User</li>
              </ul>
              <p className="p1">
                <strong>Note:</strong> System administrators, managers, project
                creators, and users who have <strong>Delete</strong> access can
                delete a project.
              </p>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-10">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot of project deletion interface ${index + 1}`}
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
          src="/video/delete.mp4"
          poster="/imges/poster_delete.png"
          controls
          loop
          className="w-full border border-gray-700"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <hr className="line border-t border-gray-400 mb-5" />

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

export default DeleteProject;

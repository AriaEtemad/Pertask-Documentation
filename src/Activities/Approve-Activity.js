import React, { useState,useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { FiMail } from "react-icons/fi"; // Import mail icon
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"; // Import FontAwesome icons for navigation and close

const ApproveActivities = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);
  const images = [
    "/imges/approve1.jpg",
    "/imges/approve2.jpg",
    "/imges/approve3.jpg",
    "/imges/approve4.jpg",
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
        <h1 className="text-5xl font-light mb-6">
          Approve the Activities of Other Users
        </h1>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-3">Approve Activities</h3>
            <p className="mb-4">
              Follow these instructions to approve the Activities of other users
              :
            </p>
            <div className="instructions pl-4 mb-2">
              <p className="mb-2">1. Log in to your account.</p>
              <p className="mb-2">
                2. On the main page, find your project row.
              </p>
              <p className="mb-2">
                3. Click on the project <strong>Title</strong>.
              </p>
              <p className="mb-2 mt-10">
                4. On the <strong>Tasks</strong> page, find your task row.
              </p>
              <p className="mb-2">
                5. Click on the task <strong>Title</strong> (You can also enter
                the current task and find the desired subtask).
              </p>
              <p className="mb-2 mt-28">
                6. On the right sidebar, click on the{" "}
                <strong>Activities</strong> icon.
              </p>
              <p className="mb-2 mt-40">
                7. Find your desired activity from the list.
              </p>
              <p className="mb-2">8. Click on the three-dot icon.</p>
              <p className="mb-2">
                9. Select <strong>Approve & Save</strong>.
              </p>
              <div className="p1 mt-4">
                <p>
                  <strong>Note:</strong> If you are a system administrator,
                  project manager, or have delete access, you can approve other
                  people's tickets. You can also:
                </p>
                <p className="mb-2 pl-4">
                  1. Edit an activity and update its information.
                </p>
                <p className="mb-2 pl-4">2. Delete an activity.</p>
                <p className="mb-2 pl-4">3. Edit an approved activity.</p>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-10">
              <img
                src="/imges/approve1.jpg"
                alt="Activity 1"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(0)}
              />
              <img
                src="/imges/approve2.jpg"
                alt="Activity 2"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(1)}
              />
              <img
                src="/imges/approve3.jpg"
                alt="Activity 3"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(2)}
              />
              <img
                src="/imges/approve4.jpg"
                alt="Activity 4"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(3)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Video section */}
      <div className="video-wrapper mb-10 text-left">
        <video
          src="/video/approve.mp4"
          poster="/imges/poster_approve.png"
          controls
          loop
          className="w-full border border-gray-700"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Horizontal line */}
      <hr className="line border-t border-gray-400 mb-5" />
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

export default ApproveActivities;

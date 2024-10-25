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

const AssignMemberToSubtask = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);
  const images = [
    "/imges/assignsub1.jpg",
    "/imges/assignsub2.jpg",
    "/imges/assignsub3.jpg",
    "/imges/assignsub4.jpg",
    "/imges/assignsub5.jpg",
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
      if (prevIndex < images.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
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
        <h1 className="text-5xl font-light mb-6">Assign Member to Subtask</h1>
        <div className="section1 mb-6 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-medium mb-4">
              Assign Member to Subtask
            </h3>
            <p className="mb-4">
              Follow these instructions to assign a member to a subtask and
              grant access :
            </p>
            <div className="instructions pl-4">
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
                5. Click on the task <strong>Title</strong>.
              </p>
              <p className="mb-2 mt-32">
                6. On the <strong>Subtasks</strong> page, find your subtask row.
              </p>
              <p className="mb-2">
                7. Click on the <strong>Members</strong>.
              </p>
              <p className="mb-2 mt-32">
                8. Click on the <strong>Add New Member</strong> icon.
              </p>
              <p className="mb-2 mt-44">
                9. On the <strong>Members</strong> page, you can add a new user,
                determine membership type, and specify the type of access.
              </p>
            </div>
          </div>
          {/* Images */}
          <div className="w-2/5">
            <div className="image-wrapper mb-4">
              <img
                src="/imges/assignsub1.jpg"
                alt="Assigning members to subtask step 1"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(0)}
              />
              <img
                src="/imges/assignsub2.jpg"
                alt="Assigning members to subtask step 2"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(1)}
              />
              <img
                src="/imges/assignsub3.jpg"
                alt="Assigning members to subtask step 3"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(2)}
              />
              <img
                src="/imges/assignsub4.jpg"
                alt="Assigning members to subtask step 4"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(3)}
              />
              <img
                src="/imges/assignsub5.jpg"
                alt="Assigning members to subtask step 5"
                className="block mb-4 border border-gray-700 cursor-pointer"
                onClick={() => openGallery(4)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Video section */}
      <div className="video-wrapper mb-10 text-left">
        <video
          src="/video/assign_sub.mp4"
          poster="/imges/poster_assignsub.png"
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
          className="next-link text-blue-600 hover:underline font-medium ml-1"
          to="/SubTask/Edit-Sub"
        >
          Edit Subtask in Pertask
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
              alt={`Filter Interface ${currentImageIndex + 1}`}
              className={`max-w-full object-contain mx-auto ${
                currentImageIndex === 4 ? "max-h-[550px]" : ""
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

export default AssignMemberToSubtask;

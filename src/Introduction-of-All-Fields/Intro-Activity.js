import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { FiMail } from "react-icons/fi"; // Import mail icon
import "./intro.css";

const ActivityFieldsIntroduction = () => {
  const [isVisible, setIsVisible] = useState(false); // State for page transition

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex-1 lg:px-4 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="title-container mb-10">
        <h6 className="text-5xl font-light mb-4">
          Introduction of Fields for Adding Activity
        </h6>
        <section className="space-y-4">
          <div className="section2">
            <h3 className="text-xl font-semibold">Introduction</h3>
            {/* Updated Content */}
            <p className="p1">1. Task</p>
            <p className="p2">
              This field indicates which task or subtask the current activity is
              being created on.
            </p>

            <p className="p1">2. Type</p>
            <p className="p2">
              All performed activities on tasks and subtasks should be saved in
              relation to a specific type of work.
            </p>
            <p className="p2">
              The list of types that can be used for the current activity are
              specified when the project is defined.
            </p>

            <p className="p1">3. Date</p>
            <p className="p2">Specifies the date of the work.</p>

            <p className="p1">4. Description</p>
            <p className="p2">
              You can insert any description about the current activity. By
              using the text editor, you can edit text, insert files, images,
              links, etc.
            </p>

            <p className="p1">5. Ticket</p>
            <p className="p2">
              You can use this section to specify the working time based on the
              “T-Shirt Size” model.
            </p>

            <hr className="line border-t border-gray-400 mb-5 mt-10" />
          </div>
        </section>
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
    </div>
  );
};

export default ActivityFieldsIntroduction;

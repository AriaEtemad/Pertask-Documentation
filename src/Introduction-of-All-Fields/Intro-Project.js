import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { FiMail } from "react-icons/fi"; // Import mail icon
import "./intro.css";
import { Link } from "react-router-dom";

const ProjectFieldsIntroduction = () => {
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
          Introduction of Fields for Creating Project
        </h6>
        <section className="space-y-4">
          <div className="section2">
            <h3 className="text-xl font-semibold">Introduction</h3>
            {/* Existing Content */}
            <p className="p1">1. Title</p>
            <p className="p2">Each project has a title.</p>
            <p className="p2">This field is required.</p>
            <p className="p1">2. Active</p>
            <p className="p2">
              You can set the status of the current project to active or
              inactive.
            </p>
            <p className="p2">
              When the status is set to inactive, that project and all related
              tasks, subtasks, and activities will be visible only, and it will
              not be possible to save any activity or comment on it.
            </p>
            <p className="p1">3. State</p>
            <p className="p2">Each project has a current status.</p>
            <p className="p2">
              The list of statuses is predefined by the system administrator.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">4. Department</p>
            <p className="p2">
              Each project is created in connection with a department.
            </p>
            <p className="p2">
              The list of departments is predefined by the system administrator.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">5. Priority</p>
            <p className="p2">Each project has a priority.</p>
            <p className="p2">
              The list of priorities is already defined by the system
              administrator.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">6. Category</p>
            <p className="p2">
              Each project is categorized in one or more predefined categories.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">7. Assignee</p>
            <p className="p2">
              Each project can be assigned to a set of users or roles that will
              be able to view, edit, and delete the project.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">8. Milestone</p>
            <p className="p2">
              Each project can be associated with one or more milestones that
              help in the implementation of the project.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">9. Start and End Date</p>
            <p className="p2">
              Each project has a start and end date that can be changed later.
            </p>
            <p className="p2">
              When you change the end date, the system automatically changes the
              end date of all tasks, subtasks, and activities that are
              associated with this project.
            </p>
            <p className="p2">This field is required.</p>
            <p className="p1">10. Description</p>
            <p className="p2">
              You can write a detailed description for each project.
            </p>
            <p className="p2">This field is optional.</p>
            <hr className="line border-t border-gray-400 mb-5 mt-10" />
          </div>
        </section>
        <div className="footer-links">
          <strong>Next :</strong>
          <Link
            className="next-link text-blue-600 hover:underline font-medium ml-1"
            to="/Introduction-of-All-Fields/Intro-Task"
          >
            Introduction of Fields for Creating Task
          </Link>
        </div>
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

export default ProjectFieldsIntroduction;

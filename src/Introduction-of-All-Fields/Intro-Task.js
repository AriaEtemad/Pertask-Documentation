import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { FiMail } from "react-icons/fi"; // Import mail icon
import "./intro.css";
import { Link } from "react-router-dom";

const TaskFieldsIntroduction = () => {
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
      <div className="flex-1 lg:px-4">
        <div className="title-container mb-10">
          <h6 className="text-5xl font-light mb-4">
            Introduction of Fields for Creating Task
          </h6>
          <section className="space-y-4">
            <div className="section2">
              <h3 className="text-xl font-semibold">Introduction</h3>
              {/* Existing Content */}
              <p className="p1">1. Title</p>
              <p className="p2">Each task has a title.</p>
              <p className="p2">This field is required.</p>

              <p className="p1">2. Active</p>
              <p className="p2">
                You can set the status of the current task to active or
                inactive.
              </p>
              <p className="p2">
                When the task status is set to inactive, that task and all
                related subtasks and activities will be visible only.
              </p>

              <p className="p1">3. State</p>
              <p className="p2">
                Each task has a current status. You can select a status from the
                drop-down list.
              </p>
              <p className="p2">
                This list is created when the project is defined.
              </p>

              <p className="p1">4. Priority</p>
              <p className="p2">
                Each task has a priority. You can select a priority from the
                drop-down list.
              </p>
              <p className="p2">
                This list is created when the project is defined.
              </p>

              <p className="p1">5. Deadline</p>
              <p className="p2">
                You can define a deadline for the current task.
              </p>
              <p className="p2">
                If you leave this field blank, the task will not have a
                deadline.
              </p>

              <p className="p1">6. Ticket Count</p>
              <p className="p2">
                You should make an initial estimate of the required amount of
                work to perform this task by selecting the type and number of
                tickets you want.
              </p>
              <p className="p2">
                This estimate is based on the T-Shirt sizing model.
              </p>
              <p className="p2">
                The types of tickets that can be used for the current task are
                specified when the project is defined.
              </p>

              <p className="p1">7. Prefixes</p>
              <p className="p2">
                A task can be related to several different projects. For this
                purpose, you must choose a prefix for the current task.
              </p>
              <p className="p2">
                The list of prefixes that can be selected for the current task
                is specified when the project is defined.
              </p>

              <p className="p1">8. Tags</p>
              <p className="p2">
                You can select one or more tags for the current task.
              </p>
              <p className="p2">
                Tagging tasks provides the ability to filter and also report on
                them.
              </p>
              <p className="p2">
                The list of tags that can be used for the task is specified when
                the project is defined.
              </p>

              <p className="p1">9. Types</p>
              <p className="p2">
                All performed activities on tasks should be saved in relation to
                a specific type of work. You can select a list of usable types
                for this task.
              </p>
              <p className="p2">
                The list of types that can be used for the task is specified
                when the project is defined.
              </p>

              <p className="p1">10. Descriptions</p>
              <p className="p2">
                You can insert any description about the task. By using the text
                editor, you can edit text, insert files, images, links, etc.
              </p>

              <p className="p1">11. User</p>
              <p className="p2">
                You can see the list of all users and choose one.
              </p>
              <p className="p2">
                You will only be able to choose from the users who have been
                added to the current project.
              </p>

              <p className="p1">12. Member Type</p>
              <p className="p2">
                You can specify the type of user membership in the current task.
              </p>
              <p className="p2">
                The difference between “User” and “Client” is the ability to
                view the list of activities. Clients cannot see the list of
                activities.
              </p>

              <p className="p1">13. Access Type</p>
              <p className="p1">
                <strong>Note :</strong> You can specify the user's access level
                in the project. There are 4 levels of access:
              </p>

              <p className="p3">
                <strong>Read:</strong> User has read-only access to associated
                projects, their tasks, and their subtasks, and can filter and
                export them as well as share comments and filter activity logs.
              </p>

              <p className="p4">
                <strong>Create:</strong> User cannot alter or delete projects.
                Under time restrictions, the user can delete their own tasks.
                Comments and tasks created by other users, as well as their
                attachments, cannot be deleted or updated by the user. The user
                has a finite amount of time to update or delete their own
                comments.
              </p>

              <p className="p5">
                <strong>Edit:</strong>Projects cannot be deleted by the user.
                User cannot delete the tasks and comments of another user. Under
                time restrictions, the user can remove their own comments.
              </p>

              <p className="p6">
                <strong>Delete:</strong> At this access level, the user has the
                highest level of access, but cannot delete projects.
              </p>

              <hr className="line border-t border-gray-400 mb-5 mt-10" />
            </div>
          </section>
          <div className="footer-links">
            <strong>Next :</strong>
            <Link
              className="next-link text-blue-600 hover:underline font-medium ml-1"
              to="/Introduction-of-All-Fields/Intro-SubTask"
            >
              Introduction of Fields for Creating Subtask
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
    </div>
  );
};

export default TaskFieldsIntroduction;

import React from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  CubeIcon,
  ClipboardListIcon,
  MenuIcon,
  ViewListIcon,
  ChartBarIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

const DocumentationPage = () => {
  return (
    <div className="flex-1 lg:px-4">
      <div className="title-container mb-10">
        <h6 className="text-5xl font-light mb-6">Pertask Documentation</h6>
      </div>
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Account Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <UserIcon className="h-6 w-6 inline-block mr-2" />
            Account
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/Account/Sign-In">Sign in and Sign out</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Account/Reset-Password">Reset Your Password</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Account/Change-Info">Change Account Info</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Account/Chang-Theme">
                Change Theme Color and Image
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Account/Linked-Devices">Logs & Linked Devices</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>

        {/* Project Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <CubeIcon className="h-6 w-6 inline-block mr-2" />
            Project
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/Project/Create-Project">Create a New Project</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Project/Assign-Project">Assign Member to Project</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Project/Edit-Project">Edit Project</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Project/Delete-Project">Delete Project</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>

        {/* Task Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <ClipboardListIcon className="h-6 w-6 inline-block mr-2" />
            Task
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/Task/Create-Task">Create a New Task</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Task/Assign-Task">Assign Member to Task</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Task/Edit-Task">Edit Task</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Task/Delete-Task">Delete Task</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>

        {/* Subtask Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <MenuIcon className="h-6 w-6 inline-block mr-2" />
            Subtask
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/SubTask/Create-Sub">Create a New Subtask</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/SubTask/Assign-Sub">Assign Member to Subtask</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/SubTask/Edit-Sub">Edit Subtask</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/SubTask/Delete-Sub">Delete Subtask</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>

        {/* Activity Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <ViewListIcon className="h-6 w-6 inline-block mr-2" />
            Activity
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/Activities/Activity-List">
                Task or Subtask Activities
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Activities/Create-Activity">Create New Activity</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Activities/Approve-Activity">
                Approve User Activities
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>

        {/* Projects Dashboard Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <ChartBarIcon className="h-6 w-6 inline-block mr-2" />
            Projects Dashboard
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/Projects-Dashboard/List-Project">
                List of Projects
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Projects-Dashboard/Search">Search</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Projects-Dashboard/Filter">Filter</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Projects-Dashboard/Export">Export</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Projects-Dashboard/Comments">Comments</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Projects-Dashboard/Logs-History">Logs</Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>

        {/* Introduction of All Fields Section */}
        <div className="box">
          <h2 className="text-lg font-semibold mb-4">
            <InformationCircleIcon className="h-6 w-6 inline-block mr-2" />
            Introduction of All Fields
          </h2>
          <hr className="line border-t border-gray-400 mb-5" />
          <ul>
            <li>
              <Link to="/Introduction of All Fields/Intro-Project">
                Fields for Project
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Introduction of All Fields/Intro-Task">
                Fields for Task
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Introduction of All Fields/Intro-SubTask">
                Fields for Subtask
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
            <li>
              <Link to="/Introduction of All Fields/Intro-Activity">
                Fields for Activity
              </Link>
            </li>
            <hr className="line border-t border-gray-400 mb-5" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;

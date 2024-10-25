import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(
    () => sessionStorage.getItem("activeSection") || ""
  );
  const [selectedLink, setSelectedLink] = useState(
    () => sessionStorage.getItem("selectedLink") || ""
  );
  const [currentSubMenu, setCurrentSubMenu] = useState("");
  const [breadcrumbReset, setBreadcrumbReset] = useState(
    () => sessionStorage.getItem("breadcrumbReset") === "true"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const pathToSection = {
    "/Account/Sign-In": { section: "Account", name: "Sign in and Sign out" },
    "/Account/Reset-Password": {
      section: "Account",
      name: "Reset Your Password",
    },
    "/Account/Change-Info": { section: "Account", name: "Change Account Info" },
    "/Account/Chang-Theme": { section: "Account", name: "Change Theme" },
    "/Account/Linked-Devices": {
      section: "Account",
      name: "Link Your Account",
    },
    "/Project/Create-Project": {
      section: "Projects",
      name: "Create a new Project",
    },
    "/Project/Assign-Project": {
      section: "Projects",
      name: "Assign member to Project",
    },
    "/Project/Edit-Project": { section: "Projects", name: "Edit Project" },
    "/Project/Delete-Project": { section: "Projects", name: "Delete Project" },
    "/Task/Create-Task": { section: "Tasks", name: "Create a New Task" },
    "/Task/Assign-Task": { section: "Tasks", name: "Assign member to Task" },
    "/Task/Edit-Task": { section: "Tasks", name: "Edit Task" },
    "/Task/Delete-Task": { section: "Tasks", name: "Delete Task" },
    "/SubTask/Create-Sub": {
      section: "Subtasks",
      name: "Create a New Subtask",
    },
    "/SubTask/Assign-Sub": {
      section: "Subtasks",
      name: "Assign member to Subtask",
    },
    "/SubTask/Edit-Sub": { section: "Subtasks", name: "Edit Subtask" },
    "/SubTask/Delete-Sub": { section: "Subtasks", name: "Delete Subtask" },
    "/Activities/Activity-List": {
      section: "Activities",
      name: "Task or Subtask Activities List",
    },
    "/Activities/Create-Activity": {
      section: "Activities",
      name: "Create New Activity",
    },
    "/Activities/Approve-Activity": {
      section: "Activities",
      name: "Approve the activities of other users",
    },
    "/Introduction-of-All-Fields/Intro-Project": {
      section: "Introduction",
      name: "Fields for Creating Project",
    },
    "/Introduction-of-All-Fields/Intro-Task": {
      section: "Introduction",
      name: "Fields for Creating Task",
    },
    "/Introduction-of-All-Fields/Intro-SubTask": {
      section: "Introduction",
      name: "Fields for Creating Subtask",
    },
    "/Introduction-of-All-Fields/Intro-Activity": {
      section: "Introduction",
      name: "Fields for Adding Activity",
    },
    "/Projects-Dashboard/List-Project": {
      section: "Projects Dashboard",
      name: "List of Projects and Display Modes",
    },
    "/Projects-Dashboard/Search": {
      section: "Projects Dashboard",
      name: "Search",
    },
    "/Projects-Dashboard/Filter": {
      section: "Projects Dashboard",
      name: "Filter",
    },
    "/Projects-Dashboard/Export": {
      section: "Projects Dashboard",
      name: "Export",
    },
    "/Projects-Dashboard/Comments": {
      section: "Projects Dashboard",
      name: "Comments",
    },
    "/Projects-Dashboard/Logs-History": {
      section: "Projects Dashboard",
      name: "Logs History",
    },
    "/DocumentationPage/Pertask-Documentation": {
      section: "",
      name: "PerTask Documentation",
    },
  };

  useEffect(() => {
    sessionStorage.setItem("activeSection", openSection);
    sessionStorage.setItem("selectedLink", selectedLink);
    sessionStorage.setItem("breadcrumbReset", breadcrumbReset);
  }, [openSection, selectedLink, breadcrumbReset]);

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedLink(currentPath);

    const pathInfo = pathToSection[currentPath] || { section: "", name: "" };

    if (currentPath !== "/DocumentationPage/Pertask-Documentation") {
      if (pathInfo.name) {
        setCurrentSubMenu(pathInfo.name);
        setOpenSection(pathInfo.section);
        setBreadcrumbReset(false);
      }
    }

    if (currentPath === "/DocumentationPage/Pertask-Documentation") {
      setBreadcrumbReset(true);
      setCurrentSubMenu("");
      setOpenSection("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, breadcrumbReset]);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleLinkClick = (link, subMenuName = "") => {
    setSelectedLink(link);
    if (subMenuName) {
      setCurrentSubMenu(subMenuName);
      setBreadcrumbReset(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDocumentationClick = () => {
    setBreadcrumbReset(true);
    setCurrentSubMenu("");
    setOpenSection("");
    setSelectedLink("/DocumentationPage/Pertask-Documentation");
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      setFilteredResults([]);
    } else {
      const results = Object.entries(pathToSection).filter(([path, { name }]) =>
        name.toLowerCase().includes(searchTerm)
      );
      setFilteredResults(results);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchTerm("");
    setFilteredResults([]);
  };

  return (
    <div className="font-sans text-gray-800">
      <div className="lg:hidden p-4">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <div className="breadcrumb px-6 py-4">
        <a href="https://pertaskdev.perxact.de/" className="text-blue-600">
          PerTask
        </a>
        {" / "}
        {!breadcrumbReset ? (
          <Link
            to="/DocumentationPage/Pertask-Documentation"
            className="text-blue-600"
          >
            PerTask Documentation
          </Link>
        ) : (
          <span className="font-semibold text-black">
            PerTask Documentation
          </span>
        )}
        {!breadcrumbReset && currentSubMenu && (
          <>
            {" "}
            / <span className="font-semibold">{currentSubMenu}</span>
          </>
        )}
      </div>

      <div
        className={`flex flex-col lg:flex-row px-6 py-4 lg:py-10 ${
          sidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="sidebar flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Filter by title"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full h p-2 mb-3 border border-gray-500 pl-9 text-gray-800 transition duration-300 ease-in-out rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <i className="fas fa-filter absolute left-3 top-5 transform -translate-y-2/3 text-blue-600"></i>
          </div>

          {filteredResults.length > 0 && (
            <ul className="search-results bg-white border border-gray-300 mt-2 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
              {filteredResults.map(([path, { name }]) => (
                <li
                  key={path}
                  className="p-3 cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 ease-in-out text-gray-800 font-medium"
                  onClick={() => handleSuggestionClick(path)}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}

          <div>
            <Link
              to="/DocumentationPage/Pertask-Documentation"
              onClick={handleDocumentationClick}
              className="flex items-center ml-4"
            >
              <span>PerTask Documentation</span>
            </Link>
          </div>
          <div>
            {/* Account Section */}
            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Account")}
                className={`flex items-center ${
                  openSection === "Account" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Account"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Account</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Account" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/Account/Sign-In"
                  className={`${
                    selectedLink === "/Account/Sign-In"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Account/Sign-In")}
                >
                  Sign in and Sign out
                </Link>
                <Link
                  to="/Account/Reset-Password"
                  className={`${
                    selectedLink === "/Account/Reset-Password"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Account/Reset-Password")}
                >
                  Reset Your Password
                </Link>
                <Link
                  to="/Account/Change-Info"
                  className={`${
                    selectedLink === "/Account/Change-Info"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Account/Change-Info")}
                >
                  Change Account Info
                </Link>
                <Link
                  to="/Account/Chang-Theme"
                  className={`${
                    selectedLink === "/Account/Chang-Theme"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Account/Chang-Theme")}
                >
                  Change Theme
                </Link>
                <Link
                  to="/Account/Linked-Devices"
                  className={`${
                    selectedLink === "/Account/Linked-Devices"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Account/Linked-Devices")}
                >
                  Link Your Account
                </Link>
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Projects")}
                className={`flex items-center ${
                  openSection === "Projects" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Projects"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Projects</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Projects" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/Project/Create-Project"
                  className={`${
                    selectedLink === "/Project/Create-Project"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Project/Create-Project")}
                >
                  Create a New Project
                </Link>
                <Link
                  to="/Project/Assign-Project"
                  className={`${
                    selectedLink === "/Project/Assign-Project"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Project/Assign-Project")}
                >
                  Assign member to Project
                </Link>
                <Link
                  to="/Project/Edit-Project"
                  className={`${
                    selectedLink === "/Project/Edit-Project"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Project/Edit-Project")}
                >
                  Edit Project
                </Link>
                <Link
                  to="/Project/Delete-Project"
                  className={`${
                    selectedLink === "/Project/Delete-Project"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Project/Delete-Project")}
                >
                  Delete Project
                </Link>
              </div>
            </div>

            {/* Tasks Section */}
            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Tasks")}
                className={`flex items-center ${
                  openSection === "Tasks" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Tasks"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Tasks</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Tasks" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/Task/Create-Task"
                  className={`${
                    selectedLink === "/Task/Create-Task"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Task/Create-Task")}
                >
                  Create a New Task
                </Link>
                <Link
                  to="/Task/Assign-Task"
                  className={`${
                    selectedLink === "/Task/Assign-Task"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Task/Assign-Task")}
                >
                  Assign member to Task
                </Link>
                <Link
                  to="/Task/Edit-Task"
                  className={`${
                    selectedLink === "/Task/Edit-Task"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Task/Edit-Task")}
                >
                  Edit Task
                </Link>
                <Link
                  to="/Task/Delete-Task"
                  className={`${
                    selectedLink === "/Task/Delete-Task"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Task/Delete-Task")}
                >
                  Delete Task
                </Link>
              </div>
            </div>

            {/* Subtasks Section */}
            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Subtasks")}
                className={`flex items-center ${
                  openSection === "Subtasks" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Subtasks"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Subtasks</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Subtasks" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/SubTask/Create-Sub"
                  className={`${
                    selectedLink === "/SubTask/Create-Sub"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/SubTask/Create-Sub")}
                >
                  Create a New SubTask
                </Link>
                <Link
                  to="/SubTask/Assign-Sub"
                  className={`${
                    selectedLink === "/SubTask/Assign-Sub"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/SubTask/Assign-Sub")}
                >
                  Assign member to SubTask
                </Link>
                <Link
                  to="/SubTask/Edit-Sub"
                  className={`${
                    selectedLink === "/SubTask/Edit-Sub"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/SubTask/Edit-Sub")}
                >
                  Edit SubTask
                </Link>
                <Link
                  to="/SubTask/Delete-Sub"
                  className={`${
                    selectedLink === "/SubTask/Delete-Sub"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/SubTask/Delete-Sub")}
                >
                  Delete SubTask
                </Link>
              </div>
            </div>

            {/* Activities Section */}
            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Activities")}
                className={`flex items-center ${
                  openSection === "Activities" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Activities"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Activities</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Activities" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/Activities/Activity-List"
                  className={`${
                    selectedLink === "/Activities/Activity-List"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Activities/Activity-List")}
                >
                  Task or Subtask Activities List
                </Link>
                <Link
                  to="/Activities/Create-Activity"
                  className={`${
                    selectedLink === "/Activities/Create-Activity"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Activities/Create-Activity")}
                >
                  Create New Activity
                </Link>
                <Link
                  to="/Activities/Approve-Activity"
                  className={`${
                    selectedLink === "/Activities/Approve-Activity"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Activities/Approve-Activity")
                  }
                >
                  Approve the activities of other users
                </Link>
              </div>
            </div>
            {/* Project Dashboard Section */}
            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Projects Dashboard")}
                className={`flex items-center ${
                  openSection === "Projects Dashboard" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Projects Dashboard"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Projects Dashboard</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Projects Dashboard" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/Projects-Dashboard/List-Project"
                  className={`${
                    selectedLink === "/Projects-Dashboard/List-Project"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Projects-Dashboard/List-Project")
                  }
                >
                  List of Projects and Display Modes
                </Link>
                <Link
                  to="/Projects-Dashboard/Search"
                  className={`${
                    selectedLink === "/Projects-Dashboard/Search"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Projects-Dashboard/Search")}
                >
                  Search
                </Link>
                <Link
                  to="/Projects-Dashboard/Filter"
                  className={`${
                    selectedLink === "/Projects-Dashboard/Filter"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Projects-Dashboard/Filter")}
                >
                  Filter
                </Link>
                <Link
                  to="/Projects-Dashboard/Export"
                  className={`${
                    selectedLink === "/Projects-Dashboard/Export"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/Projects-Dashboard/Export")}
                >
                  Export
                </Link>
                <Link
                  to="/Projects-Dashboard/Comments"
                  className={`${
                    selectedLink === "/Projects-Dashboard/Comments"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Projects-Dashboard/Comments")
                  }
                >
                  Comments
                </Link>
                <Link
                  to="/Projects-Dashboard/Logs-History"
                  className={`${
                    selectedLink === "/Projects-Dashboard/Logs-History"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Projects-Dashboard/Logs-History")
                  }
                >
                  Logs History
                </Link>
              </div>
            </div>

            <div>
              <Link
                to="#"
                onClick={() => handleToggle("Introduction")}
                className={`flex items-center ${
                  openSection === "Introduction" ? "open" : ""
                }`}
              >
                <i
                  className={`fas ${
                    openSection === "Introductions"
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } toggle-icon`}
                ></i>
                <span>Introduction of All Fields</span>
              </Link>
              <div
                className={`sub-menu ${
                  openSection === "Introduction" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/Introduction-of-All-Fields/Intro-Project"
                  className={`${
                    selectedLink === "/Introduction-of-All-Fields/Intro-Project"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Introduction-of-All-Fields/Intro-Project")
                  }
                >
                  Fields for Creating Project
                </Link>
                <Link
                  to="/Introduction-of-All-Fields/Intro-Task"
                  className={`${
                    selectedLink === "/Introduction-of-All-Fields/Intro-Task"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Introduction-of-All-Fields/Intro-Task")
                  }
                >
                  Fields for Creating Task
                </Link>
                <Link
                  to="/Introduction-of-All-Fields/Intro-SubTask"
                  className={`${
                    selectedLink === "/Introduction-of-All-Fields/Intro-SubTask"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick("/Introduction-of-All-Fields/Intro-SubTask")
                  }
                >
                  Fields for Creating SubTask
                </Link>
                <Link
                  to="/Introduction-of-All-Fields/Intro-Activity"
                  className={`${
                    selectedLink ===
                    "/Introduction-of-All-Fields/Intro-Activity"
                      ? "active-submenu-item"
                      : ""
                  }`}
                  onClick={() =>
                    handleLinkClick(
                      "/Introduction-of-All-Fields/Intro-Activity"
                    )
                  }
                >
                  Fields for Adding Activity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

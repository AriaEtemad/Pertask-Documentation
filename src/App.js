import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Account/Sign-In";
import DocumentationPage from "./DocumentationPage/Pertask-Documentation";
import Comments from "./Projects-Dashboard/Comments";
import Sidebar from "./slidebar";
import Activitylist from "./Activities/Activity-List";
import Approve from "./Activities/Approve-Activity";
import Assignproject from "./Project/Assign-Project";
import Assignsub from "./SubTask/Assign-Sub";
import Assigntask from "./Task/Assign-Task";
import ChangeAccountInfo from "./Account/Change-Info";
import Createproject from "./Project/Create-Project";
import Createactivity from "./Activities/Create-Activity";
import Createsub from "./SubTask/Create-Sub";
import Createtask from "./Task/Create-Task";
import Deleteproject from "./Project/Delete-Project";
import Deletesub from "./SubTask/Delete-Sub";
import Deletetask from "./Task/Delete-Task";
import Editproject from "./Project/Edit-Project";
import Editsub from "./SubTask/Edit-Sub";
import Edittask from "./Task/Edit-Task";
import Export from "./Projects-Dashboard/Export";
import Filter from "./Projects-Dashboard/Filter";
import Introactivity from "./Introduction-of-All-Fields/Intro-Activity";
import Introproject from "./Introduction-of-All-Fields/Intro-Project";
import Introsub from "./Introduction-of-All-Fields/Intro-SubTask";
import Introtask from "./Introduction-of-All-Fields/Intro-Task";
import Linked from "./Account/Linked-Devices";
import Listproject from "./Projects-Dashboard/List-Project";
import Logs from "./Projects-Dashboard/Logs-History";
import Password from "./Account/Reset-Password";
import Search from "./Projects-Dashboard/Search";
import Theme from "./Account/Chang-Theme";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-3/5 h-full">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <div className="w-full md:w-3/2 h-full md:-ml-52 md:mt-20">
          <div className="p-4">
            <Routes>
              <Route index element={<DocumentationPage />} />
              <Route path="/Account/Sign-In" element={<Signin />} />
              <Route
                path="/Projects-Dashboard/Comments"
                element={<Comments />}
              />

              <Route
                path="/DocumentationPage/Pertask-Documentation"
                element={<DocumentationPage />}
              />
              <Route
                path="/Activities/Activity-List"
                element={<Activitylist />}
              />
              <Route
                path="/Activities/Approve-Activity"
                element={<Approve />}
              />
              <Route
                path="/Project/Assign-Project"
                element={<Assignproject />}
              />
              <Route path="/SubTask/Assign-Sub" element={<Assignsub />} />
              <Route path="/Task/Assign-Task" element={<Assigntask />} />
              <Route
                path="/Account/Change-Info"
                element={<ChangeAccountInfo />}
              />
              <Route
                path="/Activities/Create-Activity"
                element={<Createactivity />}
              />
              <Route
                path="/Project/Create-Project"
                element={<Createproject />}
              />
              <Route path="/SubTask/Create-Sub" element={<Createsub />} />
              <Route path="/Task/Create-Task" element={<Createtask />} />
              <Route path="/Project/Edit-Project" element={<Editproject />} />
              <Route path="/SubTask/Edit-Sub" element={<Editsub />} />
              <Route path="/Task/Edit-Task" element={<Edittask />} />
              <Route
                path="/Project/Delete-Project"
                element={<Deleteproject />}
              />
              <Route path="/SubTask/Delete-Sub" element={<Deletesub />} />
              <Route path="/Task/Delete-Task" element={<Deletetask />} />
              <Route path="/Projects-Dashboard/Export" element={<Export />} />
              <Route path="/Projects-Dashboard/Filter" element={<Filter />} />
              <Route
                path="/Introduction-of-All-Fields/Intro-Activity"
                element={<Introactivity />}
              />
              <Route
                path="/Introduction-of-All-Fields/Intro-Project"
                element={<Introproject />}
              />
              <Route
                path="/Introduction-of-All-Fields/Intro-SubTask"
                element={<Introsub />}
              />
              <Route
                path="/Introduction-of-All-Fields/Intro-Task"
                element={<Introtask />}
              />
              <Route path="/Account/Linked-Devices" element={<Linked />} />
              <Route
                path="/Projects-Dashboard/List-Project"
                element={<Listproject />}
              />
              <Route
                path="/Projects-Dashboard/Logs-History"
                element={<Logs />}
              />
              <Route path="/Account/Reset-Password" element={<Password />} />
              <Route path="/Projects-Dashboard/Search" element={<Search />} />
              <Route path="/Account/Chang-Theme" element={<Theme />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

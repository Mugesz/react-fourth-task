// ... (your other imports)

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import FullStack from "./FullStack";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Career from "./Career";
import All from "./All";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="text-start">
          <h1>GUVI ZEN</h1>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav">
                      {/* Use NavLink instead of Link */}
                      <NavLink
                        className="navbar-brand"
                        to={"/"}
                        end
                        activeClassName="active"
                      >
                        All
                      </NavLink>
                      <NavLink
                        className="navbar-brand"
                        to={"/fullstack"}
                        activeClassName="active"
                      >
                        FullStack
                      </NavLink>
                      <NavLink
                        className="navbar-brand"
                        to={"/datascience"}
                        activeClassName="active"
                      >
                        DataScience
                      </NavLink>
                      <NavLink
                        className="navbar-brand"
                        to={"/cybersecurity"}
                        activeClassName="active"
                      >
                        CyberSecurity
                      </NavLink>
                      <NavLink
                        className="navbar-brand"
                        to={"/career"}
                        activeClassName="active"
                      >
                        Career
                      </NavLink>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

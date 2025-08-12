import "./App.css";
import CompFour from "./components/CompFour";
import CompOne from "./components/CompOne";
import CompThree from "./components/CompThree";
import CompTwo from "./components/CompTwo";
import DefaultComp from "./components/DefaultComp";
import DefaultNewComp from "./components/DefaultNewComp";

import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import UniversalComp from "./components/UniversalComp";

function App() {
  const navigate = useNavigate(); //! we can't call react hooks in JSX we have to call it in component functions
  return (
    <div className="App">
      <div>
        <div>
          <div>
            <h3>By Buttons</h3>
            <button onClick={() => navigate("/compOne")}>Component 1</button>
            <button onClick={() => navigate("/compTwo")}>Component 2</button>
            <button onClick={() => navigate("/compThree")}>Component 3</button>
            <button onClick={() => navigate("/compFour")}>Component 4</button>
            <button onClick={() => navigate(-1)}>Go Back...</button>
            <button onClick={() => navigate(-2)}>Go 2 Pages Back...</button>
          </div>
          <div>
            <h3>By Links</h3>
            <NavLink style={{ margin: "8px" }} to="/">
              Default Component
            </NavLink>
            <NavLink style={{ margin: "8px" }} to="/compOne">
              Component 1
            </NavLink>
            <NavLink style={{ margin: "8px" }} to="/compTwo">
              Component 2
            </NavLink>
            <NavLink style={{ margin: "8px" }} to="/compThree">
              Component 3
            </NavLink>
            <NavLink style={{ margin: "8px" }} to="/compFour">
              Component 4
            </NavLink>
          </div>
        </div>
        {/* <Routes>
          <Route path="/" element={<DefaultComp />} />
          <Route path="/compOne" element={<CompOne />} />
          <Route path="/compTwo" element={<CompTwo />} />
          <Route path="/compThree" element={<CompThree />} />
          <Route path="/compFour" element={<CompFour />} />
          <Route path="*" element={<UniversalComp />} />
        </Routes> */}
        <Routes>
          <Route path="/" element={<DefaultNewComp />}>
            <Route index element={<DefaultComp />} />
            <Route path="/compOne" element={<CompOne />} />
            <Route path="/compTwo" element={<CompTwo />} />
            <Route path="/compThree" element={<CompThree />} />
            <Route path="/compFour" element={<CompFour />} />
            <Route path="*" element={<UniversalComp />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

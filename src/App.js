import "./App.css";
import CompFour from "./components/CompFour";
import CompOne from "./components/CompOne";
import CompThree from "./components/CompThree";
import CompTwo from "./components/CompTwo";
import DefaultComp from "./components/DefaultComp";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); //! we can't call react hooks in JSX we have to call it in component functions
  return (
    <div className="App">
      <div>
        <div>
          <h3>By Buttons</h3>
          <button onClick={() => navigate("/compOne")}>Component 1</button>
          <button onClick={() => navigate("/compTwo")}>Component 2</button>
        </div>  
        <div>
          <h3>By Links</h3>
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
      <Routes>
        <Route path="/" element={<DefaultComp />} />
        <Route path="/compOne" element={<CompOne />} />
        <Route path="/compTwo" element={<CompTwo />} />
        <Route path="/compThree" element={<CompThree />} />
        <Route path="/compFour" element={<CompFour />} />
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>404!</div> <p>Page not found</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

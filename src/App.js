import "./App.css";
import CompOne from "./components/CompOne";
import CompTwo from "./components/CompTwo";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); //! we can't call react hooks in JSX we have to call it in component functions
  return (
    <div className="App">
      <div>
        <h3>By Buttons</h3>
        <button onClick={() => navigate("/compOne")}>Component 1</button>
        <button onClick={() => navigate("/compTwo")}>Component 2</button>
      </div>
      <div>
        <h3>By Links</h3>
        <Link to>Component 1</Link>
        <Link>Component 2</Link>
      </div>
      <Routes>
        <Route path="/compOne" element={<CompOne />} />
        <Route path="/compTwo" element={<CompTwo />} />
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

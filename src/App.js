// import { Router } from "react-router-dom";
import "./App.css";
import Alert from "./component/Alert";
import Navbar1 from "./component/Navbar1";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether the dark ,mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode was enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode was enabled", "success");
    }
  };
  return (
    <>
    
      <Router>
      <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
        <div className="container my-3">
          <Routes>
            
            <Route path="/about" element={<About mode={mode}/>} />
              
            <Route path="/" element={<TextForm
                showAlert={showAlert}
                heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />} />
              
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

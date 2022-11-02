import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import './App.css';
// import Navbarh from "./Components/Navbar";
import Home1 from "./Components/Home1";
import Profile from "./Components/Profile"
import Result from "./Components/Result";
import Links from './Components/Links';
import Achievement from "./Components/Achievement";
// import Score from "./Components/Score";
import LoginForm from "./Components/LoginForm";
import Alert from './Components/Alert';
import Admin from "./Components/Admin";
//var header = require('./Components/footer.html');

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
    {/* <Admin/> */}
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<LoginForm showAlert={showAlert} />} />
            <Route path="home" element={<Home1 showAlert={showAlert} />} />
            <Route path="profile" element={<Profile  />} />
            <Route path="result" element={<Result  />} />
            <Route path="achievement" element={<Achievement  />} />
            <Route path="links" element={<Links />} />
            <Route path="admin" element={<Admin/>} />
          </Route>
        </Routes >
      </BrowserRouter >
    </div >
  );
}

export default App;

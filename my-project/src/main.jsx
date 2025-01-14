import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Navbar02 from "./components/Nabar02.jsx";
// import Progress from "./components/Progress.jsx";
// import Nabar01 from "./components/Navbar01.jsx";
// import CardDemo from "./components/CardDemo.jsx";
import Crud from "./components/Crud.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Nabar01 />
    <CardDemo/> */}
    <Crud />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountProvider } from "./store/CountProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* note that we are wrapping the App component with the CountProvider */}
    <CountProvider>
      <App />
    </CountProvider>
  </StrictMode>
);

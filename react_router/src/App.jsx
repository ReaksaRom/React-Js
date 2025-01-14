import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./router/Layout";
import NewPage from "./components/NewPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/hom" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog/new_page" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

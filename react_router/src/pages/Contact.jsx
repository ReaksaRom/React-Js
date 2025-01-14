import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h1>welcome to contage page.</h1>
      <Link to="/">Back</Link>
      <Outlet />
    </div>
  );
}

export default Contact;

import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>

          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="blog">Block</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

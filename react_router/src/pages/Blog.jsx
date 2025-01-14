import { Link, Outlet } from "react-router-dom";
function Blog() {
  return (
    <div>
      <h1>welcome to blog page.</h1>
      <ul>
        <li>
          <Link to="/">Back</Link>
        </li>
        <li>
          <Link to="/blog/new_page">new page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Blog;

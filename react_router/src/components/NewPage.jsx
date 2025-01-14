import { Link } from "react-router-dom";
function NewPage() {
  return (
    <div>
      <h1>welcome to new page.</h1>
      <Link to="/blog">back</Link>
    </div>
  );
}

export default NewPage;

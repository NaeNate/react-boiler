import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound;

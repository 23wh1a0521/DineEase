import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go Back Home</Link>
    </section>
  );
};

export default NotFound;

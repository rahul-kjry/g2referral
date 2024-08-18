import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Success!</h2>
      <p>
        Your information has been added to the database and is visible to people
        interested in referring.
      </p>
      <Link to="/">
        <button style={{ padding: "10px 20px" }}>Back to Home</button>
      </Link>
    </div>
  );
};

export default SuccessPage;

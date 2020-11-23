import React from "react";
import { Link } from "react-router-dom";

function AddPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="px-2">
      <Link to="/">Back to Home</Link>
      <div className="bg-gray-400 rounded p-2">
        <form onSubmit={handleSubmit}>
          <input type="text" className="mb-2" />
          <br />
          <input type="text" className="mb-2" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddPage;

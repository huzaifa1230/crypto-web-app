import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-black text-purple-900 ">
      <Link to="/" className="cursor-pointer">
        Home
      </Link>
      <Link to="/blogs" className="cursor-pointer">
        Blogs
      </Link>
    </div>
  );
}

export default Navbar;
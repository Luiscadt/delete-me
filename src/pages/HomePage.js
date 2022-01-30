import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Application</h2>

      <Link to={`/user/${10}`}>User</Link>
      
    </div>
  );
}

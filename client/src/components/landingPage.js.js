import { React } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="fondo">
      <h1>Welcome to Breaking Bad 2022</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}

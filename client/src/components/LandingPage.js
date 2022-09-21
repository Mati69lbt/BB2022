import { React } from "react";
import { Link } from "react-router-dom";
import "./css/xahora.css";

export default function LandingPage() {
  return (
    <div className="fondo">
      <div className="entrada">
        <h1>Bienvenidos a Breaking Bad 2022</h1>
        <Link to="/home">
          <button>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

import personalimage from "../styles/shahid.jpg";
import "../styles/index.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-md-4 text-center d-flex align-items-center justify-content-center">
              <button
                className="btn btn-outline-secondary my-2 my-sm-0 text-white"
                onClick={() => navigate("/create-employee")}
                style={{ background: "#00b4cc" }}
              >
                Add Student
              </button>
            </div>

            <div className="col-md-4 text-center p-2">
              <img
                src={personalimage}
                className="rounded-circle shadow-4"
                style={{ width: "70px" }}
                alt="Avatar"
              />
              <h5 className="text-white">
                <strong>Shahid Ali</strong>
              </h5>
            </div>
            <div className="col-md-4 d-flex align-items-center"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

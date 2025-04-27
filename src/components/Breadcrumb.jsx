import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Breadcrumb() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="cursor-pointer">
      <span
        style={
          location.pathname === "/auth"
            ? { color: "#88C2BB", cursor: "pointer" }
            : {}
        }
        onClick={() => handleClick("/auth")}
      >
        /Authentication
      </span>
      <span
        style={
          location.pathname === "/home"
            ? { color: "#88C2BB", cursor: "pointer" }
            : {}
        }
        onClick={() => handleClick("/home")}
      >
        /Home
      </span>
    </div>
  );
}

export default Breadcrumb;

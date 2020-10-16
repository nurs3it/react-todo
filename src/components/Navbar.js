import React from "react";
import {NavLink} from "react-router-dom";
import routes from "../main.settings/routes";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Todo App</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {routes.map((template, index) => template
            ? <NavLink key={index} className="nav-link active" to={template.link}>{template.name}</NavLink>
            : null
          )}
        </div>
      </div>
    </nav>
  )
}
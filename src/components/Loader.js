import React from "react";
import "../assets/styles/Loader.style.scss"

export default function Loader() {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
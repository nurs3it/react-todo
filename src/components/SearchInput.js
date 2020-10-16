import React from "react";

export default function SearchInput () {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group">
          <input placeholder={`Input for search`} className="form-control"/>
        </div>
      </div>
    </div>
  )
}
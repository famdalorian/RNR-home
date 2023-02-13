import React from "react";
import { Link } from "react-router-dom";

export default function LinkCard() {
  return (
    <div className="card">
      <div className="card-header">{Link.name}</div>
      <div className="card-body">
        <a href={Link.url}>{Link.url}</a>
        <p>{Link.description}</p>
        <div className="card-footer">
          <button className="btn btn-warning mr-2">Archive</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Databox.css";

export default function Databox(props) {
  return (
    <div className="box">
    <h1>{props.name.replace(/([a-z](?=[A-Z]))/g, '$1 ')}</h1>
    <h3>{props.value}</h3>
    </div>
  );
}

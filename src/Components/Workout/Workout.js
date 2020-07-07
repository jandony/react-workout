import React from "react";

import "./Workout.css";

export const Workout = ({ name, description }) => {
  return (
    <div className="Workout">
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

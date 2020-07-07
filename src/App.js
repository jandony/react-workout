import React, { useState } from "react";

import { Workout } from "./Components/Workout/Workout";

import "./App.css";

const App = () => {
  const [workouts, setWorkouts] = useState([
    { name: "Squats", description: "Squats description example" },
    { name: "Deadlifts", description: "Deadlifts description example" },
    { name: "Lunges", description: "Lunges description example" },
  ]);

  return (
    <div className="App">
      <h1>React Workout App</h1>
      <div className="Workouts">
        {workouts.map((workout) => {
          return (
            <Workout name={workout.name} description={workout.description} />
          );
        })}
      </div>
    </div>
  );
};

export default App;

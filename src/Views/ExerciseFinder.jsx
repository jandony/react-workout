import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// main component
import { Workout } from "../Components/Workout/Workout";

// custom components

export default function ExerciseFinder() {
  const [upperWorkouts, setUpperWorkouts] = useState([
    { name: "Bench Press", description: "Bench Press description example", body: "upper" },
    { name: "Bicep Curls", description: "Bicep Curls description example", body: "upper" },
    { name: "Chest Press", description: "Chest Press description example", body: "upper" },
    { name: "Push Ups", description: "Push Ups description example", body: "upper" },
  ]);

  const [lowerWorkouts, setLowerWorkouts] = useState([
    { name: "Calf Raises", description: "Calf Raises description example", body: "lower" },
    { name: "Deadlifts", description: "Deadlifts description example", body: "lower" },
    { name: "Lunges", description: "Lunges description example", body: "lower" },
    { name: "Squats", description: "Squats description example", body: "lower" },
  ]);

  const upperImage = "https://www.bodybuilding.com/exercises/exerciseImages/sequences/35/Male/l/35_1.jpg";
  const lowerImage = "https://www.bodybuilding.com/exercises/exerciseImages/sequences/700/Male/l/700_1.jpg";

  return (
    <Grid container spacing={3} style={{ marginTop: "1rem" }}>
      <Grid item sm={5}>
        <Typography variant="h2" style={{ padding: "0.5em" }}>
          Upper Body
        </Typography>
        <Grid container direction="row">
          {upperWorkouts.map((workout) => {
            return <Workout name={workout.name} description={workout.description} body={workout.body} image={upperImage} />;
          })}
        </Grid>
      </Grid>

      <Grid item container sm={2} direction="column" alignItems="center" justify="center">
        <Typography variant="h2">OR</Typography>
      </Grid>

      <Grid item sm={5}>
        <Typography variant="h2" style={{ padding: "0.5em" }}>
          Lower Body
        </Typography>
        <Grid container direction="row">
          {lowerWorkouts.map((workout) => {
            return <Workout name={workout.name} description={workout.description} body={workout.body} image={lowerImage} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

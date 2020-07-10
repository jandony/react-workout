import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// main component
import { Workout } from "../Components/Workout/Workout";

// custom components

const useStyles = makeStyles((theme) => ({
  orContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function ExerciseFinder() {
  const classes = useStyles();

  const [upperWorkouts, setUpperWorkouts] = useState([
    { name: "Neck", body: "upper" },
    { name: "Traps (trapezius)", body: "upper" },
    { name: "Shoulders (deltoids)", body: "upper" },
    { name: "Chest (pectoralis", body: "upper" },
    { name: "Abs (abdominis)", body: "upper" },
    { name: "Lats (latissimus dorsi)", body: "upper" },
    { name: "Middle Back", body: "upper" },
    { name: "Lower Back", body: "upper" },
    { name: "Biceps", body: "upper" },
    { name: "Triceps", body: "upper" },
    { name: "Forearms", body: "upper" },
  ]);

  const [lowerWorkouts, setLowerWorkouts] = useState([
    { name: "Glutes (gluteus maximus)", body: "lower" },
    { name: "Quads (quadriceps)", body: "lower" },
    { name: "Hamstrings", body: "lower" },
    { name: "Calves", body: "lower" },
  ]);

  const upperImage = "https://www.bodybuilding.com/exercises/exerciseImages/sequences/35/Male/l/35_1.jpg";
  const lowerImage = "https://www.bodybuilding.com/exercises/exerciseImages/sequences/700/Male/l/700_1.jpg";

  return (
    <Grid container style={{ marginTop: "1rem" }}>
      <Grid item sm={5}>
        <Typography variant="h2" style={{ padding: "0.5em" }}>
          Upper Body
        </Typography>
        <Grid container direction="row">
          {upperWorkouts.map((workout, index) => {
            return <Workout key={index} name={workout.name} body={workout.body} image={upperImage} />;
          })}
        </Grid>
      </Grid>

      <Grid item container sm={2} direction="column" alignItems="center" justify="center" className={classes.orContainer}>
        <Typography variant="h2">OR</Typography>
      </Grid>

      <Grid item sm={5}>
        <Typography variant="h2" style={{ padding: "0.5em" }}>
          Lower Body
        </Typography>
        <Grid container direction="row">
          {lowerWorkouts.map((workout, index) => {
            return <Workout key={index} name={workout.name} body={workout.body} image={lowerImage} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

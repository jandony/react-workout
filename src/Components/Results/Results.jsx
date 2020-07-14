import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// main component
import { Workout } from "../Workout/Workout.jsx";

// custom components

const useStyles = makeStyles((theme) => ({
  orContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Results({
  results,
  selectedExercises,
  totalExercises,
  setTotal,
  setSelectedExercises,
}) {
  const classes = useStyles();

  const displayExercises = (selectedExercises) => {
    const listItems = selectedExercises.map((number) => <li>{number}</li>);
    return listItems;
  };

  return (
    <Grid container style={{ marginTop: "1rem", alignContent: "flex-start" }}>
      <Grid item sm={11}>
        <Typography
          variant="h2"
          style={{ padding: "0.5em", marginTop: "4rem" }}
        >
          {results ? results.body : "No Results"}
        </Typography>
      </Grid>
      <Grid item sm={5}>
        <Typography
          variant="h2"
          style={{ padding: "0.5em", marginTop: "2rem" }}
        >
          Results (selected: {totalExercises})
        </Typography>
        {results &&
          results.exercises.map((workout, index) => {
            return (
              <Workout
                key={index}
                name={workout.name}
                body={workout.body}
                image={workout.image}
                selectedExercises={selectedExercises}
                totalExercises={totalExercises}
                setTotal={setTotal}
                setSelectedExercises={setSelectedExercises}
              />
            );
          })}
        <Grid container direction="row"></Grid>
      </Grid>
      <Grid item sm={5}>
        <Typography
          variant="h2"
          style={{ padding: "0.5em", marginTop: "2rem" }}
        >
          Your Exercises:
        </Typography>
        <Grid container direction="column">
          <Grid item style={{ marginLeft: "12rem" }}>
            {selectedExercises &&
              selectedExercises.map((item) => {
                return <li>{item}</li>;
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

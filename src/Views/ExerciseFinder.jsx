import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
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
  exerciseContainer: {
    marginTop: "1rem",
    paddingTop: "6rem",
    paddingBottom: "10rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  bodyTitle: {
    padding: "0.5em",
    position: "sticky",
    top: 72,
    paddingTop: 25,
    [theme.breakpoints.down("sm")]: {
      top: 0,
      paddingTop: 25,
    },
    fontSize: "1rem",
    backgroundColor: "lightgrey",
    zIndex: 1000,
  },
}));

export default function ExerciseFinder({ upperWorkouts, lowerWorkouts }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container className={classes.exerciseContainer}>
        <Grid item sm={6}>
          <Typography variant="h2" className={classes.bodyTitle} boxShadow={3}>
            Upper Body
            <hr />
          </Typography>
          <Grid container direction="row">
            {upperWorkouts.map((workout, index) => {
              return (
                <Workout
                  key={index}
                  name={workout.name}
                  body={workout.body}
                  image={workout.image}
                />
              );
            })}
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <Typography variant="h2" className={classes.bodyTitle}>
            Lower Body
            <hr />
          </Typography>
          <Grid container direction="row">
            {lowerWorkouts.map((workout, index) => {
              return (
                <Workout
                  key={index}
                  name={workout.name}
                  body={workout.body}
                  image={workout.image}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

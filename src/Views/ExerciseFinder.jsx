import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { shadows } from "@material-ui/system";

// body images
import Neck from "../Assets/Images/neck.jpg";
import Traps from "../Assets/Images/traps.jpg";
import Shoulders from "../Assets/Images/shoulders.jpg";
import Chest from "../Assets/Images/chest.jpg";
import Abs from "../Assets/Images/abs.jpg";
import Lats from "../Assets/Images/lats.jpg";
import Back from "../Assets/Images/back.jpg";
import Biceps from "../Assets/Images/biceps.jpg";
import Triceps from "../Assets/Images/triceps.jpg";
import Forearms from "../Assets/Images/forearms.jpg";

import Glutes from "../Assets/Images/glutes.jpg";
import Quads from "../Assets/Images/quads.jpg";
import Hamstrings from "../Assets/Images/hamstrings.jpg";
import Calves from "../Assets/Images/calves.jpg";

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

export default function ExerciseFinder() {
  const classes = useStyles();

  const [upperWorkouts, setUpperWorkouts] = useState([
    { name: "Neck", body: "upper", image: Neck },
    { name: "Traps (trapezius)", body: "upper", image: Traps },
    { name: "Shoulders (deltoids)", body: "upper", image: Shoulders },
    { name: "Chest (pectoralis", body: "upper", image: Chest },
    { name: "Abs (abdominis)", body: "upper", image: Abs },
    { name: "Lats (latissimus dorsi)", body: "upper", image: Lats },
    { name: "Middle Back", body: "upper", image: Back },
    { name: "Lower Back", body: "upper", image: Back },
    { name: "Biceps", body: "upper", image: Biceps },
    { name: "Triceps", body: "upper", image: Triceps },
    { name: "Forearms", body: "upper", image: Forearms },
  ]);

  const [lowerWorkouts, setLowerWorkouts] = useState([
    { name: "Glutes (gluteus maximus)", body: "lower", image: Glutes },
    { name: "Quads (quadriceps)", body: "lower", image: Quads },
    { name: "Hamstrings", body: "lower", image: Hamstrings },
    { name: "Calves", body: "lower", image: Calves },
  ]);

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
              return <Workout key={index} name={workout.name} body={workout.body} image={workout.image} />;
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
              return <Workout key={index} name={workout.name} body={workout.body} image={workout.image} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

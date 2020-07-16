import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

import { Router, Link } from "react-router-dom";

// main component
import { MuscleGroupCard } from "../Components/MuscleGroupCard/MuscleGroupCard";

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
  muscleGroup: {
    padding: 0,
    margin: "1em",
    marginBottom: "0em",
  },
}));

export default function ExerciseFinder({ workouts, findResults }) {
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
            {workouts.map((workout, index) => {
              if (workout.body === "Upper") {
                return (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={"/results"}
                    className={classes.muscleGroup}
                    onClick={() => findResults(workout)}
                  >
                    <MuscleGroupCard
                      key={index}
                      workout={workout}
                      findResults={findResults}
                    />
                  </ListItem>
                );
              }
            })}
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <Typography variant="h2" className={classes.bodyTitle}>
            Lower Body
            <hr />
          </Typography>
          <Grid container direction="row">
            {workouts.map((workout, index) => {
              if (workout.body === "Lower") {
                return (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={"/results"}
                    className={classes.muscleGroup}
                    onClick={() => findResults(workout)}
                  >
                    <MuscleGroupCard
                      key={index}
                      workout={workout}
                      findResults={findResults}
                    />
                  </ListItem>
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

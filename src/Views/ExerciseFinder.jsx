import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

import { Link } from "react-router-dom";

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
    paddingBottom: "16rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "6rem",
    },
  },
  bodyTitle: {
    padding: "0.5em",
    position: "sticky",
    top: 72,
    paddingTop: 25,
    [theme.breakpoints.down("sm")]: {
      top: "2.75em",
      paddingTop: 25,
    },
    fontSize: "1.5rem",
    backgroundColor: "lightgrey",
    zIndex: 1000,
  },
  muscleGroup: {
    padding: 0,
    margin: "1em",
    marginBottom: "0em",
  },
}));

export default function ExerciseFinder({ exercises, findResults }) {
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
            {exercises.map((workout, index) => {
              if (workout.body === "Upper") {
                return (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={`${workout.slug}`}
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
              } else {
                return null;
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
            {exercises.map((workout, index) => {
              if (workout.body === "Lower") {
                return (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={`${workout.slug}`}
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
              } else {
                return null;
              }
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

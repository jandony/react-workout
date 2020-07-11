import React, { useState } from "react";
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

export default function Results({ results }) {
  const classes = useStyles();

  return (
    <Grid container style={{ marginTop: "1rem" }}>
      <Grid item sm={5}>
        <Typography variant="h2" style={{ padding: "0.5em" }}>
          Results
        </Typography>
        {results &&
          results.map((workout, index) => {
            return (
              <Workout key={index} name={workout.name} body={workout.body} />
            );
          })}
        <Grid container direction="row"></Grid>
      </Grid>
    </Grid>
  );
}

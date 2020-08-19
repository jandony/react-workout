import React from "react";

// Utilities
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

// Material Icons
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  orContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  exerciseContainer: {
    marginTop: "1rem",
    paddingTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  bodyTitle: {
    padding: "0.5em",
    position: "sticky",
    top: 72,
    paddingTop: 25,
    paddingBottom: 0,
    [theme.breakpoints.down("sm")]: {
      top: 0,
      paddingTop: 25,
    },
    fontSize: "2rem",
    backgroundColor: "lightgrey",
    zIndex: 1000,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  resultsContainer: {
    marginTop: "1rem",
    marginLeft: "12em",
    marginRight: "12em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: "3rem",
    },
  },
  snackbar: {
    marginBottomn: "3rem",
  },
  addButton: {
    textAlign: "center",
    marginBottom: "1rem",
  },
}));

export default function SavedPage({
  results,
  selectedExercises,
  setSelectedExercises,
  openSnackbar,
  handleCloseSnackbar,
  setSnackbar,
  snackbarName,
  setSnackbarName,
  exercisePage,
  selectCard,
}) {
  const classes = useStyles();

  console.log(results.Upper);

  return (
    <Grid
      container
      alignContent="flex-start"
      justify="center"
      className={classes.resultsContainer}
    >
      <Grid item xs={12} className={classes.exerciseContainer}>
        <Typography
          variant="h2"
          component="h2"
          className={classes.bodyTitle}
          boxShadow={3}
        >
          Saved Workout Page
          <hr />
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6} style={{ padding: "1rem" }}>
        <Typography variant="body1" component="body1">
          Upper Body Exercises:
        </Typography>
        <List>
          {results.upper.map((exercise, index) => {
            return (
              <ListItem
                key={index}
                className={classes.paper}
                divider
                button
                component={Link}
              >
                <ListItemText>{exercise}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="add">
                    <AddCircleIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>

        <Typography variant="body1" component="body1">
          Lower Body Exercises:
        </Typography>
        <List>
          {results.lower.map((exercise, index) => {
            return (
              <ListItem
                key={index}
                className={classes.paper}
                divider
                button
                component={Link}
              >
                <ListItemText>{exercise}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="add">
                    <AddCircleIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Typography variant="body1" align="center">
          This will contain saved exercises.
        </Typography>
      </Grid>
    </Grid>
  );
}

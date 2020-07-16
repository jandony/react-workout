import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  workoutCard: {
    margin: "1em",
    marginBottom: "0em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    width: 100,
  },
  cardText: {
    textAlign: "left",
  },
  cardContentContainer: {
    height: "100%",
    padding: "1rem",
  },
  muscleGroup: {
    fontSize: "1.5em",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function YourWorkouts({ removeEx, selectedExercises }) {
  const classes = useStyles();

  const exerciseIndex = (workout) => {
    const findExerciseIndex = selectedExercises.findIndex(
      (i) => i.name === workout.name
    );
    console.log("index: " + findExerciseIndex);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      style={{
        minHeight: "75vh",
        paddingLeft: "6rem",
        paddingBottom: "3rem",
        width: "100%",
      }}
    >
      <Grid item lg={5} style={{ marginTop: "6rem", width: "100%" }}>
        <Typography variant="h2">Your Workouts</Typography>
        <List>
          {selectedExercises == "" ? (
            <p>Add Exercises to View Your Workout!</p>
          ) : (
            selectedExercises.map((workout) => {
              return (
                <React.Fragment>
                  <ListItem
                    id={workout.name}
                    className={classes.paper}
                    divider
                    button
                    onClick={() => exerciseIndex(workout)}
                  >
                    <ListItemAvatar>
                      {/* <Avatar> */}
                      <img
                        src={workout.image}
                        alt={workout.name}
                        height="35"
                        width="35"
                      />
                      {/* </Avatar> */}
                    </ListItemAvatar>
                    <ListItemText primary={workout.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => removeEx(workout)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              );
            })
          )}
        </List>
      </Grid>
    </Grid>
  );
}

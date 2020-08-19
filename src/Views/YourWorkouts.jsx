import React from "react";

// Utilities
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

// Material Icons
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
  title: {
    fontSize: "1.5rem",
  },
  subtitle: {
    paddingLeft: "1rem",
    marginTop: "1rem",
  },
  buttonContainer: {
    textAlign: "center",
  },
  saveWorkoutButton: {
    textTransform: "Capitalize",
    padding: "1rem",
  },
  addExerciseButton: {
    textTransform: "Capitalize",
    marginBottom: "1rem",
    marginLeft: "1rem",
  },
}));

export default function YourWorkouts({
  findResults,
  removeExercise,
  selectedExercises,
  setExercisePage,
  setFormDialog,
  formDialog,
  setValue,
  savedWorkouts,
  updateSavedWorkouts,
  setSavedWorkouts,
}) {
  // console.log(savedWorkouts);
  const classes = useStyles();

  const selectExercisePage = (workout) => {
    const findExerciseIndex = selectedExercises.findIndex(
      (i) => i.name === workout.name
    );
    console.log("index: " + findExerciseIndex);
    setExercisePage({
      name: workout.name,
      image: workout.image,
      slug: workout.slug,
    });
  };

  const openFormDialog = () => {
    setFormDialog(true);
  };

  const closeFormDialog = () => {
    setFormDialog(false);
  };

  const newWorkout = (event) => {
    event.preventDefault();

    const workoutName = document.querySelector("#workout-name").value;
    const newWorkout = { name: workoutName, excercises: selectedExercises };
    closeFormDialog();
    updateSavedWorkouts(newWorkout);

    console.log(newWorkout);
    console.log("Submitted: " + event.target.value);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="flex-start"
      style={{
        minHeight: "75vh",
        paddingBottom: "3rem",
        width: "100%",
      }}
    >
      <Grid item lg={5} style={{ marginTop: "6rem", width: "100%" }}>
        <Typography variant="h2" align="center" className={classes.title}>
          Your Workouts
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          className={classes.subtitle}
        >
          Saved Workouts:
        </Typography>
        <List id="saved-workouts">
          {savedWorkouts &&
            savedWorkouts.map((workout, index) => {
              return (
                <ListItem
                  className={classes.paper}
                  key={index}
                  divider
                  button
                  component={Link}
                  to={`/saved/${workout.name}`}
                  onClick={() => findResults(workout)}
                >
                  <ListItemText>{workout.name}</ListItemText>
                  <IconButton edge="end" aria-label="view">
                    <ChevronRightIcon />
                  </IconButton>
                </ListItem>
              );
            })}
        </List>
        <Typography
          variant="subtitle1"
          align="left"
          className={classes.subtitle}
        >
          Selected Exercises:
        </Typography>
        <List>
          {selectedExercises &&
            selectedExercises.map((workout) => {
              return (
                <React.Fragment>
                  <ListItem
                    id={workout.name}
                    className={classes.paper}
                    divider
                    button
                    component={Link}
                    to={`/workout/${workout.slug}`}
                    onClick={() => selectExercisePage(workout)}
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
                        onClick={() => removeExercise(workout)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              );
            })}
        </List>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.addExerciseButton}
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            size="large"
            to="/"
            onClick={() => setValue(0)}
            component={Link}
          >
            Add Exercise
          </Button>
          <Button
            className={classes.saveWorkoutButton}
            variant="contained"
            color="primary"
            fullWidth
            onClick={openFormDialog}
          >
            Save New Workout ({selectedExercises.length})
          </Button>
          <Dialog
            open={formDialog}
            onClose={closeFormDialog}
            aria-labelledby="form-dialog-title"
            TransitionComponent={Transition}
            keepMounted
            fullWidth
          >
            <DialogTitle id="form-dialog-title">Save New Workout:</DialogTitle>
            <form>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="workout-name"
                  label="Workout Name"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeFormDialog} color="primary">
                  Cancel
                </Button>
                <Button color="primary" onClick={newWorkout}>
                  Save
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      </Grid>
    </Grid>
  );
}

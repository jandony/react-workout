import React, { useState } from "react";

// Data & Utilities
import { Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import history from "./History";
import { exercises } from "./Data";

// View Components
import ExerciseFinder from "./Views/ExerciseFinder.jsx";
import RecordWO from "./Views/RecordWO.jsx";
import YourWorkouts from "./Views/YourWorkouts.jsx";
import Results from "./Components/Results/Results.jsx";
import MusclePage from "./Components/MusclePage/MusclePage.jsx";

// Custom Components
import AppBar from "@material-ui/core/AppBar";
import NavBar from "./Components/NavBar/NavBar";
import SideBarTemporary from "./Components/SideBar/SideBarTemporary.jsx";

// Custom Styles
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
  },
}));

const App = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [results, setResults] = useState(null);

  const [exercisePage, setExercisePage] = useState({
    name: "exercise",
    image: "",
    slug: "",
  });

  const [selectedExercises, setSelectedExercises] = useState([]);

  const findResults = (workout) => {
    setResults(workout);
  };

  const removeExercise = (workout) => {
    const temp = [...selectedExercises];
    const newArray = temp.filter((i) => i.name !== workout.name);
    setSelectedExercises(newArray);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    // setDrawer will set the Drawer state to the direction of the openning drawer. Ex: left will open drawer to the left.
    setDrawer({ ...drawer, [anchor]: open });
  };

  const [drawer, setDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarName, setSnackbarName] = React.useState("");

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const selectCard = (workout, name, image) => {
    const newArray = selectedExercises;
    newArray.push({
      name: name,
      image: workout.image,
      cat: results.slug,
      slug: workout.slug,
    });

    setOpenSnackbar(true);
    setSnackbarName(name);
    setSelectedExercises(newArray);
  };

  const [formDialog, setFormDialog] = React.useState(false);
  const [savedWorkouts, setSavedWorkouts] = React.useState([
    {
      name: "Workout 1",
      exercises: [],
    },
    {
      name: "Workout 2",
      exercises: [],
    },
    {
      name: "Workout 3",
      exercises: [],
    },
  ]);
  const [workoutName, setWorkoutName] = React.useState("My Workout");

  return (
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}
    >
      <Router history={history}>
        <SideBarTemporary
          findResults={findResults}
          exercises={exercises}
          drawer={drawer}
          toggleDrawer={toggleDrawer}
        />

        <ThemeProvider theme={theme}>
          <AppBar className={classes.appBar}>
            <NavBar
              toggleDrawer={toggleDrawer}
              value={value}
              handleChange={handleChange}
              selectedExercises={selectedExercises}
            />
          </AppBar>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <ExerciseFinder
                  exercises={exercises}
                  findResults={findResults}
                />
              )}
            />
            <Route exact path="/record" component={RecordWO} />
            <Route
              exact
              path="/workouts"
              component={() => (
                <YourWorkouts
                  selectedExercises={selectedExercises}
                  removeExercise={removeExercise}
                  setExercisePage={setExercisePage}
                  setFormDialog={setFormDialog}
                  formDialog={formDialog}
                  workoutName={workoutName}
                  setWorkoutName={setWorkoutName}
                  setValue={setValue}
                  savedWorkouts={savedWorkouts}
                  setSavedWorkouts={setSavedWorkouts}
                />
              )}
            />
            <Route
              exact
              path="/:results"
              component={() => (
                <Results
                  results={results}
                  selectedExercises={selectedExercises}
                  setSelectedExercises={setSelectedExercises}
                  openSnackbar={openSnackbar}
                  handleCloseSnackbar={handleCloseSnackbar}
                  setOpenSnackbar={setOpenSnackbar}
                  snackbarName={snackbarName}
                  setSnackbarName={setSnackbarName}
                  setExercisePage={setExercisePage}
                  selectCard={selectCard}
                />
              )}
            />
            <Route
              path="/:name"
              component={() => (
                <MusclePage
                  exercisePage={exercisePage}
                  results={results}
                  selectCard={selectCard}
                  openSnackbar={openSnackbar}
                />
              )}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;

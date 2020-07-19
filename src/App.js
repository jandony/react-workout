import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";

import { exercises } from "./Data";

import NavBar from "./Components/NavBar/NavBar";

// view components
import ExerciseFinder from "./Views/ExerciseFinder.jsx";
import RecordWO from "./Views/RecordWO.jsx";
import YourWorkouts from "./Views/YourWorkouts.jsx";

import SideBar from "./Components/SideBar/SideBar.jsx";
import SideBarTemporary from "./Components/SideBar/SideBarTemporary.jsx";
import Results from "./Components/Results/Results.jsx";
import MusclePage from "./Components/MusclePage/MusclePage.jsx";

import history from "./History";

// custom components

// custom styles
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

  const [results, setResults] = useState(null);

  const [exercisePage, setExercisePage] = useState();

  const [selectedExercises, setSelectedExercises] = useState([]);

  const [totalExercises, setTotal] = useState(0);

  const [workouts, setWorkouts] = useState(exercises);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const findResults = (workout) => {
    setResults(workout);
  };

  const [removeExercises, setEx] = useState(null);
  const removeEx = (workout) => {
    setEx(workout);
    setTotal((count) => count - 1);

    const exerciseIndex = selectedExercises.findIndex(
      (i) => i.name === workout.name
    );
    selectedExercises.splice(exerciseIndex, 1);

    console.log("Exercise: " + workout.name);
    console.log("Index: " + exerciseIndex);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
  };

  const [drawer, setDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openSnackbar, setSnackbar] = React.useState(false);
  const [snackbarName, setSnackbarName] = React.useState("");

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  const selectCard = (workout, name, image) => {
    const newArray = selectedExercises;
    newArray.push({
      name: name,
      image: image,
      cat: results.slug,
      slug: workout.slug,
    });

    setSnackbar(true);
    setSnackbarName(name);
    setSelectedExercises(newArray);
    setTotal((count) => count + 1);
  };

  const [formDialog, setFormDialog] = React.useState(false);
  const [workoutName, setWorkoutName] = React.useState("");

  return (
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}
    >
      <Router history={history}>
        {/* <SideBar findResults={findResults} workouts={workouts} /> */}
        <SideBarTemporary
          findResults={findResults}
          workouts={workouts}
          drawer={drawer}
          toggleDrawer={toggleDrawer}
        />

        <ThemeProvider theme={theme}>
          <AppBar className={classes.appBar}>
            <NavBar
              totalExercises={totalExercises}
              toggleDrawer={toggleDrawer}
            />
          </AppBar>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <ExerciseFinder workouts={workouts} findResults={findResults} />
              )}
            />
            <Route exact path="/record" component={RecordWO} />
            <Route
              exact
              path="/workouts"
              component={() => (
                <YourWorkouts
                  selectedExercises={selectedExercises}
                  removeEx={removeEx}
                  setExercisePage={setExercisePage}
                  setFormDialog={setFormDialog}
                  formDialog={formDialog}
                  workoutName={workoutName}
                  setWorkoutName={setWorkoutName}
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
                  totalExercises={totalExercises}
                  setTotal={setTotal}
                  setSelectedExercises={setSelectedExercises}
                  openSnackbar={openSnackbar}
                  handleCloseSnackbar={handleCloseSnackbar}
                  setSnackbar={setSnackbar}
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

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
import Results from "./Components/Results/Results.jsx";

import history from "./History";

// custom components

// custom styles
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    [theme.breakpoints.down("sm")]: {
      position: "inherit",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const [results, setResults] = useState(null);

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

  return (
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}
    >
      <Router history={history}>
        <SideBar findResults={findResults} workouts={workouts} />

        <ThemeProvider theme={theme}>
          <AppBar className={classes.appBar}>
            <NavBar totalExercises={totalExercises} />
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
                />
              )}
            />
            <Route
              exact
              path="/results"
              component={() => (
                <Results
                  results={results}
                  selectedExercises={selectedExercises}
                  totalExercises={totalExercises}
                  setTotal={setTotal}
                  setSelectedExercises={setSelectedExercises}
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

import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";

import { upperExercises, lowerExercises } from "./Data";

import NavBar from "./Components/NavBar/NavBar";

// view components
import ExerciseFinder from "./Views/ExerciseFinder.jsx";
import RecordWO from "./Views/RecordWO.jsx";

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

  const [upperWorkouts, setUpperWorkouts] = useState(upperExercises);
  const [lowerWorkouts, setLowerWorkouts] = useState(lowerExercises);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const findResults = (workout) => {
    history.push("/results");
    setResults(workout.exercises);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}
    >
      <SideBar
        findResults={findResults}
        upperWorkouts={upperWorkouts}
        lowerWorkouts={lowerWorkouts}
      />

      <ThemeProvider theme={theme}>
        <Router history={history}>
          <AppBar className={classes.appBar}>
            <NavBar />
          </AppBar>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <ExerciseFinder
                  lowerWorkouts={lowerWorkouts}
                  upperWorkouts={upperWorkouts}
                />
              )}
            />
            <Route exact path="/record" component={RecordWO} />
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
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";

//
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

  const [upperWorkouts, setUpperWorkouts] = useState([
    {
      name: "Neck",
      body: "upper",
      exercises: [{ name: "Neck Ex 1" }, { name: "Neck Ex 2" }],
    },
    {
      name: "Traps (trapezius)",
      body: "upper",
      exercises: [{ name: "Traps Ex 1" }, { name: "Traps Ex 2" }],
    },
    {
      name: "Shoulders (deltoids)",
      body: "upper",
      exercises: [{ name: "Shoulders Ex 1" }, { name: "Shoulders Ex 2" }],
    },
    {
      name: "Chest (pectoralis",
      body: "upper",
      exercises: [{ name: "Chest Ex 1" }, { name: "Chest Ex 2" }],
    },
    {
      name: "Abs (abdominis)",
      body: "upper",
      exercises: [{ name: "Abs Ex 1" }, { name: "Abs Ex 2" }],
    },
    {
      name: "Lats (latissimus dorsi)",
      body: "upper",
      exercises: [{ name: "Lats Ex 1" }, { name: "Lats Ex 2" }],
    },
    {
      name: "Middle Back",
      body: "upper",
      exercises: [{ name: "Middle Back Ex 1" }, { name: "Middle Back Ex 2" }],
    },
    {
      name: "Lower Back",
      body: "upper",
      exercises: [{ name: "Lower Back Ex 1" }, { name: "Lower Back Ex 2" }],
    },
    {
      name: "Biceps",
      body: "upper",
      exercises: [{ name: "Biceps Ex 1" }, { name: "Biceps Ex 2" }],
    },
    {
      name: "Triceps",
      body: "upper",
      exercises: [{ name: "Triceps Ex 1" }, { name: "Triceps Ex 2" }],
    },
    {
      name: "Forearms",
      body: "upper",
      exercises: [{ name: "Forearms Ex 1" }, { name: "Forearms Ex 2" }],
    },
  ]);

  const [lowerWorkouts, setLowerWorkouts] = useState([
    {
      name: "Glutes (gluteus maximus)",
      body: "lower",
      exercises: [{ name: "Glutes Ex 1" }, { name: "Glutes Ex 2" }],
    },
    {
      name: "Quads (quadriceps)",
      body: "lower",
      exercises: [{ name: "Quads Ex 1" }, { name: "Quads Ex 2" }],
    },
    {
      name: "Hamstrings",
      body: "lower",
      exercises: [{ name: "Hamstrings Ex 1" }, { name: "Hamstrings Ex 2" }],
    },
    {
      name: "Calves",
      body: "lower",
      exercises: [{ name: "Calves Ex 1" }, { name: "Calves Ex 2" }],
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const findResults = (workout) => {
    history.push("/results");
    setResults(workout.exercises);
  };

  return (
<<<<<<< HEAD
    <div className="App" style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}>
=======
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}
    >
      <SideBar
        findResults={findResults}
        upperWorkouts={upperWorkouts}
        lowerWorkouts={lowerWorkouts}
      />
>>>>>>> ad81a8e... Build Sidebar component with built in navigation
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
              component={() => <Results results={results} />}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

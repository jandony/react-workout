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

// body images
import Neck from "./Assets/Images/neck.jpg";
import Traps from "./Assets/Images/traps.jpg";
import Shoulders from "./Assets/Images/shoulders.jpg";
import Chest from "./Assets/Images/chest.jpg";
import Abs from "./Assets/Images/abs.jpg";
import Lats from "./Assets/Images/lats.jpg";
import Back from "./Assets/Images/back.jpg";
import Biceps from "./Assets/Images/biceps.jpg";
import Triceps from "./Assets/Images/triceps.jpg";
import Forearms from "./Assets/Images/forearms.jpg";

import Glutes from "./Assets/Images/glutes.jpg";
import Quads from "./Assets/Images/quads.jpg";
import Hamstrings from "./Assets/Images/hamstrings.jpg";
import Calves from "./Assets/Images/calves.jpg";

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

  const [selectedExercises] = useState([]);
  const [totalExercises, setTotal] = useState(0);

  const [upperWorkouts, setUpperWorkouts] = useState([
    {
      name: "Neck",
      body: "upper",
      exercises: [
        { name: "Neck Ex 1", image: Neck },
        { name: "Neck Ex 2", image: Neck },
      ],
      image: Neck,
    },
    {
      name: "Traps (trapezius)",
      body: "upper",
      exercises: [
        { name: "Traps Ex 1", image: Traps },
        { name: "Traps Ex 2", image: Traps },
      ],
      image: Traps,
    },
    {
      name: "Shoulders (deltoids)",
      body: "upper",
      exercises: [
        { name: "Shoulders Ex 1", image: Shoulders },
        { name: "Shoulders Ex 2", image: Shoulders },
      ],
      image: Shoulders,
    },
    {
      name: "Chest (pectoralis",
      body: "upper",
      exercises: [
        { name: "Chest Ex 1", image: Chest },
        { name: "Chest Ex 2", image: Chest },
      ],
      image: Chest,
    },
    {
      name: "Abs (abdominis)",
      body: "upper",
      exercises: [
        { name: "Abs Ex 1", image: Abs },
        { name: "Abs Ex 2", image: Abs },
      ],
      image: Abs,
    },
    {
      name: "Lats (latissimus dorsi)",
      body: "upper",
      exercises: [
        { name: "Lats Ex 1", image: Lats },
        { name: "Lats Ex 2", image: Lats },
      ],
      image: Lats,
    },
    {
      name: "Middle Back",
      body: "upper",
      exercises: [
        { name: "Middle Back Ex 1", image: Back },
        { name: "Middle Back Ex 2", image: Back },
      ],
      image: Back,
    },
    {
      name: "Lower Back",
      body: "upper",
      exercises: [
        { name: "Lower Back Ex 1", image: Back },
        { name: "Lower Back Ex 2", image: Back },
      ],
      image: Back,
    },
    {
      name: "Biceps",
      body: "upper",
      exercises: [
        { name: "Biceps Ex 1", image: Biceps },
        { name: "Biceps Ex 2", image: Biceps },
      ],
      image: Biceps,
    },
    {
      name: "Triceps",
      body: "upper",
      exercises: [
        { name: "Triceps Ex 1", image: Triceps },
        { name: "Triceps Ex 2", image: Triceps },
      ],
      image: Triceps,
    },
    {
      name: "Forearms",
      body: "upper",
      exercises: [
        { name: "Forearms Ex 1", image: Forearms },
        { name: "Forearms Ex 2", image: Forearms },
      ],
      image: Forearms,
    },
  ]);

  const [lowerWorkouts, setLowerWorkouts] = useState([
    {
      name: "Glutes (gluteus maximus)",
      body: "lower",
      exercises: [{ name: "Glutes Ex 1" }, { name: "Glutes Ex 2" }],
      image: Glutes,
    },
    {
      name: "Quads (quadriceps)",
      body: "lower",
      exercises: [{ name: "Quads Ex 1" }, { name: "Quads Ex 2" }],
      image: Quads,
    },
    {
      name: "Hamstrings",
      body: "lower",
      exercises: [{ name: "Hamstrings Ex 1" }, { name: "Hamstrings Ex 2" }],
      image: Hamstrings,
    },
    {
      name: "Calves",
      body: "lower",
      exercises: [
        { name: "Calves Ex 1", image: Calves },
        { name: "Calves Ex 2", image: Calves },
      ],
      image: Calves,
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
    <div className="App" style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}>
      <SideBar findResults={findResults} upperWorkouts={upperWorkouts} lowerWorkouts={lowerWorkouts} />

      <ThemeProvider theme={theme}>
        <Router history={history}>
          <AppBar className={classes.appBar}>
            <NavBar />
          </AppBar>
          <Switch>
            <Route exact path="/" component={() => <ExerciseFinder lowerWorkouts={lowerWorkouts} upperWorkouts={upperWorkouts} />} />
            <Route exact path="/record" component={RecordWO} />
            <Route exact path="/results" component={() => <Results results={results} selectedExercises={selectedExercises} totalExercises={totalExercises} setTotal={setTotal} />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";

//
import NavBar from "./Components/NavBar/NavBar";

// view components
import ExerciseFinder from "./Views/ExerciseFinder.jsx";
import RecordWO from "./Views/RecordWO.jsx";

// custom components

// custom styles
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [exercises, setExercises] = useState([
    {
      name: "Bench Press",
      description: "Bench Press description example",
      body: "upper",
    },
    {
      name: "Bicep Curls",
      description: "Bicep Curls description example",
      body: "upper",
    },
    {
      name: "Chest Press",
      description: "Chest Press description example",
      body: "upper",
    },
    {
      name: "Push Ups",
      description: "Push Ups description example",
      body: "upper",
    },
    {
      name: "Calf Raises",
      description: "Calf Raises description example",
      body: "lower",
    },
    {
      name: "Deadlifts",
      description: "Deadlifts description example",
      body: "lower",
    },
    {
      name: "Lunges",
      description: "Lunges description example",
      body: "lower",
    },
    {
      name: "Squats",
      description: "Squats description example",
      body: "lower",
    },
  ]);
  return (
    <div
      className="App"
      style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar className={classes.appBar}>
            <NavBar />
          </AppBar>
          <Switch>
            <Route exact path="/" component={ExerciseFinder} />
            <Route exact path="/record" component={RecordWO} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;

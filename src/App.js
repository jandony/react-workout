import React, { useState, useEffect } from "react";

// Utilities
import "./App.css";
import theme from "./theme";
import history from "./History";
import { exercises } from "./Data";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";

// Material UI Components
import AppBar from "@material-ui/core/AppBar";

// View Components
import RecordWO from "./Views/RecordWO.jsx";
import YourWorkouts from "./Views/YourWorkouts.jsx";
import Results from "./Components/Results/Results.jsx";
import ExerciseFinder from "./Views/ExerciseFinder.jsx";
import MusclePage from "./Components/MusclePage/MusclePage.jsx";
import SavedPage from "./Components/SavedPage/SavedPage.jsx";

// Custom Components
import NavBar from "./Components/NavBar/NavBar";
import SideBarTemporary from "./Components/SideBar/SideBarTemporary.jsx";

// Firebase Configuration
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCoL6qmzyOQlhp6bXtM9_DTxueGCwlPcFQ",
  authDomain: "react-workout-app-756ef.firebaseapp.com",
  databaseURL: "https://react-workout-app-756ef.firebaseio.com",
  projectId: "react-workout-app-756ef",
  storageBucket: "react-workout-app-756ef.appspot.com",
  messagingSenderId: "517398979636",
  appId: "1:517398979636:web:9e8a5d9a7d3ba0d8845661",
  measurementId: "G-NH0HNL4VYL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
  },
}));

const App = () => {
  const classes = useStyles();

  const [firebaseData, setFirebaseData] = useState([]);
  console.log(firebaseData);

  useEffect(() => {
    firebase
      .firestore()
      .collection("saved-workouts")
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFirebaseData(newData);
        setSavedWorkouts(newData);
      });
  }, []);

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

  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const [selectedExercises, setSelectedExercises] = useState([]);

  const updateSavedWorkouts = (workout) => {
    setSavedWorkouts([...savedWorkouts, workout]);
  };

  const findResults = (workout) => {
    setResults(workout);
  };

  const removeExercise = (workout) => {
    const temp = [...selectedExercises];
    const newArray = temp.filter((i) => i.uniqueID !== workout.uniqueID);
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
    const uniqueID =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    newArray.push({
      name: name,
      image: workout.image,
      cat: results.slug,
      slug: workout.slug,
      uniqueID: uniqueID,
    });

    setOpenSnackbar(true);
    setSnackbarName(name);
    setSelectedExercises(newArray);
  };

  const [formDialog, setFormDialog] = React.useState(false);
  const [workoutName, setWorkoutName] = React.useState("");

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
                  findResults={findResults}
                  selectedExercises={selectedExercises}
                  removeExercise={removeExercise}
                  setExercisePage={setExercisePage}
                  setFormDialog={setFormDialog}
                  formDialog={formDialog}
                  workoutName={workoutName}
                  setWorkoutName={setWorkoutName}
                  setValue={setValue}
                  savedWorkouts={savedWorkouts}
                  updateSavedWorkouts={updateSavedWorkouts}
                  setSavedWorkouts={setSavedWorkouts}
                />
              )}
            />
            <Route
              exact
              path="/workout/:results"
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
              exact
              path="/workout/:category/:name"
              component={() => (
                <MusclePage
                  exercisePage={exercisePage}
                  results={results}
                  selectCard={selectCard}
                  openSnackbar={openSnackbar}
                />
              )}
            />
            <Route
              exact
              path="/saved/:workout"
              component={() => {
                return (
                  <SavedPage results={results} openSnackbar={openSnackbar} />
                );
              }}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;

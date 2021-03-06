import React from "react";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";

// Material Icons
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  orContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  exerciseContainer: {
    marginTop: "1rem",
    paddingTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  bodyTitle: {
    padding: "0.5em",
    position: "sticky",
    top: 72,
    paddingTop: 25,
    paddingBottom: 0,
    [theme.breakpoints.down("sm")]: {
      top: 0,
      paddingTop: 25,
    },
    fontSize: "2rem",
    backgroundColor: "lightgrey",
    zIndex: 1000,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  resultsContainer: {
    marginTop: "1rem",
    marginLeft: "12em",
    marginRight: "12em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: "3rem",
    },
  },
  snackbar: {
    marginBottomn: "3rem",
  },
  addButton: {
    textAlign: "center",
    marginBottom: "1rem",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}

export default function MusclePage({
  results,
  selectedExercises,
  setSelectedExercises,
  openSnackbar,
  handleCloseSnackbar,
  setSnackbar,
  snackbarName,
  setSnackbarName,
  exercisePage,
  selectCard,
}) {
  const classes = useStyles();

  console.log(results);
  //   console.log(exercisePage);
  //   console.log(results.slug);

  return (
    <Grid
      container
      alignContent="flex-start"
      justify="center"
      className={classes.resultsContainer}
    >
      <Grid item xs={12} className={classes.exerciseContainer}>
        <Typography
          variant="h2"
          component="h2"
          className={classes.bodyTitle}
          boxShadow={3}
        >
          {results && (
            <React.Fragment>
              <img
                src={results.image}
                alt="body part"
                height="100"
                width="100"
              />
              <br />
            </React.Fragment>
          )}
          {exercisePage.name} Page
          <hr />
          <div className={classes.addButton}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              size="large"
              onClick={() =>
                selectCard(exercisePage, exercisePage.name, exercisePage.slug)
              }
              button
            >
              Add Exercise
            </Button>
          </div>
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="body1" align="center">
          This will be information about {exercisePage.name}.
        </Typography>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          button
        >
          <Alert
            className={classes.snackbar}
            onClose={handleCloseSnackbar}
            severity="success"
          >
            {exercisePage.name} Successfully Added!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}

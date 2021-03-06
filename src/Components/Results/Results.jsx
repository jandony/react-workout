import React from "react";

// Utilities
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

// Material Icons
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
}));

function Alert(props) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}

export default function Results({
  results,
  openSnackbar,
  handleCloseSnackbar,
  snackbarName,
  setSnackbarName,
  setExercisePage,
  selectCard,
}) {
  const classes = useStyles();

  const selectExercisePage = (workout) => {
    console.log(workout);
    setExercisePage({
      name: workout.name,
      image: workout.image,
      slug: workout.slug,
    });
  };

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
          {results ? results.name : "No Results!!!"}
          <hr />
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <List>
          {results &&
            results.exercises.map((workout, index) => {
              const catName = results.slug;
              return (
                <React.Fragment>
                  <ListItem
                    id={workout.name}
                    key={index}
                    className={classes.paper}
                    divider
                    onClick={() => selectExercisePage(workout)}
                    button
                    component={Link}
                    to={`/${catName}/${workout.slug}`}
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
                        aria-label="add"
                        onClick={() =>
                          selectCard(workout, workout.name, workout.image)
                        }
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    button
                    component={Link}
                    to="/workouts"
                  >
                    <Alert
                      className={classes.snackbar}
                      onClose={handleCloseSnackbar}
                      severity="success"
                    >
                      {snackbarName} Successfully Added!
                    </Alert>
                  </Snackbar>
                </React.Fragment>
              );
            })}
        </List>
      </Grid>
    </Grid>
  );
}

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  workoutCard: {
    margin: "1em",
    marginBottom: "0em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    width: 100,
  },
  cardText: {
    textAlign: "left",
  },
  cardContentContainer: {
    height: "100%",
    padding: "1rem",
  },
  muscleGroup: {
    fontSize: "1.5em",
  },
}));

// main component
// import { Workout } from "../Components/Workout/Workout.jsx";

export default function YourWorkouts({ selectedExercises }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      style={{
        minHeight: "75vh",
        paddingLeft: "6rem",
        paddingBottom: "3rem",
        width: "100%",
      }}
    >
      <Grid item lg={5} style={{ marginTop: "6rem", width: "100%" }}>
        <Typography variant="h2">Your Workouts</Typography>
        {selectedExercises == ""
          ? "(Add Exercises to View Your Workout!)"
          : selectedExercises.map((workout) => {
              return (
                <Grid item sm={12} id={workout[0]}>
                  <Card className={classes.workoutCard}>
                    <CardActionArea onClick={""}>
                      <Grid container direction="row">
                        <Grid item sm={3}>
                          <CardMedia
                            className={classes.media}
                            image={workout[1]}
                            title="Contemplative Reptile"
                          />
                        </Grid>

                        <Grid item sm={9}>
                          <Grid
                            container
                            alignItems="center"
                            className={classes.cardContentContainer}
                          >
                            <Grid item>
                              <Typography
                                variant="p"
                                component="p"
                                className={classes.muscleGroup}
                              >
                                {workout[0]}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              ></Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </Grid>
  );
}

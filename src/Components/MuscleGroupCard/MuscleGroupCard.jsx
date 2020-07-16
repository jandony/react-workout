import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  workoutCard: {
    margin: 0,
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

export const MuscleGroupCard = ({ workout, findResults }) => {
  const classes = useStyles();

  const updateState = () => {
    findResults(workout);
  };

  const { name, body, image } = workout;

  return (
    <Grid item xs={12} id={name}>
      <Card className={classes.workoutCard}>
        <CardActionArea onClick={updateState}>
          <Grid container direction="row">
            <Grid item sm={3}>
              <CardMedia
                className={classes.media}
                image={image}
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
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {body}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

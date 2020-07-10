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
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0em",
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
  bodySection: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Workout = ({ name, body, image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.workoutCard}>
        <CardActionArea>
          <Grid container direction="row">
            <Grid item sm={2}>
              <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
            </Grid>
            <Grid item sm={10}>
              <Grid container direction="row" alignItems="center" className={classes.cardContentContainer}>
                <Grid item sm={8}>
                  <Typography variant="p" component="p" className={classes.muscleGroup}>
                    {name}
                  </Typography>
                </Grid>
                <Grid item sm={4}>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.bodySection}>
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

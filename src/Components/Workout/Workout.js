import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  workoutCard: {
    margin: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  cardText: {
    textAlign: "center",
  },
}));

export const Workout = ({ name, description, image }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.workoutCard}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
          <CardContent className={classes.cardText}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

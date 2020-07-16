import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Badge from "@material-ui/core/Badge";

import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import FitnessCenter from "@material-ui/icons/FitnessCenter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  tabs: {
    fontSize: "0.75em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5em",
    },
  },
}));

export default function CenteredTabs({ totalExercises }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  var total = totalExercises;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper style={{ borderRadius: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="Exercise Finder"
          icon={<SearchIcon />}
          className={classes.tabs}
          component={Link}
          to="/"
          onClick={handleChange}
        />
        <Tab
          label="Record Workout"
          icon={<CreateIcon />}
          className={classes.tabs}
          component={Link}
          to="/record"
          onClick={handleChange}
        />
        <Tab
          label="Your Workouts"
          icon={
            <Badge badgeContent={total} color="secondary">
              <FitnessCenter />
            </Badge>
          }
          className={classes.tabs}
          component={Link}
          to="/workouts"
          onClick={handleChange}
        />
      </Tabs>
    </Paper>
  );
}

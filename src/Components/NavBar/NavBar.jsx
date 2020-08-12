import React from "react";

// Utilities
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

// Material Icons
import MenuIcon from "@material-ui/icons/Menu";
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
  drawerButton: {
    marginLeft: "0.25em",
    marginTop: "0.5em",
    position: "absolute",
    zIndex: 100,
  },
  paper: {
    borderRadius: 0,
  },
  tabsContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "3em",
    },
  },
}));

export default function CenteredTabs({
  toggleDrawer,
  handleChange,
  selectedExercises,
  value,
}) {
  const classes = useStyles();

  var total = selectedExercises.length;

  return (
    <Paper className={classes.paper}>
      <IconButton
        edge="start"
        aria-label="drawer"
        className={classes.drawerButton}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabsContainer}
        centered
      >
        <Tab
          label="Exercise Finder"
          icon={<SearchIcon />}
          className={classes.tabs}
          component={Link}
          value={0}
          to="/"
        />
        <Tab
          label="Record Workout"
          icon={<CreateIcon />}
          className={classes.tabs}
          component={Link}
          value={1}
          to="/record"
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
          value={2}
          to="/workouts"
        />
      </Tabs>
    </Paper>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import FitnessCenter from "@material-ui/icons/FitnessCenter";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
          component={Link}
          to="/"
          onClick={handleChange}
        />
        <Tab
          label="Record Workout"
          icon={<CreateIcon />}
          component={Link}
          to="/record"
          onClick={handleChange}
        />
        <Tab
          label="Your Workouts"
          icon={<FitnessCenter />}
          component={Link}
          to="/workouts"
          onClick={handleChange}
        />
      </Tabs>
    </Paper>
  );
}

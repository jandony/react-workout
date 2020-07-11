import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import { Router, Link } from "react-router-dom";
import "./SideBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideBar({ findResults, lowerWorkouts, upperWorkouts }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <h2 className="SideBar--Heading">Upper</h2>
          <List>
            {upperWorkouts.map((workout, index) => (
              <ListItem button key={index} onClick={() => findResults(workout)}>
                <ListItemIcon>{<FitnessCenter />}</ListItemIcon>
                <ListItemText primary={workout.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <h2 className="SideBar--Heading">Lower</h2>
          <List>
            {lowerWorkouts.map((workout, index) => (
              <ListItem button key={index} onClick={() => findResults(workout)}>
                <ListItemIcon>{<FitnessCenter />}</ListItemIcon>
                <ListItemText primary={workout.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

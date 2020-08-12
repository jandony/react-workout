import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 300;

const useStyles = makeStyles({
  list: {
    width: drawerWidth,
  },
  fullList: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingBottom: "6rem",
  },
});

export default function SideBarTemporary({
  drawer,
  toggleDrawer,
  findResults,
  exercises,
}) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
          <h2 className="SideBar--Heading">Upper Body Muscles</h2>
          <List>
            {exercises.map((workout, index) => {
              if (workout.body === "Upper") {
                return (
                  <ListItem
                    button
                    divider
                    key={index}
                    component={Link}
                    to={"/results"}
                    onClick={() => findResults(workout)}
                  >
                    <ListItemIcon>
                      <img
                        src={workout.image}
                        alt="body part"
                        height="35"
                        width="35"
                      />
                    </ListItemIcon>
                    <ListItemText primary={workout.name} />
                  </ListItem>
                );
              } else {
                return null;
              }
            })}
          </List>
          <h2 className="SideBar--Heading">Lower Body Muscles</h2>
          <List>
            {exercises.map((workout, index) => {
              if (workout.body === "Lower") {
                return (
                  <ListItem
                    button
                    divider
                    key={index}
                    component={Link}
                    to={"/results"}
                    onClick={() => findResults(workout)}
                  >
                    <ListItemIcon>
                      <img
                        src={workout.image}
                        alt="body part"
                        height="35"
                        width="35"
                      />
                    </ListItemIcon>
                    <ListItemText primary={workout.name} />
                  </ListItem>
                );
              } else {
                return null;
              }
            })}
          </List>
        </div>
      </Drawer>
    </div>
  );

  return (
    <div style={{ position: "absolute" }}>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={drawer[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

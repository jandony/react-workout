import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";

// view components
import ExerciseFinder from "./Views/ExerciseFinder.jsx";
import RecordWO from "./Views/RecordWO.jsx";

// custom components

// custom styles
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App" style={{ backgroundColor: "lightgrey", minHeight: "98vh" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Paper style={{ borderRadius: 0 }}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
              <Tab label="Exercise Finder" icon={<SearchIcon />} component={Link} to="/" onClick={handleChange} />
              <Tab label="Record Workout" icon={<CreateIcon />} component={Link} to="/record" onClick={handleChange} />
            </Tabs>
          </Paper>
          <Switch>
            <Route exact path="/" component={ExerciseFinder} />
            <Route exact path="/record" component={RecordWO} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;

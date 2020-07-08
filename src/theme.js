import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

// color variables
// const arcBlue = "#0B72B9";
// const arcOrange = "#FFBA60";

const breakpoints = createBreakpoints({});

export default createMuiTheme({
  typography: {
    h2: {
      fontSize: "2rem",
      textAlign: "center",
    },
  },
});

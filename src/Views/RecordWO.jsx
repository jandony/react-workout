import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function RecordWO() {
  return (
    <Grid container spacing={3} direction="column" justify="center" alignItems="center" style={{ marginTop: "1rem", height: "75vh" }}>
      <Grid item>
        <Typography variant="h2">Record a Workout</Typography>
      </Grid>
    </Grid>
  );
}

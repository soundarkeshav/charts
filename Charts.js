import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import LineChart from "./LineChart";

export const Charts = () => {
    return (
      <>
      <Grid container  >
        <Grid xs={4}>
        <LineChart />
        </Grid>
        </Grid>
      </>
      );
}
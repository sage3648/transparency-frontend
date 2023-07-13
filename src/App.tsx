import React, { FormEvent, useState } from 'react';
import { green, purple } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  // const theme = createTheme({
  //   status: {
  //     danger: orange[500],
  //   },
  // });


  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      text: {
        primary: darkMode ? '#ffffff' : undefined, // Set white color in dark mode
      },
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <FormControlLabel
          control={
            <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" />
          }
          label="Dark Mode"
          labelPlacement="start"
        />
        <Typography variant="h4" align="center" gutterBottom>
          Transparency
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Employer"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Ranking (1-5)"
                type="number"
                variant="outlined"
                fullWidth
                inputProps={{ min: 1, max: 5 }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Salary"
                type="number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Job Description and Role"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default App;

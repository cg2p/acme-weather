import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import GetWeather from '../components/GetWeather';
import { useStyles } from '../components/Styles';

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          Weather API
        </Typography>
        <GetWeather /> 
      </Box>
      </Container>
      </Layout>
    </React.Fragment>
  );
}

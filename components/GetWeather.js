import React, { useState } from 'react';
import useSWR from 'swr';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './Styles';

const fetcher = (url) => fetch(url).then((res) => res.json())

function GetWeather () {
  const classes = useStyles();
    
  const [textInput, setTextInput] = useState('');
  const [tempOutput, setTempOutput] = useState('');
  const [conditionOutput, setConditionOutput] = useState('');
  //const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false)
    
  const handleTextInputChange = (event) => {
      setTextInput(event.target.value);
  };
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitting(true);
  
      var inputText = textInput;
      //var outputText = textOutput;
  
      setTextInput("");
      setTempOutput(""); 
      setConditionOutput(""); 
      setSubmitting(false);

      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: inputText
        }),
      };
 
      try {
          const fetchResponse = await fetch(`/api/weather`, settings);
          const data = await fetchResponse.json();
          setTempOutput("Temp (C) is " + data.temp); 
          setConditionOutput("Condition is " + data.condition); 
          return data;
      } catch (e) {
        setTextOutput("Error: ", e); 
        return e;
      }    
     
  }

  return (
      <div>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="textInput"
          label="Location"
          name="textInput"
          autoComplete="textInput"
          autoFocus
          value={textInput}
          onChange={handleTextInputChange}
          />          
          <Button 
          disabled={submitting} 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          >
          {submitting ? 'Looking up ...' : 'Get Weather'}
          </Button>
      </form>
      <br />
        <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {tempOutput}
              </Paper>
              <Paper className={classes.paper}>
                {conditionOutput}
              </Paper>
            </Grid>
        </Grid>
      </div>  
  )
  }
  
export default GetWeather;

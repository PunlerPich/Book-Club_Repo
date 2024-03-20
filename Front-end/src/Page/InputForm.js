import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import api from '../api';

function InputForm({book_id, addDiscussion}) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform actions with the captured data, such as submitting to a server
    console.log('Submitted Data:', { title, book_id });
    // Reset the input fields
    try {
      const response = await api.post('/api/discussions/', {
        title,
        book_id
      });
      addDiscussion(response.data);
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Create your Dicusss"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
      
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default InputForm;
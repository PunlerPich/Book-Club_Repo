import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ImageText = styled(Typography)({
  textAlign: 'right',
  marginTop: '8px',
});

const Tile = styled(Box)({
  padding: '20px',
  textAlign: 'left',
});

const TileText = styled(Typography)({
  fontSize: '2em',
  fontWeight: 'bold',
});

const GridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function BasicGrid() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, width: '70%', margin: 'auto', padding: '2%' }}>
      <Tile>
        <TileText variant="subtitle1">Comedy</TileText>
      </Tile>
      <Grid container spacing={2}>
        {books.map((book) => (
          <GridItem item xs={3} key={book.id}>
            <Link to={`detail/${book.id}`}>
              <Image src={"http://127.0.0.1:8000/storage/" + book.front_cover} alt={`Image ${book.id}`} />
            </Link>
              <ImageText variant="subtitle2">By {book.name}</ImageText>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
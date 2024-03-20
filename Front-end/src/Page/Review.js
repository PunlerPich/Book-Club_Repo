
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
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

const Card = styled(Box)({
  padding: '20px',
  textAlign: 'left',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect
});

const CardTitle = styled(Typography)({
  fontSize: '2em',
  marginBottom: '30px',
  fontWeight: 'bold',
});

const GridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const StarRating = styled(Box)({
  display: 'flex',
  marginBottom: '8px', // Add margin bottom for spacing
});

const Star = styled(StarIcon)({
  color: '#fdd835', // Yellow color for filled star
  marginRight: '2px',
});

const EmptyStar = styled(StarIcon)({
  color: '#ccc', // Gray color for empty star
  marginRight: '2px',
});
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
      <CardTitle variant="subtitle1">Review</CardTitle>
      <Grid container spacing={2}>
      {books.map((book) => (
        <GridItem item xs={4}>
          <Link to="/page1">
            <Card>
            <div className="star-container">
              {Array.from({ length: book.rating }, (_, index) => (
                <StarIcon key={index} className="star-icon" />
              ))}
            </div>
              <Image src={`http://127.0.0.1:8000/storage/${book.front_cover}`} alt={`Image ${book.id}`} />
              <ImageText variant="subtitle2">By {book.author_name}</ImageText>
            </Card>
          </Link>
          
        </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
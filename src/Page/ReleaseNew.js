import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

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

  
  padding:'20px',
  textAlign: 'left',
});

const TileText = styled(Typography)({
  fontSize:'2em',
  fontWeight: 'bold',
  
});

const GridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, width: '70%', margin: 'auto', padding: '2%' }}>
      <Tile>
        <TileText variant="subtitle1">News Release</TileText>
      </Tile>
      <Grid container spacing={2}>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By Doctor OppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/13890265/pexels-photo-13890265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/7256732/pexels-photo-7256732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By Doctor OppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/13890265/pexels-photo-13890265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
        </GridItem>
        <GridItem item xs={3}>
          <Image src="https://images.pexels.com/photos/7256732/pexels-photo-7256732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
          <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
        </GridItem>
      </Grid>
    </Box>
  );
}
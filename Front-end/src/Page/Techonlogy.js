import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from '../assets/images/thisisengineering-raeng-t4qI2IDcL5s-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ReactIcon = <FontAwesomeIcon icon={faReact} size="2x" />;
const MaterialUIIcon = <FontAwesomeIcon icon="fa-solid fa-bacon" />;
const LaravelIcon = <FontAwesomeIcon icon={faLaravel} size="2x" />;
const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const Image = styled('img')({
  width: '100%',
 
});


const TextContainer = styled('div')({
  fontFamily: 'fantasy',
});

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ width: '70%', margin: 'auto' }}>
        <Grid item xs={8}>
          <Item>
            <ImageContainer>
              <Image src={Logo} alt="Logo" />
            </ImageContainer>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ backgroundColor: '#F4F4F4' }}>
            <TextContainer>
              <h1 style={{ fontFamily: 'sans-serif' }}>FrontEnd</h1>
              <p style={{ textAlign: 'justify', padding: '5px' }}>
                Front-end refers to the client-side of a web application or software, where the user interacts directly.
                It involves the presentation layer and user interface (UI) components of a website or application that users can see and interact with.
              </p>
              <p style={{ textAlign: 'justify', padding: '10px' }}>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  {ReactIcon}{'    '}React.js is a popular JavaScript library for building user interfaces. It was developed by Facebook
                  and is widely used for creating dynamic and interactive web applications.
                </a>
              </p>
              <p style={{ textAlign: 'justify', padding: '10px' }}>
                <a href="https://material-ui.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  {MaterialUIIcon}{' '}
                  Material-UI is a popular UI library for React that implements Google's Material Design. It offers a comprehensive set
                  of customizable components.
                </a>
              </p>
            </TextContainer>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ backgroundColor: '#F4F4F4', width:'100%' }}>
            <TextContainer>
              <h1 style={{ fontFamily: 'sans-serif' }}>Backend</h1>
              <p style={{ textAlign: 'justify', padding: '5px' }}>
                In the context of software development, the term "backend" refers to the server-side of an application or system. It encompasses the underlying infrastructure, databases, and logic that handle data processing, storage, and retrieval.
              </p>
              <p style={{ textAlign: 'justify', padding: '10px' }}>
  <a href="https://laravel.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    {LaravelIcon}{'    '}Laravel is a popular open-source PHP framework used for web application development. It follows the Model-View-Controller (MVC) architectural pattern, which promotes the separation of concerns and enables developers to build scalable and maintainable applications.
  </a>
</p>
             
            </TextContainer>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <ImageContainer>
              <Image src={Logo} alt="Logo" />
            </ImageContainer>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
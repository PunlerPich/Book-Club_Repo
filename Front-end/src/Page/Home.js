import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useHistory } from "react-router-dom";
import Footer from "../Component/Footer";

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "260px",
  borderRadius: "20px",
  overflow: "hidden",
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 255, 0.5)",
  color: "#fff",
  opacity: 0,
  transition: "opacity 0.3s",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
});

export default function BasicGrid() {
  const history = useHistory();

  const handleClick = (imageId) => {
    // Navigate to the desired page with the clicked image's ID
    history.push(`/image/${imageId}`);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "70%", margin: "auto", padding: "1%" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://belnew.s3.amazonaws.com/pexels-wallace-chuck-3109167.jpg"
              alt="Image 1"
            />
            <Overlay>Mystery/Thriller</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="	https://images.pexels.com/photos/2237798/pexels-photo-2237798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Fantasy</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Science Fiction</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/4273468/pexels-photo-4273468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Romance</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/2736542/pexels-photo-2736542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Historical Fiction</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/4590202/pexels-photo-4590202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Biography/Autobiography</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/373465/pexels-photo-373465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Self-Help</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/2237801/pexels-photo-2237801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Horror</Overlay>
          </ImageContainer>
        </Grid>
        <Grid item xs={4}>
          <ImageContainer onClick={() => handleClick(1)}>
            <Image
              src="https://images.pexels.com/photos/894612/pexels-photo-894612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
            <Overlay>Poetry</Overlay>
          </ImageContainer>
        </Grid>
        {/* Repeat the same structure for other images */}
        {/* ... */}
      </Grid>
    </Box>
  );
}

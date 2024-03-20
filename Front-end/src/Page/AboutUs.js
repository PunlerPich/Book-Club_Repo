import React from "react";
import { Link } from 'react-router-dom';
import "../styles/main.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import testImg from "../assets/images/2.jpg";
import { Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import pic from "../assets/images/pich.jpg";
import bun from "../assets/images/bun3.jpg";
import san from "../assets/images/tra.jpg";
import pon from "../assets/images/pon.jpg";
import cheat from "../assets/images/ch.jpg";
import img1 from "../assets/images/3.jpg";
import img2 from "../assets/images/4.jpg";
import img3 from "../assets/images/5.jpg";
import img4 from "../assets/images/6.jpg";
import img5 from "../assets/images/7.jpg";
import img6 from "../assets/images/8.jpg";
import img7 from "../assets/images/22.jpg";
import img8 from "../assets/images/11.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/13.jpg";
import img11 from "../assets/images/15.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const itemData = [
  {
    img: "/assets/images/4.jpg",
    title: "Bed",
  },
  {
    img: img1,
    title: "Books",
  },
  {
    img: img2,
    title: "Sink",
  },
  {
    img: img3,
    title: "Kitchen",
  },
  {
    img: img4,
    title: "Blinds",
  },
  {
    img: img5,
    title: "Chairs",
  },
  {
    img: img6,
    title: "Laptop",
  },
  {
    img: img7,
    title: "Doors",
  },
  {
    img: img8,
    title: "Coffee",
  },
  {
    img: img9,
    title: "Coffee",
  },
  {
    img: img10,
    title: "Coffee",
  },
  {
    img: img11,
    title: "Coffee",
  },
];
function AboutUS() {
  return (
    <Box sx={{ flexGrow: 1 ,width:'80%',margin:'auto'}} >
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <br />
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        Our Team
      </h3>
      <Grid className="grid1" container spacing={12} columns={16}>
        <Grid xs={5}>
          <Item>
            <div className="team-col-1">
              <img src={pic} alt=" Image 1" className="img-test" />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h1>PunlerPich</h1>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h3>Frontend</h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left" }}>
                <h3>
                  As a developer, your skills and expertise play a vital role in
                  building innovative and efficient software solutions. With
                  your knowledge of programming languages, frameworks, and
                  development tools,
                </h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "#1E90FF" }}>
                <h3>PunlerPich@gmail.com</h3>
              </Box>
            </div>
            <br />
            <button className="btn-contact">Contact</button>
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <div className="team-col-1">
              <img src={bun} alt=" Image 1t" className="img-test" />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h1>Bunnavoit</h1>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h3>Frontend</h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left" }}>
                <h3>
                  As a developer, your skills and expertise play a vital role in
                  building innovative and efficient software solutions. With
                  your knowledge of programming languages, frameworks, and
                  development tools,
                </h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "#1E90FF" }}>
                <h3>Bunnavoit@gmail.com</h3>
              </Box>
            </div>
            <br />
            <button className="btn-contact">Contact</button>
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <div className="team-col-1">
              <img src={testImg} alt=" Image 1" className="img-test" />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h1>SIHeang</h1>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h3>Frontend</h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left" }}>
                <h3>
                  As a developer, your skills and expertise play a vital role in
                  building innovative and efficient software solutions. With
                  your knowledge of programming languages, frameworks, and
                  development tools,
                </h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "#1E90FF" }}>
                <h3>SIHeang@gmail.com</h3>
              </Box>
            </div>
            <br />
            <button className="btn-contact">Contact</button>
          </Item>
        </Grid>
      </Grid>
      <br />
      <Grid className="grid1" container spacing={12} columns={16}>
        <Grid xs={5}>
          <Item>
            <div className="team-col-1">
              <img src={pon} alt=" Image 1" className="img-test" />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h1>Neavireakpong</h1>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h3>Backend</h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left" }}>
                <h3>
                  As a developer, your skills and expertise play a vital role in
                  building innovative and efficient software solutions. With
                  your knowledge of programming languages, frameworks, and
                  development tools,
                </h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "#1E90FF" }}>
                <h3>Neavireakpong@gmail.com</h3>
              </Box>
            </div>
            <br />
            <button className="btn-contact">Contact</button>
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <div className="team-col-1">
              <img src={cheat} alt=" Image 1" className="img-test" />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h1>Socheat</h1>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h3>Backend</h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left" }}>
                <h3>
                  As a developer, your skills and expertise play a vital role in
                  building innovative and efficient software solutions. With
                  your knowledge of programming languages, frameworks, and
                  development tools,
                </h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "#1E90FF" }}>
                <h3>Socheat@gmail.com</h3>
              </Box>
            </div>
            <br />
            <button className="btn-contact">Contact</button>
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <div className="team-col-1">
              <img src={san} alt=" Image 1" className="img-test" />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h1>Sopheaktra</h1>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "black" }}>
                <h3>Backend</h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left" }}>
                <h3>
                  As a developer, your skills and expertise play a vital role in
                  building innovative and efficient software solutions. With
                  your knowledge of programming languages, frameworks, and
                  development tools,
                </h3>
              </Box>
              <br />
              <Box style={{ textAlign: "left", color: "#1E90FF" }}>
                <h3>Sopheaktra@gmail.com</h3>
              </Box>
            </div>
            <br />
            <button className="btn-contact">Contact</button>
          </Item>
        </Grid>
      </Grid>
      <br />
      <Box sx={{ width: "100%", height: 600, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <br/>
    </Box>
  );
}

export default AboutUS;

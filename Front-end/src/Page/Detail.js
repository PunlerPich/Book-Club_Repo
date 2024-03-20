import React, { useEffect, useState } from "react";
import "../styles/main.css";
import image from "../assets/images/1.png";
import GoogleImage from "../assets/images/google.png";
import StarIcon from "@mui/icons-material/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import InputForm from"./InputForm";
const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ImageText = styled(Typography)({
  textAlign: "right",

});

const Tile = styled(Box)({
  padding: "10px",
  textAlign: "left",
});

const TileText = styled(Typography)({
  fontSize: "2em",
  fontWeight: "bold",
});

const GridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",

  color: theme.palette.text.secondary,
}));

function removeHtmlTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function Detail() {
  const [book, setBook] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/books/${id}`
        );
        setBook(response.data);
        setDiscussions(response.data.discussions)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  const addDiscussion = (discussion) => {
    setDiscussions((previousDiscussions) => [...previousDiscussions, discussion])
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  // const discussions = book.discussions ?? [];

  return (
    <div className="init-container">
      <div className="container-detail">
        <div className="image-box-detail">
          <Image
            src={`http://127.0.0.1:8000/storage/${book.front_cover}`}
            alt={`Image ${book.id}`}
          />
        </div>
        <div className="text-container">
          <div className="form-field">
            <label className="label-title">{book.name}</label>
            <div className="star-container">
              {Array.from({ length: book.rating }, (_, index) => (
                <StarIcon key={index} className="star-icon" />
              ))}
            </div>
            <label className="label-subtitle">{book.author_name}</label>
            <label className="label-desc">
              {removeHtmlTags(book.description)}
            </label>
          </div>
        </div>
      </div>

      <div className="title-question">
        <BookmarkIcon className="btn-bookmark" style={{ fontSize: "55px" }} />
        <h1>Discuss Question</h1>
      </div>
      <Grid>
      <GridItem item xs={12} sx={{width:'70%',margin:'auto',}}>
        <InputForm  book_id={book.id} addDiscussion={addDiscussion}/>
      </GridItem>
      </Grid>
      {discussions.map((discussion) => (
        
        <Grid
          key={discussion.id}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ width: "60%", margin: "auto" }}
        >
          <Grid xs={12}>
            <Item className="subtitle-question">
              <h2 className="text-title">{discussion.user.name}</h2>
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item className="subtitle2-question" sx={{fontSize:'1.5em'}}>{discussion.title}</Item>
          </Grid>
          <Grid xs={12}>
            <Item className="btn-reply">
              <div className="button-container">
                <button className="btn-rr">Reply</button>
                <button className="btn-cc">comment</button>
              </div>
              
            </Item>
            <Item>
                <Comment discussion_id={discussion.id} />
            </Item>
          </Grid>
        
        </Grid>

      
      ))}



      <><div className="title-question">
  <BookmarkIcon className="btn-bookmark" style={{ fontSize: "55px" }} />
  <h1>Similar Book</h1>
</div><Box sx={{ flexGrow: 1, width: "70%", margin: "auto", padding: "2%" }}>
    <Grid container spacing={2}>
      <GridItem item xs={3}>
        <Image
          src="https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 1" />
        <ImageText variant="subtitle2">By Doctor OppenHumber</ImageText>
      </GridItem>
      <GridItem item xs={3}>
        <Image
          src="https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 1" />
        <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
      </GridItem>
      <GridItem item xs={3}>
        <Image
          src="https://images.pexels.com/photos/13890265/pexels-photo-13890265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 1" />
        <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
      </GridItem>
      <GridItem item xs={3}>
        <Image
          src="https://images.pexels.com/photos/7256732/pexels-photo-7256732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 1" />
        <ImageText variant="subtitle2">By DoctorOppenHumber</ImageText>
      </GridItem>
    
    </Grid>
    
  </Box></>
    </div>
  );
}

export default Detail;

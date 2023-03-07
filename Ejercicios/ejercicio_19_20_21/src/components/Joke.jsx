import React, { useState } from "react";
import { getRandomJoke } from "../services/axiosService";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  const obtainJoke = () => {
    getRandomJoke()
      .then((response) => {
        if (response.status === 200) {
          setJoke(response.data.value);
        }
        console.log(response);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  const handleLike = () => {
    if (like) {
      setLike(false);
      setLikesCount(likesCount - 1);
    } else {
      setLike(true);
      setLikesCount(likesCount + 1);
      if (dislike) {
        setDislike(false);
        setDislikesCount(dislikesCount - 1);
      }
    }
  };

  const handleDislike = () => {
    if (dislike) {
      setDislike(false);
      setDislikesCount(dislikesCount - 1);
    } else {
      setDislike(true);
      setDislikesCount(dislikesCount + 1);
      if (like) {
        setLike(false);
        setLikesCount(likesCount - 1);
      }
    }
  };

  return (
    <div>
      <h1>Chuck Norris's Joke</h1>
      <h2>{joke}</h2>
      <Button
        variant="contained"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          obtainJoke();
          setLike(false);
          setDislike(false);
        }}
      >
        Generate Joke
      </Button>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button
          variant={like ? "contained" : "outlined"}
          color="success"
          onClick={handleLike}
          startIcon={<ThumbUpIcon />}
        >
          Like
        </Button>
        <Button
          variant={dislike ? "contained" : "outlined"}
          color="error"
          onClick={handleDislike}
          startIcon={<ThumbDownIcon />}
        >
          Dislike
        </Button>
      </Stack>
      <div>
        <h3>Nro Total de Likes: {likesCount}</h3>
        <h3>Nro Total de Dislikes: {dislikesCount}</h3>
      </div>
    </div>
  );
};

export default Joke;

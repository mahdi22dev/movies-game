import React from "react";
import styled from "styled-components";

const Score = ({ prop }) => {
  const { color, title, id } = prop;
  const url = `https://www.themoviedb.org/movie/${id}`;
  return (
    <ScoreStyled className='flex'>
      <p className='flex' style={{ backgroundColor: color }}>
        {title ? title : "title"}{" "}
        <a target='_blank' href={url}>
          IMDB
        </a>
      </p>
    </ScoreStyled>
  );
};

const ScoreStyled = styled.div`
  width: 100%;

  p {
    width: min(100%, 500px);
    min-height: 50px;
    margin: 10px auto;
    padding: 15px;
    font-weight: 700;
    font-size: clamp(16px, 1.2vw, 20px);
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: var(--headtext);
  }
`;
export default Score;

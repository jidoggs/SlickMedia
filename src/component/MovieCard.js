import React from "react";
import styled from "styled-components";
const StyledMovieCard = styled.div`
  background-color: yellowgreen;
  width: 300px;
  height: 300px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  padding: 150px 150px;

  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;

  @media (max-width: 425px) {
    width:200px;
    height:200px;
    padding: 100px 100px;
  }
  
`;

function MovieCard({ title }) {
  return <StyledMovieCard>{title}</StyledMovieCard>;
}

export default MovieCard;

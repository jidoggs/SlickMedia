import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
const StyledCategory = styled.section`
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  
  @media (max-width: 425px) {
    padding-top: 33px;
    row-gap: 26px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
  }
`;
const StyledCarousal = styled.div`
  display: flex;
  column-gap: 13px;
  width: 100%;
  overflow-x: scroll;
  /* box-sizing: border-box; */
`;

function MovieCategory({ categoryName, categoryArray }) {
  return (
    <StyledCategory>
      <h2>{categoryName}</h2>

      <StyledCarousal>
        {categoryArray?.map((movie, id) => {
          return <MovieCard key={id} title={movie?.Title} image={movie?.Poster} />;
        })}
      </StyledCarousal>
    </StyledCategory>
  );
}

export default MovieCategory;

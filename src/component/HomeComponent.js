import React from "react";
import styled from "styled-components";
import MovieCategory from "./MovieCategory";
import SearchBox from "./SearchBox";

const CategoryContainer = styled.div`
  padding-left: 67px;
  padding-bottom: 67px;
  
  @media (max-width: 425px) {
    padding-left: 28px;
    padding-bottom: 50px;
  }
`;

function HomeComponent() {
    const fakeData = ["brue", "helen","brue", "helen","brue", "helen",]
  return (
    <>
      <SearchBox />
      <CategoryContainer>
        <MovieCategory categoryName={"Action"} categoryArray={fakeData} />
        <MovieCategory categoryName={"Drama"} categoryArray={fakeData}  />
      </CategoryContainer>
    </>
  );
}

export default HomeComponent;

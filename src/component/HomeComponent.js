import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
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

const ResultContainer = styled.div`
  padding: 67px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 425px) {
    padding: 50px 28px;
    gap: 12px;
  }
`



function HomeComponent() {
    const [mockCategoryData, setMockCategoryData] = useState({action:[], drama: []})

    const [res, setRes] = useState([]);
    

    useEffect(() => {
     axios.get(`http://www.omdbapi.com/?s=action&page=2&apiKey=${process.env.REACT_APP_OMDB_API}`).then(res => setMockCategoryData(prev => ({...prev, action: res.data?.Search})))
     axios.get(`http://www.omdbapi.com/?s=drama&page=2&apiKey=${process.env.REACT_APP_OMDB_API}`).then(res => setMockCategoryData(prev => ({...prev, drama: res.data?.Search})))
    }, [])

  return (
    <>
      <SearchBox setRes={setRes} />
      {
        res.length === 0 ?
      <CategoryContainer>
        <MovieCategory categoryName={"Action"} categoryArray={mockCategoryData.action} />
        <MovieCategory categoryName={"Drama"} categoryArray={mockCategoryData.drama}  />
      </CategoryContainer>:
        <ResultContainer onClick={() => { setRes([]) }} >
          {res.map((movie,index) => { 
            return <MovieCard key={index} image={movie?.Poster} title={movie?.title} />
           }) }
        </ResultContainer>
      }
    </>
  );
}

export default HomeComponent;

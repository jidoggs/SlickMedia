import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
const StyledSearch = styled.form`
  display: flex;
  flex-direction: column;
  padding: 63px 57px 0 77px;

  @media (max-width: 834px) {
    padding-right: 77px;
  }
  @media (max-width: 425px) {
    padding: 56px 28px;
    padding-bottom: 0;
  }

  label {
    font-weight: 400;
    margin-bottom: 4px;
  }
  input {
    height: 54px;
  }
`;

function SearchBox({setRes}) {
  const [value, setValue] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(value);
    try {
      // make axios post request
      const response = await axios({
        method: "get",
        url: `http://www.omdbapi.com/?s=${value}&page=2&apiKey=${process.env.REACT_APP_OMDB_API}`,
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      console.log(response)

      if (response.data?.Response === "True") {
      response &&  setRes(response.data?.Search)
      }
      else{
        throw Error
      }

    } catch(error) {
      console.log(error)
    }

    setValue("")
  };


  return (
    <StyledSearch onSubmit={onSubmitHandler}>
      <label htmlFor="searchBox">Search</label>
      <input
        type="search"
        name="searchBox"
        id="searchBox"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyledSearch>
  );
}

export default SearchBox;

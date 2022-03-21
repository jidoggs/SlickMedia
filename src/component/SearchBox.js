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

function SearchBox() {
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
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

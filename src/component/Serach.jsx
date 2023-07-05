import React from "react";
import styled from "styled-components";

const Serach = ({ search }) => {
  return (
    <SearchStyled>
      {search.map((keys) => {
        return <li>{keys.title}</li>;
      })}
    </SearchStyled>
  );
};

const SearchStyled = styled.ul`
  max-height: 200px;
  background-color: red;
`;
export default Serach;

import React from "react";
import styled from "styled-components";

const Keyword = ({ keys }) => {
  return <List>{keys.name}</List>;
};

const List = styled.li`
  background-color: #0f0e17;

  padding: 10px;
  width: min(80%, 400px);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5px;
`;
export default Keyword;

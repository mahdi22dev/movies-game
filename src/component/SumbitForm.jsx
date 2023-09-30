import React from "react";
import Input from "./Input";
import { inputs } from "../data";
import StyledButton from "./StyledButton";
import styled from "styled-components";
import Serach from "./Serach";

const SumbitForm = ({
  value,
  setValue,
  handleGusses,
  handleSkip,
  search,
  setSearch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormWrapper className='flex' onSubmit={handleSubmit}>
      <div className=''>
        <Input input={inputs} setValue={setValue} value={value} />
        <ul>
          {search &&
            search.map((keys) => {
              return (
                <li
                  key={keys.title}
                  onClick={(e) => {
                    setValue(keys.title);
                    e.stopPropagation();
                  }}
                >
                  {keys.title}
                </li>
              );
            })}
        </ul>
        )
      </div>
      <div className='btns'>
        <StyledButton onClick={handleGusses} text={"Sumbit"}>
          Sumbit
        </StyledButton>
        <StyledButton onClick={handleSkip} text={"Skip"}></StyledButton>
      </div>
    </FormWrapper>
  );
};
const FormWrapper = styled.form`
  input {
    min-width: 100%;
    width: min(60%, 350px);
    margin-right: 10px;
    height: 45px;
    padding: 10px;
    margin-top: 25px;
  }
  div {
    position: relative;
    width: 100%;
  }
  ul {
    position: absolute;
    background-color: #fff;
    width: 100%;
    z-index: 1111;
    max-height: 200px;
    overflow: scroll;
    overflow-x: hidden;
  }
  li {
    color: var(--pargraph);
    padding: 5px;
    width: 100%;
    height: 35px;
    background-color: #ffe;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;
export default SumbitForm;

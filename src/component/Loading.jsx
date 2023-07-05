import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <LoadingStyled>
        <svg class='pl' width='240' height='240' viewBox='0 0 240 240'>
          <circle
            class='pl__ring pl__ring--a'
            cx='120'
            cy='120'
            r='105'
            fill='none'
            stroke='#000'
            stroke-width='20'
            stroke-dasharray='0 660'
            stroke-dashoffset='-330'
            stroke-linecap='round'
          ></circle>
          <circle
            class='pl__ring pl__ring--b'
            cx='120'
            cy='120'
            r='35'
            fill='none'
            stroke='#000'
            stroke-width='20'
            stroke-dasharray='0 220'
            stroke-dashoffset='-110'
            stroke-linecap='round'
          ></circle>
          <circle
            class='pl__ring pl__ring--c'
            cx='85'
            cy='120'
            r='70'
            fill='none'
            stroke='#000'
            stroke-width='20'
            stroke-dasharray='0 440'
            stroke-linecap='round'
          ></circle>
          <circle
            class='pl__ring pl__ring--d'
            cx='155'
            cy='120'
            r='70'
            fill='none'
            stroke='#000'
            stroke-width='20'
            stroke-dasharray='0 440'
            stroke-linecap='round'
          ></circle>
        </svg>
      </LoadingStyled>
    </>
  );
};

const LoadingStyled = styled.main`
  background-color: var(--game-background);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
export default Loading;

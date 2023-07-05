import React from "react";
import Score from "./Score";
import styled from "styled-components";
import { Gamevariants } from "../variants/variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Lose = ({ score, titlesList }) => {
  return (
    <>
      <LoseStyled
        variants={Gamevariants}
        exit={"exit"}
        initial={"hidden"}
        animate={"visible"}
        as={motion.main}
        className='flex'
      >
        <h2>Score: {score}</h2>

        {titlesList.map((title) => {
          return <Score key={title.key} prop={title} />;
        })}

        <Link className='link flex' to={"/game"}>
          Play Again
        </Link>
      </LoseStyled>
    </>
  );
};

const LoseStyled = styled.main`
  height: 100vh;
  width: 100%;
  flex-direction: column;

  h2 {
    font-size: clamp(40px, 5vw, 60px);
  }
`;
export default Lose;

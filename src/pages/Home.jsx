import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import background from "../assets/background.jpg";
import { homeVariants } from "../variants/variants";
const Home = () => {
  return (
    <HomeWrraper
      style={{
        background: `linear-gradient(rgb(255, 137, 6,0.2), rgba(0, 0, 0, 0.9)),url(${background}) center/cover no-repeat`,
      }}
      as={motion.main}
      variants={homeVariants}
      exit={"exit"}
      initial={"hidden"}
      animate={"visible"}
    >
      <h1>plot words game</h1>
      <p>
        Try to guess as many movies correctly as possible based on their plot
        keywords. Each correct guess earns you points, but be careful! If you
        make a wrong guess, you'll lose a life. If you lose all your lives, the
        game will come to an end.
      </p>
      <Link className='link flex' to={"/game"}>
        Play Now
      </Link>
    </HomeWrraper>
  );
};

const HomeWrraper = styled.main`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  p {
    max-width: 500px;
    text-align: center;
  }
  .link {
    margin-top: 10px;
  }
`;
export default Home;

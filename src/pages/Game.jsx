import React, { useEffect, useState } from "react";
import {
  capitalizeFirst,
  getRandomNumber,
  options,
  text,
} from "../utils/utils";
import { lifes } from "../data";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import styled from "styled-components";
import Loading from "../component/Loading";
import SumbitForm from "../component/SumbitForm";
import { Gamevariants } from "../variants/variants";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Keyword from "../component/Keyword";
import Lose from "../component/Lose";

const Game = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [titlesList, setTitlesList] = useState([]);
  const [keywords, setkeywords] = useState("");
  const [queryEnabled, setQueryEnabled] = useState(false);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [score, setScore] = useState(0);
  const [isLose, setIsLose] = useState(false);
  const [lifesState, setLifeState] = useState([...lifes]);
  const updatedLifesState = [...lifesState];

  // urls
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${getRandomNumber(
    500
  )}&region=US`;
  const keysUrl = `https://api.themoviedb.org/3/movie/${movieTitle?.id}/keywords`;
  const urlKeys = `https://api.themoviedb.org/3/search/movie?query=${capitalizeFirst(
    value
  )}&include_adult=false&language=en-US&page=1`;

  // fetch random movie
  const fetchRandomMovie = async () => {
    try {
      setMovieTitle("");
      setQueryEnabled(false);
      const response = await fetch(url, options);
      const data = await response.json();
      setMovieTitle(data.results[getRandomNumber(20)]);
      setQueryEnabled(true);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch keywords based on movie id
  const fetchMovieKeywords = async () => {
    try {
      if (movieTitle) {
        const response = await fetch(keysUrl, options);
        const jsonData = await response.json();
        setkeywords(jsonData.keywords);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetch by keyword
  const fetchByKeywords = async () => {
    try {
      if (movieTitle) {
        setSearch("");
        const response = await fetch(urlKeys, options);
        const jsonData = await response.json();
        setSearch(jsonData.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetch using qeury
  const { isLoading, refetch: fetchRandom } = useQuery(
    "fetchRandomMovie",
    fetchRandomMovie,
    {
      refetchOnWindowFocus: false,
    }
  );
  const {} = useQuery("fetchMovieKeywords", fetchMovieKeywords, {
    enabled: queryEnabled,
  });
  const { refetch } = useQuery("fetchbykeywords", fetchByKeywords, {
    refetchOnWindowFocus: false,
  });

  // useEffect
  useEffect(() => {
    if (value) {
      refetch();
    }
  }, [value]);
  useEffect(() => {
    if (lifesState == 0) {
      setIsLose(true);
    }
  }, [lifesState]);

  // Handle logicconst capitalizedValue = words

  const handleGusses = () => {
    if (capitalizeFirst(value) == movieTitle.title) {
      const title = [
        ...titlesList,
        { id: movieTitle.id, title: movieTitle.title, color: "green" },
      ];
      setTitlesList(title);
      fetchRandom();
      setSearch("");
      setValue("");
      setScore(score + 1);
    } else {
      const title = [
        ...titlesList,
        { id: movieTitle.id, title: movieTitle.title, color: "red" },
      ];
      setTitlesList(title);
      updatedLifesState.pop();
      setLifeState(updatedLifesState);
      setSearch("");
      setValue("");
      setScore(score - 1);
      if (score == 0) {
        setScore(0);
      }
    }
  };
  const handleSkip = () => {
    const title = [
      ...titlesList,
      { id: movieTitle.id, title: movieTitle.title, color: "red" },
    ];
    setTitlesList(title);
    fetchRandom();
    updatedLifesState.pop();
    setLifeState(updatedLifesState);
    setScore(score - 1);
    fetchRandom();
    if (score == 0) {
      setScore(0);
    }
    setValue("");
  };

  // Losing component
  if (isLose) {
    return (
      <>
        <Lose titlesList={titlesList} score={score} />
      </>
    );
  }
  if (isLoading) {
    return <Loading />;
  }
  // Game UI
  return (
    <GameWrraper
      className='flex'
      as={motion.main}
      variants={Gamevariants}
      exit={"exit"}
      initial={"hidden"}
      animate={"visible"}
      onClick={() => {
        setSearch("");
      }}
    >
      <div className='test-title'>
        <p>{movieTitle ? `${movieTitle.title}` : "title"}</p>
      </div>

      {text}

      <div className='score flex'>
        <p className='score-text'>
          Score :{score > 0 ? `+ ${score}` : ` ${score}`}
        </p>

        <div className='flex'>
          {lifesState.map((life) => {
            return (
              <p className='lifes' key={life.name}>
                <FaHeart />
              </p>
            );
          })}
        </div>
      </div>

      {keywords && (
        <>
          <SumbitForm
            value={value}
            handleGusses={handleGusses}
            setValue={setValue}
            handleSkip={handleSkip}
            search={search}
            setSearch={setSearch}
          />
          <div className='release_date'>
            <p>
              {movieTitle.release_date
                ? `release date : ${movieTitle.release_date}`
                : "release date... "}
            </p>
          </div>
          <ul>
            {keywords.map((keys) => {
              return (
                <>
                  <Keyword key={keys.id} keys={keys} />
                </>
              );
            })}
          </ul>
          <Link className='link flex' to={"/"}>
            Back to Home
          </Link>
        </>
      )}
    </GameWrraper>
  );
};

const GameWrraper = styled.main`
  background-color: var(--game-background);
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  padding: 50px;
  max-width: 900px;
  margin: 0 auto;
  p {
    text-align: center;
    max-width: 700px;
  }
  .score {
    padding: 5px;
    width: min(80%, 580px);
    justify-content: space-between;
    .score-text {
      font-size: 20px;
    }
    .lifes {
      min-width: 27%;
      color: var(--color-primary-500);
      font-size: clamp(15px, 1.3vw, 25px);
      margin-right: 10px;
    }
  }
  form {
    margin-bottom: 25px;
    width: min(80%, 580px);
  }
  ul {
    width: 100%;
  }
  a {
    margin-top: 20px;
  }
  .release_date {
    margin: 15px;
    padding: 5px;
    width: min(80%, 400px);
    background-color: #0f0e17;
    border: 2px solid green;
    text-align: center;

    p {
      color: green;
      font-size: clamp(17px, 1.3vw, 20px);
    }
  }
  .test-title {
    min-height: 100px;
  }
  @media (max-width: 790px) {
    form {
      margin-bottom: 25px;
      flex-direction: column;
    }
    input {
      width: 100%;
    }
    .btns {
      display: flex;
      width: 100%;
      margin-top: 20px;
      justify-content: space-between;
    }
  }
  @media (max-width: 650px) {
    form {
      margin-bottom: 25px;
      flex-direction: column;
    }
    input {
      width: 100%;
    }
    .btns {
      display: flex;
      width: 100%;
      margin-top: 20px;
      justify-content: space-between;
    }
  }
`;

export default Game;

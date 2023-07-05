export const getRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * (maxNumber + 1));
};

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

export const text = (
  <p>
    Try to guess as many movies correctly as possible based on their plot
    keywords. Each correct guess earns you points, but be careful! If you make a
    wrong guess, you'll lose a life. If you lose all your lives, the game will
    come to an end.
  </p>
);
export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

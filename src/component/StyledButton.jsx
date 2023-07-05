import React from "react";

const StyledButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='styled-btn'>
      {text}
    </button>
  );
};

export default StyledButton;

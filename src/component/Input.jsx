import React from "react";

const Input = ({ input, setValue, value }) => {
  return (
    <>
      <input
        className='input'
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        {...input}
      />
    </>
  );
};

export default Input;

import React from 'react';

function Input(props) {
  return (
    <>
      <input
        type="text"
        name={props.name}
        value={props.value}
        placeholder="Add to-do item"
        onChange={props.handleChange}
      ></input>
    </>
  );
}

export default Input;

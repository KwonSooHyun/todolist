import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [text, setText] = useState('');
  const { listAll, setListAll } = props;

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    axios.put('http://localhost:3333/list/', {
      text,
    }).then((res) => {
      const { createList } = res.data;
      setListAll([...listAll, createList]);
    });
  };

  return (
    <div>
      <input name="" onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

Input.propTypes = {
  listAll: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  setListAll: PropTypes.func,
};

export default Input;

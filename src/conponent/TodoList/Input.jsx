import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [text, setText] = useState('');
  const { setList } = props;

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    axios.put('http://localhost:3333/list/', {
      text,
    }).then(() => axios.get('http://localhost:3333/list/list')
      .then(({ data }) => {
        setList(data.list);
      }));
  };

  return (
    <div>
      <input name="" onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

Input.propTypes = {
  setList: PropTypes.func,
};

export default Input;

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
    if (text === undefined || typeof text === 'string' || text === '') return alert('텍스트를 입력해주세요.');
    axios.put('http://localhost:3333/list/', {
      text,
    }).then((res) => {
      const { createList } = res.data;
      if (createList === undefined || typeof createList !== 'object') return;
      if (listAll === undefined || !Array.isArray(listAll)) return;
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
  listAll: PropTypes.arrayOf(
    PropTypes.shape({
      listId: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  setListAll: PropTypes.func,
};

export default Input;

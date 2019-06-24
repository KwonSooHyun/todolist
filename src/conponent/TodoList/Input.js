import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Input = (props) => {
  const [text, setText] = useState('');
  const { setList } = props;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    axios.put('http://localhost:3333/list/', {
      text: text
    }).then(() => 
      axios.get('http://localhost:3333/list/list').then(({ data }) => {
        setList(data.list);
      })
    );
  }
  return (
    <div>
      <input name="" onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default Input;
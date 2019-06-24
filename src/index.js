/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import TodoList from './conponent/TodoList';


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoContainer from './components/ToDoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoList from './pages/TodoPage/ToDoList'
import { BrowserRouter } from "react-router-dom";
import App from './App'

// import 'antd/dist/antd.css';
// import { DatePicker } from 'antd';

ReactDOM.render(
    // <TodoList />,document.getElementById('root')
    <BrowserRouter>
    <App />
  </BrowserRouter>,document.getElementById('root')
  // <DatePicker />,document.getElementById('root')
)

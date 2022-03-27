import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import './tailwind.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
)

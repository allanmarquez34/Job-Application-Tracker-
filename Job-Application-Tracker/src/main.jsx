import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="body">
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </div>
)

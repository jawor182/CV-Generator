import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <div className='contentForm'>
    <General />
    <Education />
    <Experience />
    </div>
    
  </React.StrictMode>,
)

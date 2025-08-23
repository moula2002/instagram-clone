import React, { useContext } from 'react'

import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'
import { ThemeContext } from './context/ThemeContext'
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-container d-flex vh-100 ${theme}`}>
  <div className="sidebar-section">
    <Sidebar />
  </div>
  <div className="feed-section flex-grow-1">
    <Feed />
  </div>
  <div className="suggestions-section">
    <Suggestions />
  </div>
</div>
    
  )
}

 export default App
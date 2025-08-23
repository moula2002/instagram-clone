import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext'; 
import logoText from './assets/Instagram text.png';

function Sidebar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div className={`sidebar ${theme}`}>
      <div className="nav">
        <img className="logo-text" src={logoText} alt="Instagram" />
       
        <div className="nav-item" onClick={() => navigate('/app')}>
          <i className="bi bi-house-door"></i>
          <span className="nav-label">Home</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/search')}>
          <i className="bi bi-search"></i>
          <span className="nav-label">Search</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/explore')}>
          <i className="bi bi-compass"></i>
          <span className="nav-label">Explore</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/reels')}>
          <i className="bi bi-play"></i>
          <span className="nav-label">Reels</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/messages')}>
          <i className="bi bi-chat-dots"></i>
          <span className="nav-label">Messages</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/notification')}>
          <i className="bi bi-heart"></i>
          <span className="nav-label">Notifications</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/create')}>
          <i className="bi bi-plus-square"></i>
          <span className="nav-label">Create</span>
        </div>

        <div className="nav-item" onClick={() => navigate('/profile')}>
          <i className="bi bi-person"></i>
          <span className="nav-label">Profile</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <a
          href="https://www.threads.com/@devil_with_curls"
          className="nav-item link"
        >
          <i className="bi bi-threads"></i>
          <span className="nav-label">Threads</span>
        </a>

        <div className="nav-item mt-3" onClick={toggleTheme}>
          <i className={theme === 'light' ? 'bi bi-moon' : 'bi bi-sun'}></i>
          <span className="nav-label">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

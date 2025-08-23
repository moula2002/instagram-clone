
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStory from './viewStory.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Profile.jsx'
import Search from './Search.jsx'
import Explore from './Explore.jsx'
import Reels from './Reels.jsx'
import Messages from './Messages.jsx'
import Notification from './Notification.jsx'
import Create from './Create.jsx'
import More from './More.jsx'
import Treads from './Treads.jsx'
import Login from './Login.jsx'
import { ThemeContext, ThemeProvider } from './context/ThemeContext.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Login /> },   
  { path: "/app", element: <App /> },  
  { path: "/story/:id/:tot", element: <ViewStory /> },
  { path: "/profile", element: <Profile /> },
  { path: "/search", element: <Search /> },
  { path: "/explore", element: <Explore /> },
  { path: "/reels", element: <Reels /> },
  { path: "/messages", element: <Messages /> },
  { path: "/notification", element: <Notification /> },
  { path: "/create", element: <Create /> },
  { path: "/more", element: <More /> },
  { path: "/treads", element: <Treads /> },

])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

// json-server --watch db/db.json --port 3000
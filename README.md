# Instagram Clone – Frontend (React)

A responsive Instagram-like frontend built with **React + Vite**.  
This project replicates core Instagram UI features like feed, reels, stories, profile, and search.  

---

## ✨ Features (Frontend)
- 🔐 Login & Signup pages (UI only / Dummy API)  
- 🏠 Feed page with posts (like, comment, share buttons)  
- 🎥 Reels page (auto-play, swipe, sound on/off)  
- 📖 Stories (top scroll bar with avatars)  
- 👤 Profile page (bio, posts, followers/following UI)  
- 🔎 Search users/hashtags  
- 📩 Notifications dropdown  
- 📲 Responsive design (mobile-first)  
- 🌙 Dark/Light mode (optional)  

---

## 🧰 Tech Stack
- **React 18**  
- **Vite** (build tool)  
- **React Router DOM** (routing)  
- **Axios / Fetch** (API calls)  
- **CSS / Tailwind / MUI** (styling – based on what you used)  
- **React Icons / Lucide** (icons)  

---

## 📂 Folder Structure
client/
├── public/ # static assets
│ └── images/, videos/
├── src/
│ ├── assets/ # images, icons
│ ├── components/ # reusable UI components (Sidebar, Search, ReelPlayer, etc.)
│ ├── pages/ # Login, Feed, Profile, Reels, Explore, Notification, Treads
│ ├── hooks/ # custom hooks (useAuth, useFetch)
│ ├── utils/ # helper functions
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css / tailwind.css
└── README.md

🚀 Local Development
1. Clone & Install
git clone https://github.com/you/insta-clone-frontend.git
 1. cd insta-clone-frontend

2. npm install

3. Run (Dev)
npm run dev


App will start at http://localhost:5173.

4. Starting the DUMMY-DATABASE 

json-server --watch db/db.json --port 3000


5. Build
npm run build

🌐 Deployment

Netlify / Vercel → just connect repo and deploy

Ensure .env values are set in dashboard

🗺️ Roadmap

 Infinite scroll in feed

 Story view

 Explore page grid

 Chat UI (DM screen)

 Dark mode
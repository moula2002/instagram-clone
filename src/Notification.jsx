import React, { useState, useEffect } from "react";
import { FaHeart, FaUserPlus, FaComment } from "react-icons/fa";


const dummyNotifications = [
  { id: 1, user: "vampire_gwrl", avatar: "../src/assets/sowmi.JPG", type: "liked your photo", time: "2h ago", action: "like", unread: true },
  { id: 2, user: "v3-man", avatar: "../src/assets/v3_man.jpg", type: "started following you", time: "5h ago", action: "follow", unread: true },
  { id: 3, user: "Kishore_kumar", avatar: "../src/assets/kishore.jpg", type: "commented: Nice shot!", time: "1d ago", action: "comment", unread: false },
  { id: 4, user: "Visnu_prasant", avatar: "../src/assets/visnu.jpeg", type: "liked your photo", time: "2d ago", action: "like", unread: false },
];

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setNotifications(dummyNotifications);
    }, 500);
  }, []);

  const getIcon = (action) => {
    switch (action) {
      case "like": return <FaHeart className="notif-icon like" />;
      case "follow": return <FaUserPlus className="notif-icon follow" />;
      case "comment": return <FaComment className="notif-icon comment" />;
      default: return null;
    }
  };

  return (
    <div className="notification-card">
      <h2 className="notification-header">Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notif) => (
          <li key={notif.id} className={`notification-item ${notif.unread ? "unread" : ""}`}>
            <img src={notif.avatar} alt={notif.user} className="notif-avatar" />
            <div className="notif-content">
              <span className="notif-user">{notif.user}</span>{" "}
              <span className="notif-type">{notif.type}</span>
              <div className="notif-time">{notif.time}</div>
            </div>
            {getIcon(notif.action)}
            {notif.unread && <span className="notif-badge"></span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

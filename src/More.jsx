import React from "react";

export default function More() {
  const menuItems = [
    { name: "Settings", icon: "⚙️" },
    { name: "Your activity", icon: "📊" },
    { name: "Saved", icon: "💾" },
    { name: "Switch appearance", icon: "🌙" },
    { name: "Report a problem", icon: "⚠️" },
    { name: "Threads", icon: "✉️" },
    { name: "Switch accounts", icon: "🔄" },
    { name: "Log out", icon: "🚪" },
  ];

  return (
    <div className="more-container">
      <h2>Instagram</h2>
      <ul className="more-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

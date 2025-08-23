import React, { useState } from "react";


const initialChats = [
  { id: 1, name: "vampire_gwrl", avatar: "../src/assets/sowmi.JPG", lastMessage: "❤️😺", time: "10m", unread: true },
  { id: 2, name: "v3_man", avatar: "../src/assets/v3_man.jpg", lastMessage: "Super bro🚀", time: "1h", unread: true },
  { id: 3, name: "mr_loki_03", avatar: "../src/assets/loki.png", lastMessage: "You sent an attachment.", time: "1h", unread: false },
  { id: 4, name: "kisore_kumar", avatar: "../src/assets/Kishore.jpg", lastMessage: "Kisore sent an attachment.", time: "2h", unread: false },
  { id: 5, name: "visnu_prasanth", avatar: "../src/assets/visnu.jpeg", lastMessage: "🔥🙏", time: "2h", unread: false },
  { id: 6, name: "weirdo_kid", avatar: "../src/assets/biker.jpg", lastMessage: "💯📸", time: "3h", unread: false },
];

export default function Messages() {
  const [chats] = useState(initialChats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="messagesContainer">

      <div className="sidebar">
        <h2 className="sidebarHeader">Messages</h2>
        <input
          type="text"
          placeholder="Search"
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="chatsList">
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              className={`chatItem ${chat.unread ? "unread" : ""} ${selectedChat?.id === chat.id ? "selected" : ""}`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.avatar} alt={chat.name} className="chatAvatar" />
              <div className="chatInfo">
                <span className="chatName">{chat.name}</span>
                <span className="chatLastMessage">{chat.lastMessage}</span>
              </div>
              <span className="chatTime">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>


      <div className="chatContent">
        {selectedChat ? (
          <div className="chatWindow">
            <h3>{selectedChat.name}</h3>
            <p>Start chatting with {selectedChat.name}...</p>
          </div>
        ) : (
          <div className="noChatSelected">
            <div className="placeholderIcon">💬</div>
            <h3>Your messages</h3>
            <p>Send a message to start a chat.</p>
            <button className="sendMsgBtn">Send message</button>
          </div>
        )}
      </div>
    </div>
  );
}

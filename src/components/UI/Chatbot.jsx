import React, { useState, useRef } from 'react';

import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { CloseOutlined, SmartToyOutlined, SendOutlined } from "@mui/icons-material";
function Chatbot() {
    // Chat Bot
    const [messages, setMessages] = useState([
        { role: "bot", content: "Hi there 👋 \nHow can I help you today?" },
    ]);
    const [userMessage, setUserMessage] = useState("");

    const chatBoxRef = useRef(null);
    const API_KEY = "sk-...qNAA"; 

    const handleChat = async () => {
        if (!userMessage.trim()) return;
    
        const newMessages = [...messages, { role: "user", content: userMessage }];
        setMessages(newMessages);
        setUserMessage("");
    
        // Scroll to the bottom
        setTimeout(() => {
          chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
        }, 100);
    
        // Placeholder response while waiting for AI response
        setMessages((prev) => [...prev, { role: "bot", content: "Thinking..." }]);
    
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-4o",
              messages: newMessages.map((msg) => ({
                role: msg.role === "user" ? "user" : "assistant",
                content: msg.content,
              })),
            }),
          });
    
          const data = await response.json();
          const botMessage = data?.choices?.[0]?.message?.content || "❌ Error: No response from AI.";
            setMessages((prev) => [
            ...prev.slice(0, -1), // إزالة رسالة "Thinking..."
            { role: "bot", content: botMessage },
            ]);

        } catch (error) {
          setMessages((prev) => [
            ...prev.slice(0, -1),
            { role: "bot", content: "❌ Error: Unable to get a response. Please try again." },
          ]);
        }
      };

    const handleOpenChat = () => {
        document.querySelector(".chatbot").classList.toggle("show");
    };
  return (
    <div>
      <div className="chatbot">
          <header>
              <h2>Contact Us</h2>
              <span><CloseOutlinedIcon /></span>
          </header>
          <ul className="chatbox">
            {messages.map((msg, index) => (
                <li key={index} className={`chat ${msg.role === "user" ? "outgoing" : "incoming"}`}>
                    {msg.role === "bot" && <span><SmartToyOutlined /></span>}
                    <p>{msg.content}</p>
                </li>
            ))}
          </ul>
          <div className="chat-input">
                <textarea
                placeholder="Enter a message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleChat();
                    }
                }}
                />
              <span onClick={() => handleChat()}><SendOutlinedIcon /></span>
          </div>
      </div>
      <button className="chatbot-toggler" onClick={handleOpenChat}>
          <span><CommentOutlinedIcon /></span>
          <span><CloseOutlinedIcon /></span>
      </button>
  </div>
  )
}

export default Chatbot
import React, { useState, useEffect } from 'react';
// In a real app, you would use: import io from 'socket.io-client';

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  // This useEffect simulates receiving messages via a websocket
  useEffect(() => {
    // const socket = io('http://localhost:3001');
    // socket.on('chat message', (msg) => {
    //   setMessages(prev => [...prev, msg]);
    // });
    // return () => socket.disconnect();
    
    // --- Mock implementation ---
    const mockMessages = [
      { user: 'Admin', text: 'Welcome to the community chat!' },
      { user: 'Volunteer1', text: 'Excited for the upcoming event!' },
    ];
    setMessages(mockMessages);
    // -------------------------
  }, []);

  const sendMessage = () => {
    if(input.trim()) {
      const newMessage = { user: 'Me', text: input };
      // In real app: socket.emit('chat message', newMessage);
      setMessages([...messages, newMessage]); // Add locally for immediate feedback
      setInput('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-[600px] flex flex-col">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Community Chatroom</h2>
      <div className="flex-grow overflow-y-auto mb-4 p-2 bg-gray-50 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold text-blue-600">{msg.user}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow border rounded-l-md p-2"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600">Send</button>
      </div>
    </div>
  );
};

export default CommunityChat;
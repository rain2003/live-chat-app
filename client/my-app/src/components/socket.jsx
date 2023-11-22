import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './message';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const socket = io('http://localhost:5001');

function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('sendMessage', { text: messageText });
    setMessageText('');
  };

  return (
    <div className="App">
      <h1>Real-Time Chat App</h1>
      <div className="input-box">
       
        <TextField id="outlined-basic" label="Type Your Message" variant="outlined" 
          
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        
        <Button  variant="outlined" sx={{width : 100 , padding : 2}} onClick={sendMessage}>Send</Button>

        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px', maxHeight: '300px', overflowY: 'auto' }}>
  {messages.map((message, index) => (
    <Message key={index} username={message.username} text={message.text} />
  ))}
</div>
      </div>
    </div>
  );
}

export default App;
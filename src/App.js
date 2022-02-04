import { useState } from 'react';
import './App.scss';
import ChatList from './components/chat-list/chat-list';
import Header from './components/header/header';
import Send from './components/send/send';

function App() {
  const [messages, setMessages] = useState([]);


  return (
    <div className="App">
      <Header />
      <ChatList messages={messages} />
      <Send onSend={(message) => {
        setMessages([
          ...messages,
          { message, date: new Date().toLocaleTimeString().slice(0, -3) }
        ])
      }} />
    </div>
  );
}

export default App;

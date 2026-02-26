import {  useEffect, useRef } from 'react'
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({ chatMessages }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={scrollRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  );
}

export default ChatMessages;
// Changed from './assets' to '../assets' to go up one folder
import UserProfileImage from '../assets/user3.png'
import RobotProfileImage from '../assets/robot6.png'

import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
  const isRobot = sender === 'robot';
  
  return (
    <div className={isRobot ? "chat-message-robot" : "chat-message-user"}>
      {isRobot && (
        <img src={RobotProfileImage} className="chat-message-profile" alt="robot" />
      )}
      
      <div className="chat-message-text">
        {message}
      </div>

      {!isRobot && (
        <img src={UserProfileImage} className="chat-message-profile" alt="user" />
      )}
    </div>
  );
}
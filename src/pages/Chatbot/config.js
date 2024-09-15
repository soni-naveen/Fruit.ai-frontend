import { createChatBotMessage } from 'react-chatbot-kit';
const botName = 'Bot Buddy';

const config = {
  initialMessages: [createChatBotMessage(`Hi, I'm ${botName}. To see prices type "list"/ "price"`)],
  botName : botName,
};

export default config;
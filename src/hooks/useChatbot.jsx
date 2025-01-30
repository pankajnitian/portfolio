import { useState } from "react";

export const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { type: 'user', message }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setChatHistory((prev) => [
        ...prev,
        { type: 'bot', message: data.answer },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [
        ...prev,
        { type: 'bot', message: 'Sorry, I cannot answer right now.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    chatHistory,
    loading,
    sendMessage,
  };
};
import React, { useState } from "react";
import { FaTimes, FaRobot } from "react-icons/fa"; // Chatbot icons
import { useChatbot } from "../hooks/useChatbot"; // Custom hook for managing chat state
import { getOpenAICallback } from '../utils/openai'; // Import OpenAI function

const Chatbot = () => {
  const { chatHistory, sendMessage, loading } = useChatbot();
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      const response = await getOpenAICallback(message); // Call OpenAI API
      sendMessage(response); // Send the response to the chat history
      setMessage(""); // Clear the input field
    } catch (error) {
      console.error("Error sending message:", error);
      sendMessage("Sorry, I couldn’t process your request."); // Handle errors
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "chatbot-large" : "chatbot-small"}`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center mb-2 cursor-pointer" onClick={toggleChat}>
          {isOpen ? <FaTimes size={30} /> : <FaRobot size={30} />}
        </div>

        {isOpen && (
          <>
            <div className="chat-history">
              <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`p-2 rounded-lg ${chat.type === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
                    <p>{chat.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg min-w-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { // Trigger only on Enter key
                    e.preventDefault(); // Prevent default behavior (e.g., new line)
                    handleSendMessage(); // Call the send message function
                  }
                }}
                placeholder="Ask about my resume..."
                onClick={(e) => e.stopPropagation()} // Prevent event propagation
              />
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  handleSendMessage();
                }}
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                disabled={loading} // Disable the button while loading
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
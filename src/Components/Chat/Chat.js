import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const apiKey = "sk-abcdef1234567890abcdef1234567890abcdef12"; // Replace with an environment variable in production
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const requestBody = {
        model: "gpt-3.5-turbo", // Specify the model
        messages: [{ role: "user", content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;

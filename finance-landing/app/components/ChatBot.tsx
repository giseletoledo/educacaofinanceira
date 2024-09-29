// app/components/ChatBot.tsx
"use client"
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setResponse(data.result);
    setInput(''); // Clear input after submission
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: '#A8C9FF',
          borderRadius: '50%',
          border: 'none',
          padding: '15px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        }}
      >
        <FaRobot size={24} color="#000" />
      </button>
      {isOpen && (
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '300px',
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ marginTop: '10px', backgroundColor: '#9747FF', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', width: '100%' }}>
              Enviar
            </button>
          </form>
          {response && <p style={{ marginTop: '10px' }}>Resposta: {response}</p>}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
'use client'
import { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hello! How can I help you today?' }])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'This is a demo response.' }])
    }, 1000)
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={msg.from === 'user' ? 'text-right' : 'text-left'}>
            <span className={`inline-block px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  )
}

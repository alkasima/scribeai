import { useState } from 'react'

const AIAssistantWidget = () => {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you with your content creation today?' }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Add user message to chat history
      setChatHistory([...chatHistory, { role: 'user', content: message }])
      
      // Simulate AI response (in a real app, this would be an API call)
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          role: 'assistant', 
          content: `Here's a suggestion based on "${message}": [AI-generated content would go here]`
        }])
      }, 1000)

      setMessage('')
    }
  }

  return (
    <div className="w-full px-6 py-6 bg-white shadow-md rounded-lg">
      <h4 className="text-2xl font-semibold text-gray-700 mb-4">AI Assistant</h4>
      <div className="h-64 overflow-y-auto mb-4 bg-gray-100 rounded-lg p-4">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`mb-2 ${chat.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${
              chat.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-800'
            }`}>
              {chat.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow mr-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ask for content suggestions..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default AIAssistantWidget
"use client"

import { useState } from "react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const sendMessage = async (message: string) => {
    const newMessages = [...messages, { role: "user", content: message }]
    setMessages(newMessages)

    try {
      const response = await fetch("https://aigabis.app.n8n.cloud/webhook/35299dc4-0c15-4f24-8303-1ff21a19f0eb/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from chatbot")
      }

      const data = await response.json()
      setMessages([...newMessages, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("Error sending message to chatbot:", error)
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
      ])
    }
  }

  return { messages, input, setInput, sendMessage }
}


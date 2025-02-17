"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X } from "lucide-react"
import { useChatbot } from "@/hooks/use-chatbot"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, setInput, sendMessage } = useChatbot()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      sendMessage(input)
      setInput("")
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-16 h-16 shadow-lg">
          <MessageCircle className="h-8 w-8" />
        </Button>
      )}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col">
          <CardHeader className="flex flex-row items-center">
            <CardTitle>Travel Assistant</CardTitle>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${
                    message.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                  } max-w-[80%] ${message.role === "user" ? "float-right clear-both" : "float-left clear-both"}`}
                >
                  {message.content}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}


'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '@/lib/types';

interface ChatInterfaceProps {
  plantName?: string;
  plantPersonality?: 'dramatic' | 'laid-back' | 'stoic' | 'enthusiastic' | 'anxious';
}

export function ChatInterface({ plantName = 'Plant Psychologist', plantPersonality }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'psychologist',
      content: plantPersonality
        ? `Hello! I'm ${plantName}, and I'm so happy to chat with you! How can I help you today? 🌱`
        : "Hello! I'm Dr. Botanica, your Plant Psychologist. I'm here to help you understand your plants' emotional and physical needs. What would you like to discuss today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Plant-specific responses
    if (plantPersonality === 'dramatic') {
      if (lowerMessage.includes('water')) {
        return "Oh darling, FINALLY someone asks about my hydration! I've been absolutely parched! Please give me a good drink, but not too much - I'm delicate! 💧";
      }
      if (lowerMessage.includes('light') || lowerMessage.includes('sun')) {
        return "The lighting situation here is... acceptable, I suppose. Though I wouldn't mind a spot with a bit more filtered sunshine. I need my beauty light, you understand! ☀️";
      }
      return "Darling, I appreciate you checking in! Though I must say, things have been rather trying lately. The humidity! The temperature fluctuations! But I persevere for you! 🎭";
    }

    if (plantPersonality === 'laid-back') {
      if (lowerMessage.includes('water')) {
        return "Hey, no worries! I'm pretty chill about water. Just whenever you remember is cool with me. I'm low-maintenance like that! 😌";
      }
      if (lowerMessage.includes('light') || lowerMessage.includes('sun')) {
        return "Yeah, the light situation is totally fine. I'm not picky - I can handle a lot of different spots. Just vibing here! 🌤️";
      }
      return "What's up! Just hanging out, doing my plant thing. Everything's pretty chill over here. How are you doing? 🌿";
    }

    if (plantPersonality === 'stoic') {
      if (lowerMessage.includes('water')) {
        return "Water status: adequate. My soil moisture levels are within acceptable parameters. Next watering recommended in 7-10 days.";
      }
      if (lowerMessage.includes('light') || lowerMessage.includes('sun')) {
        return "Current lighting conditions are sufficient for photosynthesis. No adjustments needed at this time.";
      }
      return "I am functioning optimally. All systems normal. Your concern is noted and appreciated, though unnecessary.";
    }

    // Plant Psychologist responses
    if (lowerMessage.includes('wilting') || lowerMessage.includes('droopy')) {
      return "Wilting or drooping leaves can indicate several issues: underwatering, overwatering, or even temperature stress. Let's diagnose together - when was the last time you watered? How does the soil feel? And has there been any change in temperature or location recently?";
    }

    if (lowerMessage.includes('yellow') || lowerMessage.includes('brown')) {
      return "Yellowing or browning leaves tell us a story! Yellow leaves often mean overwatering or nutrient deficiency, while brown tips suggest low humidity or water quality issues. Can you describe the pattern - is it old leaves or new growth? Are the tips brown or whole leaves yellow?";
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('advice')) {
      return "I'm here to help! You can ask me about: watering schedules, lighting needs, troubleshooting leaf problems, repotting advice, pest identification, or just general care questions. What's on your mind about your plants? 🌱";
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! Tell me more about your plant's current condition so I can give you the best advice.",
      "Great question! Every plant is unique. Can you describe what you're seeing with your plant right now?",
      "I'd love to help with that! Could you share a bit more detail about your plant's environment and symptoms?",
      "Excellent! Understanding your plant's needs is the first step to a healthy relationship. What specific concerns do you have?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const responseContent = generateResponse(inputValue);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: plantPersonality ? 'plant' : 'psychologist',
        content: responseContent,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] card-plant p-0 overflow-hidden">
      {/* Chat header */}
      <div className="px-6 py-4 border-b flex items-center gap-3" style={{ borderColor: 'hsl(45 20% 85%)', backgroundColor: 'hsl(45 25% 97%)' }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(95 15% 44%)' }}>
          {plantPersonality ? (
            <Sparkles className="w-5 h-5" style={{ color: 'hsl(45 25% 97%)' }} />
          ) : (
            <Bot className="w-5 h-5" style={{ color: 'hsl(45 25% 97%)' }} />
          )}
        </div>
        <div>
          <h3 className="font-semibold" style={{ fontFamily: 'Lora, serif' }}>
            {plantName}
          </h3>
          <p className="text-xs text-muted-foreground">
            {plantPersonality ? 'Your plant companion' : 'Plant Care Expert'}
          </p>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{
                backgroundColor: message.sender === 'user' ? 'hsl(20 65% 70%)' : 'hsl(95 15% 44%)'
              }}
            >
              {message.sender === 'user' ? (
                <User className="w-4 h-4" style={{ color: 'hsl(45 25% 97%)' }} />
              ) : (
                <Sparkles className="w-4 h-4" style={{ color: 'hsl(45 25% 97%)' }} />
              )}
            </div>

            {/* Message bubble */}
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'rounded-tr-sm'
                  : 'rounded-tl-sm'
              }`}
              style={{
                backgroundColor: message.sender === 'user' ? 'hsl(20 65% 70%)' : 'hsl(45 25% 97%)',
                color: message.sender === 'user' ? 'hsl(45 25% 97%)' : 'hsl(95 10% 25%)'
              }}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p
                className="text-xs mt-1 opacity-70"
                style={{
                  color: message.sender === 'user' ? 'hsl(45 25% 97%)' : 'hsl(95 8% 45%)'
                }}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ backgroundColor: 'hsl(95 15% 44%)' }}
            >
              <Sparkles className="w-4 h-4" style={{ color: 'hsl(45 25% 97%)' }} />
            </div>
            <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ backgroundColor: 'hsl(45 25% 97%)' }}>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(95 15% 44%)', animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(95 15% 44%)', animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(95 15% 44%)', animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="px-6 py-4 border-t" style={{ borderColor: 'hsl(45 20% 85%)', backgroundColor: 'hsl(45 25% 97%)' }}>
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2"
            style={{
              borderColor: 'hsl(45 20% 85%)',
              backgroundColor: 'white',
              boxShadow: 'none'
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            style={{
              backgroundColor: 'hsl(95 15% 44%)',
              color: 'hsl(45 25% 97%)'
            }}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

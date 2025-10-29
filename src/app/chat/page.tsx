'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChatInterface } from '@/components/ChatInterface';
import { mockPlants } from '@/lib/mockData';
import { MessageCircle } from 'lucide-react';

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<'psychologist' | string>('psychologist');

  const selectedPlant = mockPlants.find(p => p.id === selectedChat);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b" style={{ borderColor: 'hsl(45 20% 85%)', backgroundColor: 'hsl(45 25% 97%)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/generated/logo.png"
                  alt="Plant Whisperer Club"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold" style={{ fontFamily: 'Lora, serif', color: 'hsl(95 15% 44%)' }}>
                Plant Whisperer Club
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                My Dashboard
              </Link>
              <Link href="/chat" className="text-sm font-medium text-primary">
                AI Plant Chat
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Chat Layout */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Chat List */}
          <div className="card-plant lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Lora, serif' }}>
              Conversations
            </h2>

            {/* Plant Psychologist */}
            <button
              onClick={() => setSelectedChat('psychologist')}
              className={`w-full text-left p-4 rounded-xl mb-2 transition-all ${
                selectedChat === 'psychologist' ? 'ring-2' : ''
              }`}
              style={{
                backgroundColor: selectedChat === 'psychologist' ? 'hsl(95 15% 44% / 0.1)' : 'transparent',
                borderColor: selectedChat === 'psychologist' ? 'hsl(95 15% 44%)' : 'transparent'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'hsl(95 12% 37%)' }}>
                  <MessageCircle className="w-6 h-6" style={{ color: 'hsl(45 25% 97%)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">Plant Psychologist</h3>
                  <p className="text-sm text-muted-foreground truncate">Expert care guidance</p>
                </div>
              </div>
            </button>

            {/* Divider */}
            <div className="my-4 border-t" style={{ borderColor: 'hsl(45 20% 85%)' }} />

            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Your Plants</h3>

            {/* Plant List */}
            <div className="space-y-2">
              {mockPlants.map((plant) => (
                <button
                  key={plant.id}
                  onClick={() => setSelectedChat(plant.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedChat === plant.id ? 'ring-2' : ''
                  }`}
                  style={{
                    backgroundColor: selectedChat === plant.id ? 'hsl(95 15% 44% / 0.1)' : 'transparent',
                    borderColor: selectedChat === plant.id ? 'hsl(95 15% 44%)' : 'transparent'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 relative overflow-hidden">
                      <Image
                        src={plant.imageUrl}
                        alt={plant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{plant.nickname || plant.name}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <span>{plant.currentMood.emoji}</span>
                        <span className="truncate">{plant.currentMood.status}</span>
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            {selectedChat === 'psychologist' ? (
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                    Chat with Plant Psychologist
                  </h1>
                  <p className="text-muted-foreground">
                    Get expert advice on plant care, troubleshooting, and building deeper connections with your green friends
                  </p>
                </div>
                <ChatInterface />
              </div>
            ) : selectedPlant ? (
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                    Chat with {selectedPlant.nickname || selectedPlant.name}
                  </h1>
                  <p className="text-muted-foreground">
                    Current mood: {selectedPlant.currentMood.emoji} {selectedPlant.currentMood.status}
                  </p>
                </div>
                <ChatInterface
                  plantName={selectedPlant.nickname || selectedPlant.name}
                  plantPersonality={selectedPlant.personality.communicationStyle}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

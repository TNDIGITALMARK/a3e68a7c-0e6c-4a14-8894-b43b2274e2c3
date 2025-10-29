'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlantCard } from '@/components/PlantCard';
import { mockPlants } from '@/lib/mockData';
import { Plus, Filter, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const [selectedPlant, setSelectedPlant] = useState<string | null>(null);

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
              <Link href="/dashboard" className="text-sm font-medium text-primary">
                My Dashboard
              </Link>
              <Link href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
                AI Plant Chat
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'hsl(45 30% 94%)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                My Plant Dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor your plant family&apos;s moods and care needs in one place
              </p>
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:scale-105"
              style={{
                backgroundColor: 'hsl(95 15% 44%)',
                color: 'hsl(45 25% 97%)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add New Plant</span>
            </button>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-plant">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Plants</p>
                  <p className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>{mockPlants.length}</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(95 15% 44% / 0.1)' }}>
                  <span className="text-2xl">🪴</span>
                </div>
              </div>
            </div>

            <div className="card-plant">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Thriving</p>
                  <p className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>
                    {mockPlants.filter(p => p.currentMood.status === 'thriving' || p.currentMood.status === 'happy').length}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(142 76% 36% / 0.1)' }}>
                  <TrendingUp className="w-6 h-6" style={{ color: 'hsl(142 76% 36%)' }} />
                </div>
              </div>
            </div>

            <div className="card-plant">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Need Attention</p>
                  <p className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>
                    {mockPlants.filter(p => p.currentMood.status === 'concerned' || p.currentMood.status === 'stressed').length}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(25 95% 53% / 0.1)' }}>
                  <span className="text-2xl">💧</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-3 mb-6">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full border transition-colors"
              style={{ borderColor: 'hsl(45 20% 85%)' }}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by Mood</span>
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-accent">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-accent">
              Thriving
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-accent">
              Happy
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-accent">
              Needs Care
            </button>
          </div>

          {/* Plant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onClick={() => setSelectedPlant(plant.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>
            Today&apos;s Care Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tip 1 */}
            <div className="card-plant flex gap-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'hsl(195 100% 50% / 0.1)' }}>
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Watering Reminder
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fern Francine needs watering today. Check soil moisture and mist leaves for extra humidity.
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="card-plant flex gap-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'hsl(45 100% 50% / 0.1)' }}>
                <span className="text-2xl">☀️</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Lighting Adjustment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Move Succulent Steve closer to the window for optimal growth during winter months.
                </p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="card-plant flex gap-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'hsl(142 76% 36% / 0.1)' }}>
                <span className="text-2xl">✂️</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Pruning Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pothos Patty could benefit from trimming to encourage fuller growth and prevent legginess.
                </p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="card-plant flex gap-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'hsl(280 100% 50% / 0.1)' }}>
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Growth Milestone
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monstera Mike is showing signs of new growth! Watch for a new leaf unfurling soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { PlantProfile, moodStatusColors } from '@/lib/mockData';

interface PlantCardProps {
  plant: PlantProfile;
  onClick?: () => void;
}

export function PlantCard({ plant, onClick }: PlantCardProps) {
  const moodColorClass = moodStatusColors[plant.currentMood.status];

  return (
    <div
      className="card-plant cursor-pointer group relative"
      onClick={onClick}
    >
      {/* Mood indicator badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${moodColorClass}`}>
          {plant.currentMood.emoji}
        </div>
      </div>

      {/* Plant image - circular with breathing animation */}
      <div className="flex justify-center mb-4">
        <div className="relative w-32 h-32 plant-circle animate-breathe overflow-hidden bg-cream">
          <Image
            src={plant.imageUrl}
            alt={plant.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Plant info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Lora, serif' }}>
          {plant.nickname || plant.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {plant.species}
        </p>

        {/* Personality traits */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-3">
          {plant.personality.traits.slice(0, 2).map((trait) => (
            <span
              key={trait}
              className="px-2 py-0.5 text-xs rounded-full"
              style={{
                backgroundColor: 'hsl(20 55% 85%)',
                color: 'hsl(95 10% 25%)'
              }}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Current mood message - truncated */}
        <p className="text-sm text-muted-foreground italic line-clamp-2">
          &quot;{plant.currentMood.message}&quot;
        </p>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-sage-green/10 to-transparent rounded-b-[var(--radius-lg)]">
          <p className="text-xs text-center font-medium" style={{ color: 'hsl(95 15% 44%)' }}>
            Click to view details
          </p>
        </div>
      </div>
    </div>
  );
}

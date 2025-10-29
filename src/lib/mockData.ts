// Mock data for Plant Whisperer Club

import { PlantProfile, PlantMood } from './types';

// Export types for convenience
export type { PlantProfile, PlantMood, PlantPersonality } from './types';

export const mockPlants: PlantProfile[] = [
  {
    id: 'succulent_steve',
    name: 'Succulent Steve',
    species: 'Echeveria',
    nickname: 'Steve',
    imageUrl: '/generated/plant-succulent.png',
    personality: {
      traits: ['laid-back', 'low-maintenance', 'chill'],
      communicationStyle: 'laid-back',
      voiceTone: 'casual and relaxed'
    },
    currentMood: {
      status: 'happy',
      message: 'Hey there, I\'m feeling pretty chill but could use a small drink in a couple days',
      emoji: '😌',
      timestamp: new Date()
    },
    careRecommendations: [
      'Water lightly every 2 weeks',
      'Bright indirect sunlight',
      'Well-draining soil'
    ],
    dateAdded: new Date('2024-01-15')
  },
  {
    id: 'fern_francine',
    name: 'Fern Francine',
    species: 'Boston Fern',
    nickname: 'Francine',
    imageUrl: '/generated/plant-fern.png',
    personality: {
      traits: ['dramatic', 'attention-seeking', 'expressive'],
      communicationStyle: 'dramatic',
      voiceTone: 'theatrical and emotional'
    },
    currentMood: {
      status: 'concerned',
      message: 'Darling, this dry air is simply unbearable! I need my humidifier back immediately!',
      emoji: '😰',
      timestamp: new Date()
    },
    careRecommendations: [
      'High humidity required',
      'Mist daily',
      'Keep soil consistently moist'
    ],
    dateAdded: new Date('2024-02-03')
  },
  {
    id: 'snake_plant_samuel',
    name: 'Snake Plant Samuel',
    species: 'Sansevieria',
    nickname: 'Samuel',
    imageUrl: '/generated/plant-snake.png',
    personality: {
      traits: ['stoic', 'independent', 'reliable'],
      communicationStyle: 'stoic',
      voiceTone: 'calm and confident'
    },
    currentMood: {
      status: 'thriving',
      message: 'I\'m thriving as usual. No changes needed, thank you for checking though.',
      emoji: '🌟',
      timestamp: new Date()
    },
    careRecommendations: [
      'Water sparingly (every 3-4 weeks)',
      'Low to bright indirect light',
      'Very forgiving'
    ],
    dateAdded: new Date('2023-11-20')
  },
  {
    id: 'monstera_mike',
    name: 'Monstera Mike',
    species: 'Monstera Deliciosa',
    nickname: 'Mike',
    imageUrl: '/generated/plant-monstera.png',
    personality: {
      traits: ['enthusiastic', 'social', 'growing'],
      communicationStyle: 'enthusiastic',
      voiceTone: 'upbeat and friendly'
    },
    currentMood: {
      status: 'happy',
      message: 'Loving the bright spot! Ready to put out another leaf soon!',
      emoji: '🌱',
      timestamp: new Date()
    },
    careRecommendations: [
      'Water when top 2 inches dry',
      'Bright indirect light',
      'Provide moss pole for climbing'
    ],
    dateAdded: new Date('2024-03-10')
  },
  {
    id: 'pothos_patty',
    name: 'Pothos Patty',
    species: 'Golden Pothos',
    nickname: 'Patty',
    imageUrl: '/generated/plant-pothos.png',
    personality: {
      traits: ['easygoing', 'adaptable', 'trailing'],
      communicationStyle: 'laid-back',
      voiceTone: 'friendly and chill'
    },
    currentMood: {
      status: 'happy',
      message: 'Just vibing here, might trail a bit more if that\'s cool',
      emoji: '😊',
      timestamp: new Date()
    },
    careRecommendations: [
      'Water weekly',
      'Low to medium light',
      'Trim to encourage bushiness'
    ],
    dateAdded: new Date('2024-01-28')
  },
  {
    id: 'peperomia_penny',
    name: 'Peperomia Penny',
    species: 'Peperomia',
    nickname: 'Penny',
    imageUrl: '/generated/plant-peperomia.png',
    personality: {
      traits: ['sweet', 'compact', 'cheerful'],
      communicationStyle: 'enthusiastic',
      voiceTone: 'bubbly and positive'
    },
    currentMood: {
      status: 'happy',
      message: 'Feeling cute today! These round leaves are looking extra glossy ✨',
      emoji: '💚',
      timestamp: new Date()
    },
    careRecommendations: [
      'Water when soil is dry',
      'Medium indirect light',
      'Likes being slightly rootbound'
    ],
    dateAdded: new Date('2024-02-14')
  }
];

export const moodStatusColors: Record<PlantMood['status'], string> = {
  thriving: 'bg-green-100 text-green-800 border-green-200',
  happy: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  neutral: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  concerned: 'bg-orange-100 text-orange-800 border-orange-200',
  stressed: 'bg-red-100 text-red-800 border-red-200'
};

// Mock AI analysis function
export function analyzePlantMood(imageData: string): Promise<PlantMood> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomMoods: PlantMood[] = [
        {
          status: 'happy',
          message: 'Looking vibrant and healthy! I\'m enjoying the light here.',
          emoji: '😊',
          timestamp: new Date()
        },
        {
          status: 'thriving',
          message: 'I\'m absolutely thriving! Keep doing what you\'re doing!',
          emoji: '🌟',
          timestamp: new Date()
        },
        {
          status: 'concerned',
          message: 'I\'m feeling a little thirsty... could use some water soon.',
          emoji: '💧',
          timestamp: new Date()
        },
        {
          status: 'neutral',
          message: 'Doing okay! Nothing urgent, just here growing slowly.',
          emoji: '🌿',
          timestamp: new Date()
        }
      ];

      const randomMood = randomMoods[Math.floor(Math.random() * randomMoods.length)];
      resolve(randomMood);
    }, 1500); // Simulate AI processing time
  });
}

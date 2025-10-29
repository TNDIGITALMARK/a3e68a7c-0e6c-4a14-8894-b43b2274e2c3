// Plant Whisperer Club Type Definitions

export interface PlantProfile {
  id: string;
  name: string;
  species: string;
  nickname?: string;
  imageUrl: string;
  personality: PlantPersonality;
  currentMood: PlantMood;
  careRecommendations: string[];
  lastWatered?: Date;
  dateAdded: Date;
}

export interface PlantPersonality {
  traits: string[];
  communicationStyle: 'dramatic' | 'laid-back' | 'stoic' | 'enthusiastic' | 'anxious';
  voiceTone: string;
}

export interface PlantMood {
  status: 'thriving' | 'happy' | 'neutral' | 'concerned' | 'stressed';
  message: string;
  emoji: string;
  timestamp: Date;
}

export interface MoodReading {
  plantId: string;
  mood: PlantMood;
  analysisConfidence: number;
  detectedIssues: string[];
  recommendations: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'plant' | 'psychologist';
  content: string;
  timestamp: Date;
  plantId?: string;
}

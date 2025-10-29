'use client';

import { useState, useRef } from 'react';
import { Upload, Loader2, Sparkles } from 'lucide-react';
import { PlantMood, analyzePlantMood, moodStatusColors } from '@/lib/mockData';

export function MoodReader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [moodResult, setMoodResult] = useState<PlantMood | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageData = event.target?.result as string;
      setSelectedImage(imageData);
      setMoodResult(null);

      // Simulate AI analysis
      setIsAnalyzing(true);
      const mood = await analyzePlantMood(imageData);
      setIsAnalyzing(false);
      setMoodResult(mood);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const resetReader = () => {
    setSelectedImage(null);
    setMoodResult(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="card-plant max-w-2xl mx-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
      />

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5" style={{ color: 'hsl(20 65% 70%)' }} />
          <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Lora, serif' }}>
            Plant Mood Reader
          </h2>
          <Sparkles className="w-5 h-5" style={{ color: 'hsl(20 65% 70%)' }} />
        </div>
        <p className="text-muted-foreground">
          Upload a photo of your plant and discover what it&apos;s feeling today
        </p>
      </div>

      {!selectedImage ? (
        // Upload prompt
        <div
          onClick={handleUploadClick}
          className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all hover:border-primary hover:bg-accent/20"
          style={{ borderColor: 'hsl(45 20% 85%)' }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(95 15% 44% / 0.1)' }}>
              <Upload className="w-8 h-8" style={{ color: 'hsl(95 15% 44%)' }} />
            </div>
            <div>
              <p className="font-medium mb-1">Click to upload plant photo</p>
              <p className="text-sm text-muted-foreground">
                or drag and drop your image here
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Analysis view
        <div className="space-y-6">
          {/* Image preview */}
          <div className="relative w-full aspect-square max-w-sm mx-auto rounded-xl overflow-hidden shadow-card">
            <img
              src={selectedImage}
              alt="Plant preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Analysis status */}
          {isAnalyzing && (
            <div className="text-center py-8">
              <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin" style={{ color: 'hsl(95 15% 44%)' }} />
              <p className="text-lg font-medium mb-2">Analyzing your plant...</p>
              <p className="text-sm text-muted-foreground">
                Our AI is reading the vibes ✨
              </p>
            </div>
          )}

          {/* Mood result */}
          {moodResult && !isAnalyzing && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-6xl mb-4">{moodResult.emoji}</div>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${moodStatusColors[moodResult.status]}`}>
                  {moodResult.status.charAt(0).toUpperCase() + moodResult.status.slice(1)}
                </div>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: 'hsl(45 25% 97%)' }}>
                <p className="text-lg text-center italic" style={{ fontFamily: 'Lora, serif' }}>
                  &quot;{moodResult.message}&quot;
                </p>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={resetReader}
                  className="px-6 py-2 rounded-full border transition-colors"
                  style={{
                    borderColor: 'hsl(95 15% 44%)',
                    color: 'hsl(95 15% 44%)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(95 15% 44% / 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Try Another
                </button>
                <button
                  className="px-6 py-2 rounded-full transition-colors"
                  style={{
                    backgroundColor: 'hsl(95 15% 44%)',
                    color: 'hsl(45 25% 97%)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(95 12% 37%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(95 15% 44%)';
                  }}
                >
                  Save to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, MessageCircle, Heart, Search } from 'lucide-react';
import { MoodReader } from '@/components/MoodReader';

export default function HomePage() {
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
              <Link href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
                AI Plant Chat
              </Link>
              <button
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  backgroundColor: 'hsl(95 15% 44%)',
                  color: 'hsl(45 25% 97%)',
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(95 15% 44%) 0%, hsl(45 30% 88%) 50%, hsl(20 65% 85%) 100%)'
        }}
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero text */}
            <div className="text-center md:text-left">
              <h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: 'Lora, serif',
                  color: 'hsl(45 25% 97%)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                Unlock the Secrets of Your Green Companions
              </h1>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: 'hsl(45 15% 95%)' }}
              >
                Connect with your plants through AI-powered mood readings and personality insights.
                Transform plant care into a delightful daily conversation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  className="px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'hsl(45 25% 97%)',
                    color: 'hsl(95 15% 44%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  Start Free Reading
                </button>
                <button
                  className="px-8 py-3 rounded-full text-lg font-medium border-2 transition-all hover:bg-white/10"
                  style={{
                    borderColor: 'hsl(45 25% 97%)',
                    color: 'hsl(45 25% 97%)',
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[16/10]">
                <Image
                  src="/generated/hero-plant-trio.png"
                  alt="Cute plant characters"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 80C1200 70 1320 50 1380 40L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(45 30% 94%)"
            />
          </svg>
        </div>
      </section>

      {/* Mood Reader Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Lora, serif' }}>
              Try Our Free Mood Reader
            </h2>
            <p className="text-lg text-muted-foreground">
              Upload a photo and discover what your plant is trying to tell you
            </p>
          </div>
          <MoodReader />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'hsl(95 12% 37%)' }}>
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ fontFamily: 'Lora, serif', color: 'hsl(45 15% 90%)' }}
          >
            Feature Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'hsl(95 15% 30% / 0.5)' }}>
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'hsl(95 15% 44%)' }}
              >
                <Search className="w-8 h-8" style={{ color: 'hsl(45 25% 97%)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Lora, serif', color: 'hsl(45 15% 90%)' }}>
                AI Diagnostics
              </h3>
              <p style={{ color: 'hsl(45 15% 80%)' }}>
                Advanced AI analyzes your plant&apos;s health and emotional state from photos
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'hsl(95 15% 30% / 0.5)' }}>
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'hsl(20 65% 70%)' }}
              >
                <Heart className="w-8 h-8" style={{ color: 'hsl(45 25% 97%)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Lora, serif', color: 'hsl(45 15% 90%)' }}>
                Personalized Care Insights
              </h3>
              <p style={{ color: 'hsl(45 15% 80%)' }}>
                Get tailored care recommendations in your plant&apos;s unique voice
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'hsl(95 15% 30% / 0.5)' }}>
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'hsl(95 15% 44%)' }}
              >
                <MessageCircle className="w-8 h-8" style={{ color: 'hsl(45 25% 97%)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Lora, serif', color: 'hsl(45 15% 90%)' }}>
                Live AI Chat
              </h3>
              <p style={{ color: 'hsl(45 15% 80%)' }}>
                Chat with your plants or consult our Plant Psychologist anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div
          className="container mx-auto max-w-4xl text-center p-12 rounded-2xl shadow-lg"
          style={{
            background: 'linear-gradient(135deg, hsl(95 15% 44%) 0%, hsl(95 12% 37%) 100%)'
          }}
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(20 65% 70%)' }} />
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'Lora, serif', color: 'hsl(45 25% 97%)' }}
          >
            Ready to Whisper with Your Plants?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'hsl(45 15% 90%)' }}>
            Join thousands of plant parents creating deeper connections with their green friends
          </p>
          <button
            className="px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: 'hsl(45 25% 97%)',
              color: 'hsl(95 15% 44%)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            Join the Club
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t" style={{ borderColor: 'hsl(45 20% 85%)', backgroundColor: 'hsl(45 25% 97%)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/generated/logo.png"
                  alt="Plant Whisperer Club"
                  fill
                  className="object-contain"
                />
              </div>
              <span style={{ fontFamily: 'Lora, serif', color: 'hsl(95 15% 44%)' }}>
                Plant Whisperer Club
              </span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="flex gap-3">
              <span className="text-sm text-muted-foreground">🌿</span>
              <span className="text-sm text-muted-foreground">🪴</span>
              <span className="text-sm text-muted-foreground">💚</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

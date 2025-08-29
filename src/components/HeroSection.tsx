import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Terminal, Code2 } from 'lucide-react';
import heroBackground from '@/assets/synthwave-hero-bg.jpg';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "This is my Awesome Portfolio";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Synthwave Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-retro-darker/60" />
      </div>

      {/* Retro Grid Overlay */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Terminal Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Terminal className="w-20 h-20 text-primary animate-neon-pulse" />
            <div className="absolute -top-2 -right-2">
              <Code2 className="w-8 h-8 text-secondary animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-retro font-bold text-primary crt-glow ">
            <span className="glitch-text" data-text={displayedText}>
              {displayedText}
            </span>
            <span className="animate-blink text-secondary">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-mono text-accent max-w-2xl mx-auto">
            3rd year Engineering Student • Tech Enthusiast • Code Architect
          </p>
          
          <div className="flex justify-center items-center space-x-2 text-muted-foreground font-mono">
            <span>&gt;</span>
            <span className="typing-animation">
              Building the future with retro aesthetics...
            </span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="retro-button neon-glow text-lg px-8 py-4 font-retro"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            [ View Projects ]
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="retro-button border-secondary text-secondary hover:text-secondary-foreground text-lg px-8 py-4 font-retro"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            [ Contact Me ]
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary animate-neon-pulse" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500" />
    </section>
  );
};
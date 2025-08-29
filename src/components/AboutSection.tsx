import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { User, Coffee, Gamepad2, Cpu } from 'lucide-react';

export const AboutSection = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = `Hey there! I'm a passionate software engineer who believes that code should be both functional and beautiful. With a love for retro aesthetics and cutting-edge technology, I bridge the gap between nostalgic design and modern solutions.

When I'm not crafting pixel-perfect interfaces or architecting robust backend systems, you'll find me exploring the latest in cyberpunk culture, playing retro games, or diving deep into the latest tech trends.

My approach to development is like debugging vintage hardware - methodical, creative, and always with an eye for the details that make the difference.`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTerminalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Coffee, label: 'Cups of Coffee', value: '2,847', color: 'text-primary' },
    { icon: Gamepad2, label: 'Games Completed', value: '156', color: 'text-secondary' },
    { icon: Cpu, label: 'Projects Built', value: '42', color: 'text-accent' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-retro font-bold text-primary crt-glow mb-4">
            [ About.exe ]
          </h2>
          <div className="flex justify-center items-center space-x-2 text-muted-foreground font-mono">
            <span>&gt;</span>
            <span>Loading personal data...</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Terminal Window */}
          <div className="lg:col-span-2">
            <Card className="terminal-window p-6 h-full">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-primary/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  terminal://about/developer.txt
                </span>
              </div>
              
              {/* Terminal Content */}
              <div className="font-mono text-sm leading-relaxed">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-primary">user@retro-vault:~$</span>
                  <span className="text-foreground">cat about.txt</span>
                </div>
                
                <div className="text-foreground whitespace-pre-wrap">
                  {terminalText}
                  <span className="animate-blink text-primary">▋</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Panel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-retro font-bold text-secondary crt-glow text-center">
              [ System Stats ]
            </h3>
            
            {stats.map((stat, index) => (
              <Card key={index} className="terminal-window p-4 hover:neon-glow transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <div>
                    <div className={`text-2xl font-bold ${stat.color} font-mono`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Tech Stack Preview */}
            <Card className="terminal-window p-4">
              <h4 className="text-lg font-retro font-bold text-accent mb-3">
                [ Core.sys ]
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>React.js</span>
                  <span className="text-primary">████████░░</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-secondary">█████████░</span>
                </div>
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-accent">████████░░</span>
                </div>
                <div className="flex justify-between">
                  <span>Python</span>
                  <span className="text-primary">███████░░░</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
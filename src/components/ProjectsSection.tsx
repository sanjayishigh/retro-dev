import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Zap, Database, Smartphone } from 'lucide-react';

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "CyberChat.exe",
      description: "Real-time messaging app with end-to-end encryption and retro UI",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      icon: Zap,
      color: "primary",
      status: "ONLINE",
      difficulty: "★★★★☆"
    },
    {
      id: 2,
      title: "NeonDB Manager",
      description: "Database administration tool with synthwave-inspired interface",
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      icon: Database,
      color: "secondary",
      status: "BETA",
      difficulty: "★★★★★"
    },
    {
      id: 3,
      title: "RetroMobile OS",
      description: "Mobile app framework inspired by 80s computer interfaces",
      tech: ["React Native", "TypeScript", "Firebase"],
      icon: Smartphone,
      color: "accent",
      status: "DEV",
      difficulty: "★★★☆☆"
    },
    {
      id: 4,
      title: "VaporWave API",
      description: "RESTful API with automatic documentation and neon-themed swagger UI",
      tech: ["FastAPI", "Python", "Docker", "Redis"],
      icon: Play,
      color: "primary",
      status: "LIVE",
      difficulty: "★★★★☆"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary/50 neon-glow';
      case 'secondary':
        return 'text-secondary border-secondary/50 neon-secondary';
      case 'accent':
        return 'text-accent border-accent/50 neon-accent';
      default:
        return 'text-primary border-primary/50 neon-glow';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 retro-grid opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-retro font-bold text-primary crt-glow mb-4">
            [ Projects.archive ]
          </h2>
          <div className="flex justify-center items-center space-x-2 text-muted-foreground font-mono">
            <span>&gt;</span>
            <span>Initializing project cartridges...</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`terminal-window p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                hoveredProject === index ? getColorClasses(project.color) : 'border-border'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <project.icon className={`w-8 h-8 ${hoveredProject === index ? '' : 'text-muted-foreground'}`} />
                  <div>
                    <h3 className="text-xl font-retro font-bold">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm font-mono">
                      <span className={`px-2 py-1 rounded text-xs ${
                        project.status === 'ONLINE' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'BETA' ? 'bg-yellow-500/20 text-yellow-400' :
                        project.status === 'DEV' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-primary/20'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-muted-foreground">
                        Difficulty: {project.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-4 font-mono text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-sm font-mono text-muted-foreground mb-2">
                  Tech Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  className="retro-button flex-1"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Launch
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="retro-button border-muted-foreground/50 text-muted-foreground hover:text-foreground"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="retro-button border-muted-foreground/50 text-muted-foreground hover:text-foreground"
                  onClick={() => window.open('#', '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-gradient-glow rounded-lg pointer-events-none" />
              )}
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="retro-button border-secondary text-secondary hover:text-secondary-foreground font-retro"
          >
            [ Load More Projects ]
          </Button>
        </div>
      </div>
    </section>
  );
};
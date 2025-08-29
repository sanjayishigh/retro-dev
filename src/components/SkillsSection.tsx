import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Shield, 
  Cpu,
  Zap
} from 'lucide-react';

export const SkillsSection = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      title: "Frontend Systems",
      icon: Code2,
      color: "primary",
      skills: [
        { name: "React/Next.js", level: 92, experience: "4+ years" },
        { name: "TypeScript", level: 88, experience: "3+ years" },
        { name: "Vue.js", level: 78, experience: "2+ years" },
        { name: "Tailwind CSS", level: 95, experience: "3+ years" },
      ]
    },
    {
      title: "Backend Architecture",
      icon: Database,
      color: "secondary",
      skills: [
        { name: "Node.js", level: 90, experience: "4+ years" },
        { name: "Python", level: 85, experience: "5+ years" },
        { name: "PostgreSQL", level: 82, experience: "3+ years" },
        { name: "MongoDB", level: 75, experience: "2+ years" },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "accent",
      skills: [
        { name: "React Native", level: 80, experience: "2+ years" },
        { name: "Flutter", level: 65, experience: "1+ year" },
        { name: "Swift", level: 58, experience: "1+ year" },
        { name: "Kotlin", level: 62, experience: "1+ year" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "primary",
      skills: [
        { name: "Docker", level: 88, experience: "3+ years" },
        { name: "AWS", level: 82, experience: "2+ years" },
        { name: "CI/CD", level: 78, experience: "2+ years" },
        { name: "Kubernetes", level: 70, experience: "1+ year" },
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "secondary",
      skills: [
        { name: "Figma", level: 85, experience: "3+ years" },
        { name: "UI/UX Design", level: 80, experience: "4+ years" },
        { name: "Prototyping", level: 75, experience: "2+ years" },
        { name: "User Research", level: 68, experience: "2+ years" },
      ]
    },
    {
      title: "Security & Testing",
      icon: Shield,
      color: "accent",
      skills: [
        { name: "Jest/Testing", level: 87, experience: "3+ years" },
        { name: "Security Audit", level: 72, experience: "2+ years" },
        { name: "Penetration Testing", level: 68, experience: "1+ year" },
        { name: "Code Review", level: 90, experience: "4+ years" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          newValues[skill.name] = skill.level;
        });
      });
      setAnimatedValues(newValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { icon: 'text-primary', border: 'border-primary/30' };
      case 'secondary':
        return { icon: 'text-secondary', border: 'border-secondary/30' };
      case 'accent':
        return { icon: 'text-accent', border: 'border-accent/30' };
      default:
        return { icon: 'text-primary', border: 'border-primary/30' };
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-secondary/20 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/20 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-retro font-bold text-primary crt-glow mb-4">
            [ Skills.matrix ]
          </h2>
          <div className="flex justify-center items-center space-x-2 text-muted-foreground font-mono mb-8">
            <span>&gt;</span>
            <span>Analyzing skill proficiency levels...</span>
          </div>
          
          {/* System Stats */}
          <div className="flex justify-center space-x-8 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-primary" />
              <span>CPU: 94% Efficiency</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span>Memory: 8.2GB Experience</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            
            return (
              <Card
                key={categoryIndex}
                className={`terminal-window p-6 hover:neon-glow transition-all duration-300 ${colors.border}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className={`w-8 h-8 ${colors.icon}`} />
                  <div>
                    <h3 className="text-xl font-retro font-bold text-foreground">
                      {category.title}
                    </h3>
                    <div className="text-sm font-mono text-muted-foreground">
                      {category.skills.length} modules loaded
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm font-medium">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2 text-xs font-mono text-muted-foreground">
                          <span>{skill.experience}</span>
                          <span className={colors.icon}>
                            {animatedValues[skill.name] || 0}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="retro-progress h-2 rounded-sm">
                        <div 
                          className="retro-progress-fill h-full rounded-sm transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${animatedValues[skill.name] || 0}%`,
                            background: category.color === 'primary' ? 'var(--gradient-synthwave)' :
                                      category.color === 'secondary' ? 'linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--secondary-glow)))' :
                                      'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent-glow)))'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex justify-between text-xs font-mono text-muted-foreground">
                    <span>Status: ACTIVE</span>
                    <span>Last Updated: 2024</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="terminal-window p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-retro font-bold text-secondary mb-4">
              [ Core.competencies ]
            </h3>
            <p className="font-mono text-muted-foreground leading-relaxed">
              Specialized in full-stack development with a focus on modern web technologies, 
              cloud architecture, and user-centered design. Passionate about creating 
              efficient, scalable solutions that blend cutting-edge functionality with 
              exceptional user experiences.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
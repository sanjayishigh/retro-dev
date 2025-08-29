import { Heart, Code, Coffee } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 retro-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ASCII Art Divider */}
        <div className="text-center mb-8">
          <pre className="font-mono text-xs text-primary/60 inline-block">
{`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░  ██████╗ ███████╗ ████████╗██████╗  ██████╗     ██████╗ ███████╗██╗   ██╗ ░░
░░  ██╔══██╗██╔════╝ ╚══██╔══╝ ██╔══██╗██╔═══██╗    ██╔══██╗██╔════╝██║   ██║ ░░
░░  ██████╔╝█████╗      ██║   ██████╔╝██║   ██║    ██║  ██║█████╗  ██║   ██║ ░░
░░  ██╔══██╗██╔══╝      ██║   ██╔══██╗██║   ██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝ ░░
░░  ██║  ██║███████╗    ██║   ██║  ██║╚██████╔╝    ██████╔╝███████╗ ╚████╔╝  ░░
░░  ╚═╝  ╚═╝╚══════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝     ╚═════╝ ╚══════╝  ╚═══╝   ░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`}
          </pre>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-retro font-bold text-primary">
              RETRO DEV VAULT
            </h3>
            <p className="font-mono text-sm text-muted-foreground">
              Crafting digital experiences with retro aesthetics and modern technology.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-mono text-muted-foreground">
              <span>Status:</span>
              <span className="text-green-400 animate-pulse">● ONLINE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-retro font-bold text-secondary">
              [ Navigation ]
            </h4>
            <div className="space-y-2 font-mono text-sm">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                &gt; About.exe
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
              >
                &gt; Projects.archive
              </a>
              <a 
                href="#skills" 
                className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                &gt; Skills.matrix
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                &gt; Contact.interface
              </a>
            </div>
          </div>

          {/* System Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-retro font-bold text-accent">
              [ System.info ]
            </h4>
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground">
                Version: v2024.1.0
              </div>
              <div className="text-muted-foreground">
                Built with: React + TypeScript
              </div>
              <div className="text-muted-foreground">
                Theme: Synthwave Dark
              </div>
              <div className="text-muted-foreground">
                Last Update: {currentYear}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 font-mono text-sm text-muted-foreground">
              <span>© {currentYear} Retro Dev Vault.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-primary" />
            </div>

            {/* Fun Stats */}
            <div className="flex items-center space-x-6 font-mono text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Code className="w-4 h-4 text-primary" />
                <span>Lines: 2,847,392</span>
              </div>
              <div className="flex items-center space-x-1">
                <Coffee className="w-4 h-4 text-secondary" />
                <span>Caffeine: 127.3mg</span>
              </div>
              <div className="text-accent">
                Uptime: ∞
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Easter Egg Trigger */}
        <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0" id="konami-trigger" />
      </div>
    </footer>
  );
};
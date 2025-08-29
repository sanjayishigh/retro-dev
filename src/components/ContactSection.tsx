import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  MapPin, 
  Calendar,
  MessageCircle 
} from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message transmitted successfully! I'll get back to you soon.", {
      description: "Your message has been sent to the retro vault.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Sanjay',
      icon: Github,
      url: 'https://github.com/sanjayishigh',
      color: 'text-primary',
      handle: '@sanjayishigh'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'text-secondary',
      handle: '/in/retrodev'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'text-accent',
      handle: '@retro_dev_vault'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@retrodev.com',
      color: 'text-primary',
      handle: 'hello@retrodev.com'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Synthwave Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-retro font-bold text-primary crt-glow mb-4">
            [ Contact.interface ]
          </h2>
          <div className="flex justify-center items-center space-x-2 text-muted-foreground font-mono mb-8">
            <span>&gt;</span>
            <span>Establishing communication channel...</span>
          </div>
          <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Send a transmission through the retro communication array.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="terminal-window p-8">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-primary/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  terminal://contact/send-message.exe
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      &gt; Name:
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name..."
                      className="bg-muted/20 border-primary/30 font-mono focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      &gt; Email:
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      className="bg-muted/20 border-primary/30 font-mono focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    &gt; Subject:
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your project..."
                    className="bg-muted/20 border-primary/30 font-mono focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    &gt; Message:
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or questions..."
                    rows={6}
                    className="bg-muted/20 border-primary/30 font-mono focus:border-primary focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="retro-button neon-glow w-full text-lg py-6 font-retro"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      [ Send Message ]
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="terminal-window p-6">
              <h3 className="text-xl font-retro font-bold text-secondary mb-4">
                [ Quick.connect ]
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 font-mono text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3 font-mono text-sm">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-3 font-mono text-sm">
                  <MessageCircle className="w-4 h-4 text-accent" />
                  <span>Response time: &lt; 24hrs</span>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="terminal-window p-6">
              <h3 className="text-xl font-retro font-bold text-accent mb-4">
                [ Social.networks ]
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 group"
                  >
                    <link.icon className={`w-5 h-5 ${link.color} group-hover:animate-pulse`} />
                    <div className="flex-1">
                      <div className="font-mono text-sm font-medium">{link.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{link.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Status Panel */}
            <Card className="terminal-window p-6">
              <h3 className="text-xl font-retro font-bold text-primary mb-4">
                [ Status.panel ]
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span>System Status:</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="text-primary">OPEN</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Rate:</span>
                  <span className="text-secondary">98.7%</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Active:</span>
                  <span className="text-accent">Now</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
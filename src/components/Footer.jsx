import React, { useState, useRef } from 'react';
import { 
  ChevronRight, Send, ShieldCheck, Zap, 
  Monitor, Library, Info, Github, Cpu, Globe, LifeBuoy
} from 'lucide-react';
import { siGithub, siInstagram, siYoutube, siX } from 'simple-icons';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sections = [
    {
      title: 'Product',
      icon: <Monitor size={14} className="text-blue-500" />,
      links: ['Nova Framework', 'Seishiro API', 'Nova CLI', 'Showcase', 'Ecosystem']
    },
    {
      title: 'Resources',
      icon: <Zap size={14} className="text-cyan-500" />,
      links: ['Getting Started', 'Documentation', 'Templates', 'Blog', 'Source Code']
    },
    {
      title: 'Company',
      icon: <Library size={14} className="text-purple-500" />,
      links: ['About Nova', 'Brand Assets', 'Security', 'Privacy Policy', 'Terms of Service']
    }
  ];

  return (
    <footer className="relative bg-background border-t border-foreground/5 pt-24 pb-0 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/nova.png" alt="Nova.js" className="h-8 w-auto" />
              <span className="text-2xl font-black tracking-tighter">Nova.js</span>
            </div>
            
            <p className="text-lg text-foreground/50 max-w-md mb-10 leading-relaxed font-medium">
              The high-performance framework for building lightning-fast applications. 
              Modern by design, structured for scale.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[11px] font-black text-foreground/30 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                Stay in the loop
              </div>
              <div className="relative max-w-sm group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative flex items-center bg-foreground/5 border border-foreground/10 rounded-xl p-1 focus-within:border-blue-500/30 transition-all">
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-transparent border-none outline-none px-4 py-2.5 w-full text-sm font-medium placeholder:opacity-30"
                  />
                  <button className="bg-foreground text-background px-4 py-2 rounded-lg font-bold text-xs hover:opacity-90 transition-all active:scale-95 flex items-center gap-2">
                    Join <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h3 className="text-[11px] font-black text-foreground/40 uppercase tracking-[0.2em] flex items-center gap-2 border-b border-foreground/5 pb-4">
                  {section.icon} {section.title}
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] text-foreground/60 hover:text-blue-500 transition-all flex items-center gap-1 group w-fit font-medium">
                        {link}
                        <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 ease-out" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section: Socials & Copyright */}
        <div className="py-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8 mb-0">
          <div className="flex items-center gap-6">
            {[
              { icon: siGithub, color: '#ffffff' },
              { icon: siInstagram, color: '#E4405F' },
              { icon: siYoutube, color: '#FF0000' },
              { icon: siX, color: '#ffffff' }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-foreground/40 hover:scale-110 transition-transform active:scale-90"
                style={{ '--hover-color': social.color }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current hover:text-[var(--hover-color)] transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.icon.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="text-[12px] text-foreground/40 font-medium text-center md:text-right">
            © {new Date().getFullYear()} Nova, <a href="https://github.com/untrustnova" target="_blank" rel="noreferrer" className="text-foreground hover:underline">Untrustnova</a>. All rights reserved.
          </div>
        </div>

        {/* Massive Interactive "Nova" Text */}
        <div 
          ref={textRef}
          onMouseMove={handleMouseMove}
          className="relative w-full flex justify-center py-20 select-none cursor-default group/text translate-y-10"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover/text:opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle 150px at ${mousePos.x}px 0px, #3b82f6, transparent 100%)` }}
          />
          <div className="absolute top-0 bottom-0 left-0 w-[1px] opacity-0 group-hover/text:opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle 150px at 0px ${mousePos.y}px, #3b82f6, transparent 100%)` }}
          />
          <div className="absolute top-0 bottom-0 right-0 w-[1px] opacity-0 group-hover/text:opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle 150px at 100% ${mousePos.y}px, #3b82f6, transparent 100%)` }}
          />
          <h2 className="text-[28vw] font-medium leading-[0.7] tracking-[-0.07em] text-foreground/[0.03] transition-colors duration-700 group-hover/text:text-foreground/[0.06] font-sans text-center w-full">
            Nova
          </h2>
          <h2 className="absolute top-20 left-0 w-full text-[28vw] font-medium leading-[0.7] tracking-[-0.07em] text-transparent bg-clip-text pointer-events-none font-sans text-center transition-opacity duration-500 opacity-0 group-hover/text:opacity-100"
            style={{
              backgroundImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, #3b82f6 0%, #60a5fa 20%, #3b82f6 40%, transparent 100%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}
          >
            Nova
          </h2>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/text:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 100%)` }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

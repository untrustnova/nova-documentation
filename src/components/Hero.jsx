import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Copy, Check, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { siNpm, siBun, siYarn, siPnpm } from 'simple-icons';

const ICONS = { npm: siNpm, bun: siBun, yarn: siYarn, pnpm: siPnpm };

const Cloud = memo(({ className, delay = 0 }) => (
  <div className={`absolute pointer-events-none animate-float-slow ${className}`} style={{ animationDelay: `${delay}s`, willChange: 'transform' }}>
    <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg opacity-80">
      <defs><linearGradient id="cGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#fff" /><stop offset="100%" stopColor="#f1f5f9" /></linearGradient></defs>
      <path fill="url(#cGrad)" d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.038,0.001-0.076,0.003-0.113C10.957,12.788,9.799,12,8.5,12c-1.933,0-3.5,1.567-3.5,3.5 c0,0.11,0.006,0.22,0.017,0.328C3.153,16.29,2,17.973,2,20c0,2.209,1.791,4,4,4h11.5c2.485,0,4.5-2.015,4.5-4.5 S19.985,15,17.5,15c-0.166,0-0.329,0.01-0.49,0.028C16.8,12.21,14.41,10,11.5,10c-0.323,0-0.638,0.03-0.943,0.086 C11.201,8.31,12.724,7,14.5,7c2.485,0,4.5,2.015,4.5,4.5c0,0.11-0.004,0.219-0.012,0.328C20.847,12.21,22,13.893,22,16 C22,18.209,20.209,20,18,20c-0.169,0-0.334-0.011-0.496-0.032C17.411,19.54,17.433,19.274,17.5,19z" />
    </svg>
  </div>
));

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [packageManager, setPackageManager] = useState('npm');

  const commands = {
    npm: 'npm i -g novajs-cli',
    bun: 'bun add -g novajs-cli',
    yarn: 'yarn global add novajs-cli',
    pnpm: 'pnpm add -g novajs-cli'
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commands[packageManager]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-background px-4 sm:px-6">
      {/* SNAPPY OPTIMIZED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-500">
           <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-100/20 blur-[100px] rounded-full" />
           <Cloud className="top-[10%] left-[10%] w-32 h-32" delay={0} />
           <Cloud className="top-[40%] right-[10%] w-48 h-48" delay={2} />
        </div>
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
          {[...Array(25)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full animate-twinkle opacity-20"
              style={{ width: '1.5px', height: '1.5px', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center relative z-10 w-full">
        <motion.div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-[2.5rem] xs:text-[3rem] sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-foreground">
            Elevate Your <span className="text-blue-500">Web</span> Experience with <span className="text-blue-400">Nova.js</span>
          </h1>
          <p className="text-base sm:text-lg opacity-60 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
            A <span className="text-foreground font-bold text-blue-500/80">modern, fast and structured</span> framework. 
            Powered by <span className="text-blue-500 font-bold">Seishiro API</span> for seamless integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center lg:justify-start gap-4 mb-8">
            
            {/* Documentation Group */}
            <div className="flex flex-col gap-2 w-full sm:w-auto items-center sm:items-start shrink-0">
              {/* Feature/Status Row aligned with Package Switcher */}
              <div className="flex items-center gap-3 h-[34px] px-1 opacity-40 text-[10px] font-bold uppercase tracking-[0.15em]">
                <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-blue-500" /> Free and Open Source</span>
              </div>
              
              <button className="w-full sm:w-auto bg-foreground text-background h-[52px] px-10 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2">
                <BookOpen size={18} /> Documentation
              </button>
            </div>
            
            {/* CLI & Manager Group */}
            <div className="flex flex-col gap-2 w-full sm:w-auto items-center sm:items-start">
              <div className="flex bg-foreground/5 border border-foreground/10 rounded-2xl p-1 w-full sm:w-[320px] h-[34px]">
                {['npm', 'bun', 'yarn', 'pnpm'].map((pm) => (
                  <button key={pm} onClick={() => setPackageManager(pm)}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl text-[10px] font-bold transition-all ${
                      packageManager === pm ? 'bg-background shadow-sm text-foreground border border-foreground/5' : 'text-foreground/40'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" style={{ color: packageManager === pm ? (ICONS[pm].hex === '181717' ? 'white' : `#${ICONS[pm].hex}`) : 'inherit' }}>
                      <path d={ICONS[pm].path} />
                    </svg>
                    <span className="hidden xs:inline">{pm}</span>
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-[320px]">
                <div className="flex items-center bg-background border border-foreground/10 rounded-xl h-[52px] px-5 font-mono text-[11px] shadow-sm overflow-hidden">
                  <Terminal size={16} className="text-blue-500 mr-3 shrink-0" />
                  <span className="font-semibold text-foreground/70 truncate flex-1 text-left tracking-tight">{commands[packageManager]}</span>
                  <button onClick={copyToClipboard} className="ml-2 pl-3 opacity-40 hover:opacity-100 transition-opacity">
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-5 flex justify-center order-1 lg:order-2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="relative w-full max-w-[300px] xs:max-w-[340px] md:max-w-[450px]">
            <div className="absolute inset-0 bg-blue-500/15 blur-[60px] rounded-full animate-pulse" />
            <img src="/images/nova-anime.png" alt="Nova" className="relative z-10 w-full h-auto drop-shadow-2xl" />
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
        @keyframes f-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-twinkle { animation: twinkle 4s infinite ease-in-out; }
        .animate-float-slow { animation: f-slow 8s infinite ease-in-out; }
      `}} />
    </div>
  );
};

export default Hero;

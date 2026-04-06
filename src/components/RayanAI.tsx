import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONFIG = {
  voiceLang: 'fr-FR', // Changed to French
  crisisKeywords: ['tuer', 'suicide', 'mourir', 'blesser', 'overdose'],
  crisisResponse: "Je détecte une détresse sévère. Veuillez contacter les services d'urgence immédiatement.",
  silenceThreshold: 1000
};

const STATE = { idle: 0, listening: 1, thinking: 2, speaking: 3, crisis: 4 };

class Filament {
  angle: number;
  baseLength: number;
  speed: number;
  offset: number;
  color: string;

  constructor(angle: number, len: number, speed: number) {
    this.angle = angle;
    this.baseLength = len;
    this.speed = speed;
    this.offset = Math.random() * Math.PI * 2;
    this.color = Math.random() > 0.5 ? '#00ffcc' : '#50c878';
  }

  draw(ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number, mode: number, time: number) {
    let volatility = 1, surge = 0;
    if (mode === STATE.speaking) { volatility = 3; surge = 10; }
    else if (mode === STATE.thinking) { volatility = 0.5; surge = -5; }
    else if (mode === STATE.listening) { volatility = 1.5; surge = 5; }
    else if (mode === STATE.crisis) { this.color = '#ff0000'; volatility = 8; }

    const movement = Math.sin(time * this.speed + this.offset) * (10 * volatility);
    const currentLen = this.baseLength + movement + surge;
    const x1 = cx + Math.cos(this.angle) * (radius * 0.3);
    const y1 = cy + Math.sin(this.angle) * (radius * 0.3);
    const cpX = cx + Math.cos(this.angle + time * 0.1) * (currentLen * 0.6);
    const cpY = cy + Math.sin(this.angle + time * 0.1) * (currentLen * 0.6);
    const x2 = cx + Math.cos(this.angle) * currentLen;
    const y2 = cy + Math.sin(this.angle) * currentLen;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cpX, cpY, x2, y2);
    ctx.strokeStyle = this.color;
    ctx.globalAlpha = (mode === STATE.speaking) ? 0.6 : 0.3;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

export default function RayanAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [booted, setBooted] = useState(false);
  const [status, setStatus] = useState("SYSTEM OFFLINE");
  const [transcript, setTranscript] = useState("");
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState(STATE.idle);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const recognitionRef = useRef<any>(null);
  const filamentsRef = useRef<Filament[]>([]);
  const timeRef = useRef(0);
  const memoryRef = useRef<{ user: string, ai: string }[]>([]);

  const queryBrain = async (userInput: string) => {
    for (let word of CONFIG.crisisKeywords) {
      if (userInput.toLowerCase().includes(word)) {
        setMode(STATE.crisis);
        return CONFIG.crisisResponse;
      }
    }
    setMode(STATE.thinking);
    setStatus("PROCESSING...");
    const context = memoryRef.current.slice(-3).map(m => `User: ${m.user}\nAI: ${m.ai}`).join('\n');
    const systemPrompt = "Tu es Rayan, un conseiller IA sage et empathique. Réponds en français. Sois concis (1-2 phrases max).";
    const prompt = `${systemPrompt}\n${context}\nUser: ${userInput}\nAI:`;
    try {
      const url = `https://text.pollinations.ai/${encodeURIComponent(prompt)}?seed=${Math.floor(Math.random() * 1000)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Net error");
      const data = await response.text();
      memoryRef.current.push({ user: userInput, ai: data });
      if (memoryRef.current.length > 5) memoryRef.current.shift();
      return data;
    } catch (e) {
      console.error(e);
      return "Network error. Try again.";
    }
  };

  const speak = (text: string) => {
    setMode(STATE.speaking);
    setStatus("SPEAKING...");
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = CONFIG.voiceLang;
    utter.onend = () => {
      setMode(STATE.listening);
      setStatus("SYSTEM ONLINE");
    };
    synth.speak(utter);
  };

  const bootSystem = () => {
    setBooted(true);
    setMode(STATE.listening);
    setStatus("SYSTEM ONLINE");
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText("");
    const response = await queryBrain(text);
    speak(response);
  };

  useEffect(() => {
    if (!booted || !isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numFilaments = 180;
    filamentsRef.current = [];
    for (let i = 0; i < numFilaments; i++) {
      const angle = (Math.PI * 2 / numFilaments) * i;
      const len = 60 + Math.random() * 40;
      const speed = 0.5 + Math.random();
      filamentsRef.current.push(new Filament(angle, len, speed));
    }

    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0,5,5,0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      ctx.globalCompositeOperation = 'screen';
      filamentsRef.current.forEach(f => f.draw(ctx, cx, cy, 120, mode, timeRef.current));
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      let pupilSize = 25;
      if (mode === STATE.speaking) pupilSize = 20 + Math.sin(timeRef.current * 5) * 3;
      if (mode === STATE.listening) pupilSize = 30;
      if (mode === STATE.crisis) pupilSize = 10;
      ctx.arc(cx, cy, pupilSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.beginPath();
      ctx.ellipse(cx - 10, cy - 10, 6, 4, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      timeRef.current += 0.05;
      animationFrame = requestAnimationFrame(animate);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    // Audio Setup
    const Recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (Recognition) {
      const recognition = new Recognition();
      recognition.continuous = true;
      recognition.lang = CONFIG.voiceLang;
      recognition.interimResults = true;
      let silenceTimer: any = null;

      recognition.onstart = () => {
        setStatus("MICROPHONE ACTIVE");
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        if (event.error === 'not-allowed') {
          setStatus("MIC PERMISSION DENIED");
        } else {
          setStatus("MIC ERROR: " + event.error);
        }
      };

      recognition.onresult = async (event: any) => {
        let currentTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
        clearTimeout(silenceTimer);
        silenceTimer = setTimeout(async () => {
          if (currentTranscript.trim() === "") return;
          const response = await queryBrain(currentTranscript);
          speak(response);
          setTranscript("");
        }, CONFIG.silenceThreshold);
      };

      recognition.onend = () => {
        if (booted && isOpen) recognition.start();
      };

      recognition.start();
      recognitionRef.current = recognition;
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
      if (recognitionRef.current) {
        recognitionRef.current.onend = null;
        recognitionRef.current.stop();
      }
    };
  }, [booted, mode, isOpen]);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8 group-hover:animate-pulse" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[100] w-[350px] h-[500px] bg-[#000505] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col"
          >
            {!booted ? (
              <div className="flex-1 flex flex-col justify-center items-center p-8 text-center">
                <h1 className="text-white font-extralight tracking-[4px] mb-2 text-2xl uppercase">RAYAN AI</h1>
                <p className="text-[#666] text-sm mb-6">GENIE IA</p>
                <button 
                  onClick={bootSystem}
                  className="px-8 py-3 bg-transparent border border-[#00ffcc] text-[#00ffcc] text-sm tracking-[2px] cursor-pointer transition-all duration-300 uppercase hover:bg-[#00ffcc] hover:text-black"
                >
                  Initialize
                </button>
              </div>
            ) : (
              <div className="flex-1 relative flex flex-col">
                <div className="absolute top-4 left-0 w-full text-center z-20">
                  <div className="inline-block text-[0.6rem] tracking-[2px] uppercase text-[#00ffcc] bg-black/30 px-3 py-1 rounded-full border border-[#00ffcc]/10">
                    {status}
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                <div className="p-6 bg-black/50 backdrop-blur-md border-t border-zinc-800 min-h-[100px] flex flex-col justify-center text-center">
                  <p className="text-white/90 text-sm font-light leading-relaxed italic mb-4">
                    {transcript || (status === "MIC PERMISSION DENIED" ? "Microphone bloqué" : "Écoute en cours...")}
                  </p>
                  
                  <form onSubmit={handleTextSubmit} className="flex gap-2">
                    <input 
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Écrivez un message..."
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button 
                      type="submit"
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                    >
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            )}
            
            <div className="bg-black py-2 text-[0.5rem] text-[#333] text-center uppercase tracking-widest">
              AI Simulation • Use Discretion
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

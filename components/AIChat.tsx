
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Ambient Twin Enterprise. I am scanning the GTA grid. How can I assist with your margin recovery today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: 'You are Ambient AI, an elite enterprise analyst for Toronto/GTA HVAC operators. Your expertise is centered on maximizing yield through advanced HVAC data analysis. You specialize in evaluating HVAC system efficiency, detecting irregular energy consumption patterns, and modeling Toronto climate data to optimize dispatch during weather surges. You provide actionable insights on Enbridge/HRS rebate eligibility criteria, TSSA regulatory compliance, and ServiceTitan/Jobber margin reconciliation. Your focus is reducing unbillable truck roll leakage on the 401/DVP/407 and increasing overall enterprise value. Tone: High-stakes, professional, and technical. Responses must be concise, authoritative, and relentlessly profit-focused.',
        },
      });

      const aiText = response.text || "I'm currently recalibrating the GTA recovery matrix. Please try again in a moment.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "Data feed interrupted. Re-syncing with the enterprise ledger." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-8 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[380px] h-[520px] glass border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-8 fade-in duration-300">
          {/* Header */}
          <div className="bg-orange-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Ambient AI</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-tighter">GTA Matrix Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-slate-100 border border-white/5' 
                    : 'bg-orange-500/10 text-orange-200 border border-orange-500/20'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-orange-500/10 px-4 py-3 rounded-2xl flex gap-1 items-center">
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-slate-900/50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Ambient AI..."
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-orange-500 transition-all text-slate-100 pr-12"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:bg-slate-700"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
            <p className="text-[9px] text-slate-600 mt-3 text-center uppercase font-black tracking-widest italic">Encrypted via Enterprise Ledger</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-95 group relative ${
          isOpen ? 'bg-slate-800 rotate-90 border border-white/10' : 'bg-orange-500 hover:bg-orange-400 hover:scale-110 shadow-[0_0_30px_rgba(249,115,22,0.4)]'
        }`}
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#0f172a] z-10"></div>
            <svg className="w-8 h-8 text-white group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, User, Mic, Plus, MoreHorizontal, RefreshCw } from 'lucide-react'
import { useAIStore } from '../../store/useAIStore'
import { restaurants } from '../../data/restaurants'

const MessageBubble = ({ message }) => {
  const isAI = message.role === 'assistant'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-6`}
    >
      <div className={`flex gap-3 max-w-[85%] ${isAI ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          isAI ? 'bg-primary text-white neon-glow' : 'bg-secondary text-white'
        }`}>
          {isAI ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
        </div>
        
        <div className={`space-y-2`}>
          <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
            isAI 
              ? 'glass-card border-primary/10 rounded-tl-none' 
              : 'bg-primary text-white rounded-tr-none'
          }`}>
            {message.content}
          </div>
          
          {isAI && message.suggestions && (
            <div className="flex flex-wrap gap-2 pt-2">
              {message.suggestions.map((s, i) => (
                <button 
                  key={i}
                  className="px-3 py-1.5 glass rounded-full text-[10px] font-bold text-primary hover:bg-primary/10 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const AIChatAssistant = () => {
  const { chatHistory, addMessage, isTyping, setTyping } = useAIStore()
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [chatHistory, isTyping])

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { role: 'user', content: input }
    addMessage(userMsg)
    setInput('')
    
    // Mock AI Response
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const aiMsg = { 
        role: 'assistant', 
        content: `بناءً على طلبك، أقترح عليك تجربة مطعم "بلو ويف" للمأكولات البحرية. إنه قريب جداً منك وحالياً وقت الانتظار فيه 15 دقيقة فقط. هل تود أن أحجز لك طاولة أو أضيفه لجدولك؟`,
        suggestions: ['أضف للجدول', 'أرني الموقع', 'ابحث عن بدائل']
      }
      addMessage(aiMsg)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] lg:h-[700px] glass-card rounded-[2.5rem] overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-festival/5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white neon-glow">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime rounded-full border-2 border-white dark:border-dark-bg" />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">نُــوَى</h2>
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest">AI Festival Assistant</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-primary/10 rounded-xl transition-colors text-gray-400">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-primary/10 rounded-xl transition-colors text-gray-400">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-2 scroll-smooth"
      >
        {chatHistory.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start mb-6"
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 pb-2 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {['أرخص المطاعم', 'مطاعم عائلية', 'عروض حية قريبة', 'مسار سريع'].map((s, i) => (
            <button 
              key={i}
              className="whitespace-nowrap px-4 py-2 glass rounded-full text-xs font-bold hover:bg-primary/10 transition-all border border-primary/5"
              onClick={() => setInput(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 pt-2">
        <div className="relative">
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="اسأل نُــوَى عن أي شيء..."
            className="w-full bg-cream dark:bg-dark-bg/50 border border-white/20 focus:border-primary/50 rounded-[1.5rem] py-4 pl-12 pr-24 text-sm transition-all focus:ring-4 focus:ring-primary/10 outline-none resize-none h-16"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-[8px] text-center text-gray-400 mt-3 font-bold uppercase tracking-widest">
          Nawa uses AI to provide recommendations • Always check wait times on site
        </p>
      </div>
    </div>
  )
}

export default AIChatAssistant

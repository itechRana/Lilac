import { create } from 'zustand'

export const useAIStore = create((set) => ({
  chatHistory: [
    { id: 1, role: 'assistant', content: 'أهلاً بك! أنا نُــوَى، مساعدك الذكي في مهرجان جدة للمأكولات. كيف يمكنني مساعدتك اليوم؟' }
  ],
  isTyping: false,
  addMessage: (message) => set((state) => ({
    chatHistory: [...state.chatHistory, { ...message, id: Date.now() }]
  })),
  setTyping: (status) => set({ isTyping: status }),
  clearHistory: () => set({ 
    chatHistory: [{ id: 1, role: 'assistant', content: 'أهلاً بك! أنا نُــوَى، مساعدك الذكي في مهرجان جدة للمأكولات. كيف يمكنني مساعدتك اليوم؟' }] 
  }),
}))

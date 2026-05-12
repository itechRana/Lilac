import React from 'react'
import AIChatAssistant from '../components/ai/AIChatAssistant'

const Assistant = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-display font-bold mb-2">تحدث مع نُــوَى 🤖</h1>
        <p className="text-gray-500 dark:text-gray-400">مساعدك الشخصي لتجربة مهرجان لا تُنسى</p>
      </div>
      <AIChatAssistant />
    </div>
  )
}

export default Assistant

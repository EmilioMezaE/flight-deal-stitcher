'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { handleEmailSubmit } from '@/app/actions'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface EmailSignupFormProps {
  className?: string
  buttonText?: string
  placeholder?: string
}

export function EmailSignupForm({ 
  className = '', 
  buttonText = 'Get Early Access',
  placeholder = 'Enter your email'
}: EmailSignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setMessage(null)

    try {
      const result = await handleEmailSubmit(formData)
      
      if (result.success) {
        setMessage({ type: 'success', text: result.message })
        // Clear the form
        const form = document.querySelector('form') as HTMLFormElement
        if (form) form.reset()
      } else {
        setMessage({ type: 'error', text: result.message })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Auto-dismiss messages after 5 seconds
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null)
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [message])

  return (
    <div className={className}>
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          name="email"
          placeholder={placeholder}
          required
          disabled={isSubmitting}
          className="flex-1 h-12 text-gray-900 bg-white border-0 focus:ring-2 focus:ring-[#FF7B32]"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 bg-[#FF7B32] hover:bg-[#E6692B] text-white font-semibold border-0 disabled:opacity-50"
        >
          {isSubmitting ? 'Adding...' : buttonText}
        </Button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 max-w-md mx-auto ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600" />
          )}
          <span className="text-sm font-medium">{message.text}</span>
        </div>
      )}
    </div>
  )
}

'use server'

import { addEmailToWaitlist } from '@/lib/email'
import { revalidatePath } from 'next/cache'

export async function handleEmailSubmit(formData: FormData) {
  const email = formData.get('email') as string
  
  if (!email) {
    return { success: false, message: 'Email is required' }
  }

  const result = await addEmailToWaitlist(email)
  
  // Revalidate the page to show updated state
  revalidatePath('/')
  
  return result
}

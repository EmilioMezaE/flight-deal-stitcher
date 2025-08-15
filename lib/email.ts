import fs from 'fs'
import path from 'path'

const EMAIL_FILE_PATH = path.join(process.cwd(), 'data', 'emails.json')

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(EMAIL_FILE_PATH)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Load existing emails
function loadEmails(): string[] {
  ensureDataDirectory()
  if (!fs.existsSync(EMAIL_FILE_PATH)) {
    return []
  }
  try {
    const data = fs.readFileSync(EMAIL_FILE_PATH, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading emails:', error)
    return []
  }
}

// Save emails to file
function saveEmails(emails: string[]) {
  ensureDataDirectory()
  try {
    fs.writeFileSync(EMAIL_FILE_PATH, JSON.stringify(emails, null, 2))
  } catch (error) {
    console.error('Error saving emails:', error)
    throw new Error('Failed to save email')
  }
}

// Validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add email to waitlist
export async function addEmailToWaitlist(email: string): Promise<{ success: boolean; message: string }> {
  try {
    // Validate email
    if (!validateEmail(email)) {
      return { success: false, message: 'Please enter a valid email address' }
    }

    // Load existing emails
    const emails = loadEmails()
    
    // Check if email already exists
    if (emails.includes(email.toLowerCase())) {
      return { success: false, message: 'This email is already on the waitlist!' }
    }

    // Add email to list
    emails.push(email.toLowerCase())
    saveEmails(emails)

    return { success: true, message: 'Successfully added to waitlist! We\'ll notify you when we launch.' }
  } catch (error) {
    console.error('Error adding email to waitlist:', error)
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}

// Get waitlist count (for admin purposes)
export function getWaitlistCount(): number {
  return loadEmails().length
}

import { getWaitlistCount } from '@/lib/email'
import fs from 'fs'
import path from 'path'

export default async function AdminPage() {
  const EMAIL_FILE_PATH = path.join(process.cwd(), 'data', 'emails.json')
  let emails: string[] = []
  let count = 0

  try {
    if (fs.existsSync(EMAIL_FILE_PATH)) {
      const data = fs.readFileSync(EMAIL_FILE_PATH, 'utf-8')
      emails = JSON.parse(data)
      count = emails.length
    }
  } catch (error) {
    console.error('Error loading emails:', error)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Waitlist Admin</h1>
          
          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Waitlist Statistics</h2>
              <p className="text-blue-700">
                Total emails collected: <span className="font-bold text-2xl">{count}</span>
              </p>
            </div>
          </div>

          {emails.length > 0 ? (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Collected Emails</h2>
              <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <div className="grid gap-2">
                  {emails.map((email, index) => (
                    <div key={index} className="bg-white p-3 rounded border">
                      <span className="text-gray-700">{email}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No emails collected yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

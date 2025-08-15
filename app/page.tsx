import { Card, CardContent } from "@/components/ui/card"
import { Plane, Search, Target, CheckCircle, Zap, Globe, Shield } from "lucide-react"
import { EmailSignupForm } from "@/components/email-signup-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3C6E] to-[#2A4A7A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('/airport-departures.jpg')`,
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Catch the Cheapest Flights Before They're Gone
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              AI that finds insane airline deals and stitches them into full trips from your city.
            </p>

            <EmailSignupForm />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C6E] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI works around the clock to find and connect the best flight deals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF7B32] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A3C6E] mb-4">Detects Flash Sales</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitors airlines 24/7 for flash sales, error fares, and promotional deals that disappear quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF7B32] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A3C6E] mb-4">Finds Connections</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically finds connecting flights from your location to the deal departure city.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF7B32] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A3C6E] mb-4">Scores Each Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ranks every itinerary by cost, comfort, and connection risk so you get the best options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C6E] mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to never miss a great flight deal again
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FF7B32] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A3C6E] mb-2">Real-time Alerts</h3>
              <p className="text-gray-600 text-sm">
                Get notified instantly when deals matching your preferences are found.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#FF7B32] rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A3C6E] mb-2">Smart Connections</h3>
              <p className="text-gray-600 text-sm">AI-powered self-connection planning with optimal layover times.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#FF7B32] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A3C6E] mb-2">Transparent Info</h3>
              <p className="text-gray-600 text-sm">
                Clear baggage policies and connection details for every itinerary.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#FF7B32] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A3C6E] mb-2">LATAM Focus</h3>
              <p className="text-gray-600 text-sm">Starting with Latin America, expanding globally based on demand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="py-20 bg-[#1A3C6E] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Flight Deal Stitcher is Different</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Traditional flight search sites miss the best deals. We don't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#FF7B32]">Traditional Flight Search</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Only searches direct routes and standard connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Misses flash sales and error fares</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">No intelligent deal ranking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Reactive searching only</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#FF7B32]">Flight Deal Stitcher</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">AI-powered itinerary stitching from any city</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">24/7 monitoring for flash sales and error fares</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Smart ranking by cost, comfort, and risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Proactive deal alerts delivered to you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Email Signup */}
      <section className="py-20 bg-gradient-to-r from-[#FF7B32] to-[#E6692B] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the waitlist and never miss a flight deal again</h2>
          <p className="text-xl mb-8 text-orange-100">
            Be among the first to access our AI-powered flight deal platform
          </p>

          <EmailSignupForm 
            buttonText="Get Early Access"
            className=""
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1A3C6E] text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-200">© 2024 Flight Deal Stitcher. Built with AI to find you the best flight deals.</p>
        </div>
      </footer>
    </div>
  )
}

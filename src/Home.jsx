import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSlices from './components/FeatureSlices'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <FeatureSlices />

      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Stop chasing receipts. Start closing books.</h2>
          <p className="mt-4 text-slate-600 text-lg">Join teams who’ve automated expense collection and categorization. Try it free — get value in minutes.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Start free</a>
            <a href="#" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-md font-semibold ring-1 ring-slate-200 hover:bg-slate-50">Book a demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

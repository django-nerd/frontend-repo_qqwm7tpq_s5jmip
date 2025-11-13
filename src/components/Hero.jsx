import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
        <div className="w-full grid gap-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              All your invoices, auto-collected and AI-categorized
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Connect your email. We fetch your receipts, extract key data, and categorize every expense so bookkeeping just happens.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-sm hover:bg-blue-700 transition-colors">
              Start free
              <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-md font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> 5-min setup</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> No card required</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Works with Gmail & Outlook</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Brain, Inbox, ReceiptText, Tag, PieChart, Workflow } from 'lucide-react'

const items = [
  { icon: Inbox, title: 'Inbox Connectors', desc: 'Secure OAuth for Gmail and Outlook. Only receipt-like messages are processed.' },
  { icon: ReceiptText, title: 'Invoice Parsing', desc: 'Extract totals, taxes, dates, vendors, currencies, and line items with high accuracy.' },
  { icon: Brain, title: 'AI Categorization', desc: 'Trained models map transactions to your chart of accounts and learn from edits.' },
  { icon: Tag, title: 'Rules & Tags', desc: 'Create flexible rules to auto-apply categories, projects, and cost centers.' },
  { icon: PieChart, title: 'Insights', desc: 'Spot top vendors, categories, and trends. Export to CSV or sync to accounting.' },
  { icon: Workflow, title: 'Approvals', desc: 'Lightweight review flows keep you in control before anything syncs out.' },
]

export default function Features() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Deep-dive on capabilities</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Under the hood, powerful automation turns messy email receipts into clean, categorized expenses you can trust.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow transition-shadow">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

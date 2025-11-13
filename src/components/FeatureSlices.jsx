import { Mail, ReceiptText, Brain, Tag, ShieldCheck, Clock } from 'lucide-react'

const features = [
  {
    title: 'Connect your inbox',
    body: 'Securely link Gmail or Outlook in seconds. We only read messages that look like receipts.',
    icon: Mail,
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Auto-fetch & extract',
    body: 'We detect invoices and parse totals, dates, vendors, and VAT with industry-grade accuracy.',
    icon: ReceiptText,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI categorization',
    body: 'Expenses are auto-tagged to your chart of accounts and learn from your edits over time.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1646583288948-24548aedffd8?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMwMjk1ODN8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Smart tags',
    body: 'Create rules like “Uber → Travel” and sit back while we apply them to new receipts automatically.',
    icon: Tag,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Bank-grade security',
    body: 'End-to-end encryption and SOC-2 aligned practices keep your data safe and private.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Close books faster',
    body: 'Get spend insights, export to CSV, and sync to your accounting tool. Month-end takes minutes.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function FeatureSlices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16">
          {features.map((f, idx) => (
            <Slice key={f.title} {...f} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Slice({ title, body, icon: Icon, image, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? 'md:[&>*:first-child]order-2' : ''}`}>
      <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200">
        <img src={image} alt="feature" className="w-full h-72 md:h-96 object-cover" />
      </div>
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
          <Icon size={18} />
          {title}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{title}</h3>
        <p className="text-slate-600 text-lg">{body}</p>
      </div>
    </div>
  )
}

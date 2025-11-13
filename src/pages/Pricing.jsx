import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    note: 'For individuals testing the waters',
    features: ['100 receipts/month', '1 inbox connection', 'Core AI categorization', 'CSV export'],
  },
  {
    name: 'Pro',
    price: '$29',
    note: 'For small teams closing books monthly',
    features: ['Unlimited receipts', '3 inbox connections', 'Rules & tags', 'Accounting sync'],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Contact',
    note: 'For finance teams with complex needs',
    features: ['SAML SSO', 'Custom retention', 'Dedicated support', 'Bulk export & API'],
  },
]

const faqs = [
  {
    q: 'How do you access my emails securely?',
    a: 'We use OAuth to request the minimum permissions required and only read messages that look like receipts. Data is encrypted in transit and at rest.'
  },
  {
    q: 'Can I correct categories?',
    a: 'Absolutely. Edits are learned by the model and applied automatically to future invoices from the same vendor.'
  },
  {
    q: 'What accounting tools do you integrate with?',
    a: 'We export CSVs and support native sync for popular tools. Tell us what you use during onboarding.'
  },
  {
    q: 'Do you support multiple currencies and VAT?',
    a: 'Yes, we parse currencies, exchange rates, and VAT where present so your totals are correct.'
  },
]

export default function Pricing() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Simple, transparent pricing</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Start free. Upgrade when you’re ready to automate more of your month-end close.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className={`p-6 rounded-xl ring-1 ring-slate-200 shadow-sm bg-white ${t.highlighted ? 'relative overflow-hidden' : ''}`}>
                {t.highlighted && <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 pointer-events-none" />}
                <div className="relative">
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                  <p className="mt-2 text-4xl font-extrabold">{t.price}<span className="text-base font-medium text-slate-500">{t.price === '$29' ? '/mo' : ''}</span></p>
                  <p className="text-slate-600 mt-2">{t.note}</p>
                  <ul className="mt-6 space-y-2 text-slate-700">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-slate-900 text-white py-2.5 rounded-md font-semibold hover:bg-slate-800">Choose {t.name}</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-center">Frequently asked questions</h2>
            <div className="mt-8 space-y-6">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-lg ring-1 ring-slate-200 bg-white p-5">
                  <summary className="cursor-pointer list-none font-medium text-slate-900 flex items-center justify-between">
                    {q}
                    <span className="ml-4 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

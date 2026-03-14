'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inquiryTypes = [
  'Helicopter Charter',
  'Aerial Tours',
  'Flight Training',
  'Maintenance / Service',
  'Special Events',
  'General Inquiry',
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', inquiry: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', phone: '', inquiry: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-white border border-rule p-12 text-center">
        <div className="w-16 h-16 bg-red/10 border-2 border-red flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="font-display font-black text-2xl text-navy uppercase mb-3">
          Message Received
        </h3>
        <p className="font-body text-navy/60 mb-8 max-w-sm mx-auto">
          Thank you for reaching out to HRH. We'll be in touch shortly. For urgent needs, call us directly at 757-488-9044.
        </p>
        <button
          onClick={() => setState('idle')}
          className="btn-outline text-base px-8 py-3"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-rule">
      {/* Form header */}
      <div className="bg-navy px-8 py-6 border-l-4 border-red">
        <h2 className="font-display font-black text-xl text-white uppercase tracking-wide">
          Send Us a Message
        </h2>
        <p className="font-body text-white/55 text-sm mt-1">
          We look forward to hearing from you. Response within one business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="font-mono text-[10px] text-slate-hrh uppercase tracking-widest block mb-2">
              Full Name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full border border-rule bg-cream px-4 py-3 font-body text-navy
                         placeholder-slate-hrh/50 focus:outline-none focus:border-navy
                         focus:bg-white transition-all duration-200"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] text-slate-hrh uppercase tracking-widest block mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="(757) 000-0000"
              className="w-full border border-rule bg-cream px-4 py-3 font-body text-navy
                         placeholder-slate-hrh/50 focus:outline-none focus:border-navy
                         focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-[10px] text-slate-hrh uppercase tracking-widest block mb-2">
            Email Address *
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="your@email.com"
            className="w-full border border-rule bg-cream px-4 py-3 font-body text-navy
                       placeholder-slate-hrh/50 focus:outline-none focus:border-navy
                       focus:bg-white transition-all duration-200"
          />
        </div>

        <div>
          <label className="font-mono text-[10px] text-slate-hrh uppercase tracking-widest block mb-2">
            Inquiry Type
          </label>
          <select
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            className="w-full border border-rule bg-cream px-4 py-3 font-body text-navy
                       focus:outline-none focus:border-navy focus:bg-white
                       transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="">Select a service...</option>
            {inquiryTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-mono text-[10px] text-slate-hrh uppercase tracking-widest block mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your flight needs, desired destination, dates, or training goals..."
            className="w-full border border-rule bg-cream px-4 py-3 font-body text-navy
                       placeholder-slate-hrh/50 focus:outline-none focus:border-navy
                       focus:bg-white transition-all duration-200 resize-none"
          />
        </div>

        {state === 'error' && (
          <div className="bg-red/10 border border-red/30 px-4 py-3">
            <p className="font-body text-red text-sm">
              Something went wrong. Please try again or call us at 757-488-9044.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? 'Sending...' : 'Send Message →'}
        </button>

        <p className="font-mono text-[10px] text-slate-hrh/70 text-center tracking-wider">
          Or call us directly · {' '}
          <a href="tel:17574889044" className="text-red hover:text-red-dark transition-colors">
            757-488-9044
          </a>
        </p>
      </form>
    </div>
  )
}

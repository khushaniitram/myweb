'use client';

import { useState } from 'react';
import PageShell from '@/components/PageShell';
import GithubIcon from '@/components/icons/GithubIcon';
import { Check, Copy, ArrowUpRight, Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('khushanborse2@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+91 9328037817');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', message: '' });
      }, 5000);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to send message. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1080px] px-6 sm:px-8">
        {/* Centered Editorial Header */}
        <header className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2f2f7] border border-black/5 text-xs font-mono tracking-wider uppercase text-[#6e6e73] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Connect · Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] font-normal tracking-tight max-w-2xl mx-auto leading-relaxed">
            Direct channels for research collaborations, engineering roles, and technical discussions.
          </p>
        </header>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left Column: Direct Channels & Status */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#e5e5ea] shadow-sm flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <div className="text-xs font-mono font-medium text-[#1d1d1f] uppercase tracking-wider">
                  Open to Opportunities
                </div>
                <div className="text-xs text-[#6e6e73]">
                  Available for AI/ML engineering roles & research
                </div>
              </div>
            </div>

            {/* Email Card with Copy Button */}
            <div className="bg-white rounded-3xl p-6 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0071e3]/10 text-[#0071e3]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#86868b] uppercase tracking-wider">Email Address</div>
                    <a
                      href="mailto:khushanborse2@gmail.com"
                      className="text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors mt-0.5 block"
                    >
                      khushanborse2@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-[#f5f5f7] hover:bg-[#e5e5ea] text-[#1d1d1f] transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card with Copy Button */}
            <div className="bg-white rounded-3xl p-6 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0071e3]/10 text-[#0071e3]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#86868b] uppercase tracking-wider">Phone / WhatsApp</div>
                    <a
                      href="tel:+919328037817"
                      className="text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors mt-0.5 block"
                    >
                      +91 9328037817
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyPhone}
                  className="p-2.5 rounded-xl bg-[#f5f5f7] hover:bg-[#e5e5ea] text-[#1d1d1f] transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0071e3]/10 text-[#0071e3]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#86868b] uppercase tracking-wider">Based in</div>
                  <div className="text-sm font-semibold text-[#1d1d1f] mt-0.5">
                    Ahmedabad, Gujarat, India
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <a
              href="https://github.com/khushaniitram"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-3xl p-6 border border-[#e5e5ea] shadow-sm hover:shadow-md hover:border-[#0071e3]/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#f5f5f7] group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors text-[#1d1d1f] flex items-center justify-center">
                  <GithubIcon size={18} className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#86868b] uppercase tracking-wider">GitHub Profile</div>
                  <div className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                    github.com/khushaniitram
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
            </a>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e5e5ea] shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-1">
                Send a Message
              </h2>
              <p className="text-sm text-[#6e6e73] mb-8">
                Fill out the form below and I will respond to your inquiry directly.
              </p>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] text-center my-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-semibold text-[#1d1d1f]">Message Received</div>
                  <div className="text-sm text-[#6e6e73] mt-1 max-w-sm mx-auto">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6e6e73] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] text-[#1d1d1f] placeholder-[#86868b] text-sm focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6e6e73] mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] text-[#1d1d1f] placeholder-[#86868b] text-sm focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6e6e73] mb-2">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, engineering role, or research discussion..."
                      className="w-full px-4 py-3 rounded-xl bg-[#fbfbfd] border border-[#e5e5ea] text-[#1d1d1f] placeholder-[#86868b] text-sm focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 transition-all resize-y"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-60 text-white font-medium text-sm transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-[#e5e5ea] text-sm">
          <Link
            href="/experience"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            ← Experience
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
          >
            <span>Home</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}

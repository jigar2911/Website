"use client";
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] text-center backdrop-blur-md">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-green-500" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-gray-400 text-lg">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-brand-orange font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[2rem] backdrop-blur-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Send size={120} className="text-white" />
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-white mb-2">Ready to grow?</h3>
        <p className="text-gray-400 mb-10 text-lg">Fill out the form below and let&apos;s discuss your next project.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Name</label>
              <input
                name="name"
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
              <input
                name="email"
                required
                type="email"
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Service Required</label>
            <select name="service" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none">
              <option className="bg-gray-900">Custom Web Development</option>
              <option className="bg-gray-900">Web App Solutions</option>
              <option className="bg-gray-900">SEO & Marketing</option>
              <option className="bg-gray-900">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
            ></textarea>
          </div>

          {status === 'error' && (
            <p className="text-red-500 font-bold text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            disabled={status === 'submitting'}
            type="submit"
            className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-orange-900 disabled:cursor-not-allowed text-white font-black py-5 rounded-2xl transition-all text-xl shadow-lg shadow-brand-orange/20"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

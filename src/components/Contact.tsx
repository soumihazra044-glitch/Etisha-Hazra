import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare,
  User,
  GraduationCap
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your message.');
      return;
    }

    setStatus('submitting');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Connect
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have a question, feedback, or want to discuss student collaborations and tech opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Handles */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Open for academic discussions, student hackathons, and software learning opportunities.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 text-sm">
                
                {/* Email Card with Copy button */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">Email Address</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </div>

                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* University Card */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">University Campus</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Swami Vivekananda University
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700/80">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Professional Profiles
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    id="contact-github-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all text-slate-700 dark:text-slate-200"
                  >
                    <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span className="text-xs font-bold">GitHub Profile</span>
                  </a>

                  <a
                    id="contact-linkedin-link"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all text-slate-700 dark:text-slate-200"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold">LinkedIn Profile</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out this form and I will get back to your inquiry promptly.
              </p>

              {/* Feedback messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Thank you! Your message has been recorded.</span>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400">Etisha Hazra will respond to your email as soon as possible.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        required
                        className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Student Project Collaboration, Mentorship, or Query"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    required
                    className="w-full p-4 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="send-message-btn"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] shadow-md shadow-indigo-500/20 transition-all disabled:opacity-70 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

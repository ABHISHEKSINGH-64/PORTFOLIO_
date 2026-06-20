import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, sending, success, error

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Server error:', data.error);
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-primary-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-500/10 dark:border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <Card glowColor="rgba(139, 92, 246, 0.12)" className="p-6 md:p-8 flex flex-col gap-6 justify-between h-full">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary-500 dark:text-primary-450">
                    Contact Information
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-850 dark:text-white mt-1">
                    Let's collaborate on your next system.
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                    I am actively seeking software engineering internships, collaborative development opportunities, and data analytics roles. Reach out and I will get back to you within 24 hours.
                  </p>
                </div>

                {/* Direct info list */}
                <div className="space-y-4">
                  {/* Location card */}
                  <div className="flex items-center gap-3.5 text-sm text-slate-650 dark:text-slate-350">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center text-primary-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-slate-500">Location</h4>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-250 mt-0.5">IIT Jodhpur, India</p>
                    </div>
                  </div>

                  {/* Mail card */}
                  <div className="flex items-center gap-3.5 text-sm text-slate-650 dark:text-slate-350">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-slate-500">Email Address</h4>
                      <a
                        href="mailto:abhishek.singh1570@gmail.com"
                        className="text-xs font-semibold text-slate-705 dark:text-slate-250 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mt-0.5 block"
                      >
                        abhishek.singh1570@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social platform list */}
              <div className="border-t border-slate-200/50 dark:border-slate-800/40 pt-6 mt-8 flex flex-col gap-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-450">
                  Follow My Development
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ABHISHEKSINGH-64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/20 text-slate-600 dark:text-slate-450 hover:text-white dark:hover:text-white hover:bg-slate-800 dark:hover:bg-slate-900 transition-all duration-200 flex items-center justify-center w-11 h-11"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-singh1570/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/20 text-slate-600 dark:text-slate-450 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] transition-all duration-200 flex items-center justify-center w-11 h-11"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card glowColor="rgba(6, 182, 212, 0.12)" className="p-6 md:p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 rounded-xl glass-card-light dark:glass-card-dark border ${
                            errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-850'
                          } bg-white/40 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-primary-500/40 text-sm transition-all`}
                          placeholder="Abhishek Singh"
                        />
                        {errors.name && (
                          <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        )}
                      </div>
                      {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 rounded-xl glass-card-light dark:glass-card-dark border ${
                            errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-850'
                          } bg-white/40 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-primary-500/40 text-sm transition-all`}
                          placeholder="abhishek@example.com"
                        />
                        {errors.email && (
                          <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        )}
                      </div>
                      {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl glass-card-light dark:glass-card-dark border ${
                          errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-850'
                        } bg-white/40 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-primary-500/40 text-sm transition-all`}
                        placeholder="Collaboration Opportunities"
                      />
                      {errors.subject && (
                        <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    {errors.subject && <span className="text-[10px] text-red-500">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className={`w-full px-4 py-3 rounded-xl glass-card-light dark:glass-card-dark border ${
                          errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-850'
                        } bg-white/40 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-primary-500/40 text-sm transition-all resize-none`}
                        placeholder="Detail your requirements or message..."
                      />
                      {errors.message && (
                        <AlertCircle className="w-4 h-4 text-red-500 absolute right-3 top-4" />
                      )}
                    </div>
                    {errors.message && <span className="text-[10px] text-red-500">{errors.message}</span>}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant={submitStatus === 'success' ? 'success' : submitStatus === 'error' ? 'danger' : 'primary'}
                    disabled={submitStatus === 'sending' || submitStatus === 'success'}
                    className="w-full sm:w-auto"
                    icon={submitStatus === 'success' ? CheckCircle2 : submitStatus === 'error' ? AlertCircle : Send}
                    iconPosition="right"
                  >
                    {submitStatus === 'sending' && 'Sending Message...'}
                    {submitStatus === 'success' && 'Message Received!'}
                    {submitStatus === 'error' && 'Failed to Send'}
                    {submitStatus === 'idle' && 'Send Message'}
                  </Button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-emerald-500 font-semibold hidden sm:inline"
                      >
                        Thank you! Your message has been sent successfully.
                      </motion.span>
                    )}
                    {submitStatus === 'error' && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-500 font-semibold hidden sm:inline"
                      >
                        Something went wrong. Please try again.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

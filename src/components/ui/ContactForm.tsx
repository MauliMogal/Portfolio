import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { supabaseClient } from '../../supabaseClient';  // adjust the path if needed
import emailjs from 'emailjs-com';  // Import EmailJS


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    console.log(formData); // Add this to check form data

    try {
        // Save to Supabase
        const { error: supabaseError } = await supabaseClient
            .from('contact_submissions')
            .insert([formData]);

        if (supabaseError) throw supabaseError;

        // Email sending logic with EmailJS
        const emailData = {
            from_name: formData.name,     // Ensure correct mapping here
            from_email: formData.email,   // Ensure correct mapping here
            subject: formData.subject,
            message: formData.message,
        };

        // EmailJS send form (replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual details)
        const response = await emailjs.send(
            'service_l7mp261',
            'template_hfuxt0v',
            emailData,
            'B42S38lp8vj5SCo45'
        );

        console.log('Email sent successfully:', response);
        setIsSubmitted(true);  // Set the submitted state to show success message
    } catch (err) {
        setError('Failed to submit the form. Please try again.');
        console.error('Form submission error:', err);
    } finally {
        setIsSubmitting(false);
    }
};

  

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl w-full mx-auto bg-dark-900 border border-dark-800 rounded-2xl p-10 shadow-2xl text-white"
    >
      {error && (
        <div className="mb-6 p-4 border border-red-600 bg-red-800/20 text-red-400 rounded-lg">
          {error}
        </div>
      )}

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-800/20 border border-green-700 text-green-400 rounded-lg p-6 text-center"
        >
          <h3 className="text-lg font-semibold mb-1">Message Sent!</h3>
          <p>Thanks for reaching out. I’ll get back to you soon.</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-dark-800 border border-dark-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-dark-800 border border-dark-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject of your message"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-dark-800 border border-dark-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-md bg-dark-800 border border-dark-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-64 px-6 py-3 bg-primary-600 hover:bg-primary-700 transition-colors text-white font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;

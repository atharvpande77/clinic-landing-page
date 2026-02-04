
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Dermatology',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: 'Dermatology', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-white"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
          <input 
            required
            type="tel" 
            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-white"
            placeholder="+91 00000 00000"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">Select Service</label>
        <select 
          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-white appearance-none"
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
        >
          <option>Dermatology</option>
          <option>ENT Specialist</option>
          <option>Pain Therapy</option>
          <option>Ayurved & Panchakarma</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">Message (Optional)</label>
        <textarea 
          rows={4}
          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-white resize-none"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
          isSuccess 
            ? 'bg-green-500 text-white shadow-green-200' 
            : 'bg-teal-600 text-white hover:bg-teal-700 shadow-teal-200'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Request...
          </>
        ) : isSuccess ? (
          'Sent Successfully!'
        ) : (
          'Book Appointment'
        )}
      </button>
      
      {isSuccess && (
        <p className="text-green-600 text-center text-sm font-medium animate-bounce">
          We'll call you back within 30 minutes!
        </p>
      )}
    </form>
  );
};

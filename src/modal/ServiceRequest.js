// src/modal/ServiceRequest.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2, Wrench } from 'lucide-react';

/* ─── Toast Notification ─── */
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 20, y: -20 }}
      className={`fixed bottom-4 right-4 z-[1600] flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${
        type === 'success' ? 'bg-emerald-500' :
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      } text-white min-w-[280px]`}
    >
      {type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
      <span className="text-sm font-medium flex-1">{message}</span>
      <button onClick={onClose} className="hover:opacity-70">
        <X size={16} />
      </button>
    </motion.div>
  );
};

function Input({ icon: Icon, error, ...props }) {
  const [focused, setFocused] = useState(false);

  const baseClasses = "w-full bg-slate-50 border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-[11px] px-3 sm:px-[14px] text-sm text-slate-800 outline-none font-sans transition-all duration-200";
  const focusClasses = "focus:border-sky-600 focus:shadow-[0_0_0_3px_rgba(2,132,199,0.1)] focus:bg-white";
  const errorClasses = error ? "border-red-500" : "border-slate-200";

  return (
    <div className="relative">
      {Icon && (
        <Icon size={14} className={`absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused ? 'text-sky-600' : 'text-slate-400'}`} />
      )}
      {props.as === 'select' ? (
        <select
          {...props}
          as={undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseClasses} ${focusClasses} ${errorClasses} ${Icon ? 'pl-9 sm:pl-[38px]' : 'pl-3 sm:pl-[14px]'} pr-8 appearance-none cursor-pointer`}
        />
      ) : (
        <input
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseClasses} ${focusClasses} ${errorClasses} ${Icon ? 'pl-9 sm:pl-[38px]' : 'pl-3 sm:pl-[14px]'}`}
        />
      )}
      {props.as === 'select' && (
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      )}
      {error && <p className="text-[10px] sm:text-[11px] text-red-500 mt-1 font-sans">{error}</p>}
    </div>
  );
}

function Field({ label, children, required }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-1.5">
      <label className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessScreen({ onReset, msg }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 text-center h-full min-h-[400px]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, delay: 0.1 }}
        className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full bg-sky-100/10 flex items-center justify-center mb-4 sm:mb-5 shadow-[0_0_0_8px_rgba(14,165,233,0.06)] sm:shadow-[0_0_0_12px_rgba(14,165,233,0.06)]"
      >
        <CheckCircle2 size={28} className="sm:w-[34px] sm:h-[34px]" color="#0ea5e9" />
      </motion.div>
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-2.5">
        Service Request Sent!
      </h3>
      <p className="text-[11px] sm:text-[13px] text-slate-400 font-sans leading-relaxed mb-5 sm:mb-7">{msg}</p>
      <button
        onClick={onReset}
        className="bg-gradient-to-r from-blue-900 to-sky-600 border-none text-white py-2.5 sm:py-3 px-5 sm:px-7 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold cursor-pointer font-sans shadow-[0_6px_20px_rgba(30,58,138,0.25)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.3)] transition-shadow"
      >
        Submit Another Request
      </button>
    </motion.div>
  );
}

const ServiceRequestModal = ({ onClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [done, setDone] = useState(false);

  const emptyForm = {
    companyDetails: '',
    unit: '',
    location: '',
    contactPerson: '',
    designation: '',
    contactNo: '',
    email: '',
    instrumentType: '',
    modelNo: '',
    serialNo: '',
    natureOfProblem: '',
    contractType: '',
    poNumber: ''
  };

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // Reset form when modal closes
  useEffect(() => {
    return () => {
      setDone(false);
      setFormData(emptyForm);
      setErrors({});
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Validation function for contact number
  const validateContactNo = (contactNo) => {
    const cleanNumber = contactNo.replace(/[\s\-\(\)\+]/g, '');

    if (!cleanNumber) {
      return { isValid: false, message: 'Contact number is required' };
    }

    if (!/^\d+$/.test(cleanNumber)) {
      return { isValid: false, message: 'Contact number should contain only digits' };
    }

    if (cleanNumber.length < 10 || cleanNumber.length > 12) {
      return { isValid: false, message: 'Contact number should be between 10-12 digits' };
    }

    if (cleanNumber.length === 10 && !/^[6-9]/.test(cleanNumber)) {
      return { isValid: false, message: 'Mobile number should start with 6,7,8, or 9' };
    }

    return { isValid: true, message: '' };
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.companyDetails.trim()) {
      newErrors.companyDetails = 'Company details are required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
    } else if (formData.contactPerson.trim().length < 2) {
      newErrors.contactPerson = 'Name must be at least 2 characters';
    }

    if (!formData.contactNo) {
      newErrors.contactNo = 'Contact number is required';
    } else {
      const contactValidation = validateContactNo(formData.contactNo);
      if (!contactValidation.isValid) {
        newErrors.contactNo = contactValidation.message;
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.natureOfProblem.trim()) {
      newErrors.natureOfProblem = 'Please describe the problem';
    } else if (formData.natureOfProblem.trim().length < 10) {
      newErrors.natureOfProblem = 'Please provide more details about the issue';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contactNo') {
      const digitsOnly = value.replace(/[^\d]/g, '');
      setFormData({ ...formData, [name]: digitsOnly.slice(0, 12) });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://smartlabtechbackend-p5h6.onrender.com/api/servicepage/submit', {
        method: 'POST',
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setDone(true);
        showToast('Service request submitted successfully!', 'success');

        // Auto close after 3 seconds
        setTimeout(() => {
          onClose();
          setDone(false);
          setFormData(emptyForm);
        }, 3000);
      } else {
        showToast(data.message || 'Failed to submit service request', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Network error. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setDone(false);
    setFormData(emptyForm);
    setErrors({});
  };

  const inputClass = "w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200";
  const textareaClass = "w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none";

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f2356] to-blue-900 p-5 flex-shrink-0 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-sky-500/15" />
          <div className="absolute -bottom-4 left-20 w-[60px] h-[60px] rounded-full bg-sky-500/10" />
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 backdrop-blur-sm flex items-center justify-center border border-sky-500/30">
                <Wrench size={20} color="#38bdf8" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg font-serif m-0">Service Request</h2>
                <p className="text-white/55 text-xs font-sans mt-0.5">Fill details below for service support</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 cursor-pointer flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body - Scrollable */}
        <div
          className="flex-1 overflow-y-auto p-6 bg-white"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#94a3b8 transparent',
          }}
        >
          <AnimatePresence mode="wait">
            {done ? (
              <SuccessScreen key="done" onReset={resetForm} msg="Our service team will contact you within 24 hours." />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Company Details *</label>
                    <input
                      type="text"
                      name="companyDetails"
                      value={formData.companyDetails}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Enter company name"
                    />
                    {errors.companyDetails && <p className="text-xs text-red-500 mt-1">{errors.companyDetails}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Unit / Department</label>
                    <input
                      type="text"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="City, State"
                    />
                    {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Full name"
                    />
                    {errors.contactPerson && <p className="text-xs text-red-500 mt-1">{errors.contactPerson}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Contact Number *</label>
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="10-12 digits"
                    />
                    {errors.contactNo && <p className="text-xs text-red-500 mt-1">{errors.contactNo}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Email ID *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Instrument Type</label>
                    <input
                      type="text"
                      name="instrumentType"
                      value={formData.instrumentType}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., HPLC, Spectrophotometer"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Model Number</label>
                    <input
                      type="text"
                      name="modelNo"
                      value={formData.modelNo}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Serial Number</label>
                    <input
                      type="text"
                      name="serialNo"
                      value={formData.serialNo}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Contract Type</label>
                    <input
                      type="text"
                      name="contractType"
                      value={formData.contractType}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="AMC / Non-AMC"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">PO Number</label>
                    <input
                      type="text"
                      name="poNumber"
                      value={formData.poNumber}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="If applicable"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Nature of Problem *</label>
                  <textarea
                    name="natureOfProblem"
                    rows="4"
                    value={formData.natureOfProblem}
                    onChange={handleChange}
                    className={textareaClass}
                    placeholder="Please describe the issue in detail..."
                  />
                  {errors.natureOfProblem && <p className="text-xs text-red-500 mt-1">{errors.natureOfProblem}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit Service Request"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </>
  );
};

export default ServiceRequestModal;
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agree: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', subject: '', message: '', agree: '' };

    if (!formData.name) {
      newErrors.name = '*Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = '*Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '*Email address is invalid';
      valid = false;
    }

    if (!formData.subject) {
      newErrors.subject = '*Subject is required';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = '*Message is required';
      valid = false;
    }

    if (!formData.agree) {
      newErrors.agree = '*You must agree to the Terms & Conditions';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log('Form data:', formData);
      // alert('Form submitted successfully!');
      toast.success('Form submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });

      // Reset the form only if the submission is successful
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        agree: false,
      });

      setErrors({
        name: '',
        email: '',
        subject: '',
        message: '',
        agree: '',
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error" style={{ color: "red" }}>{errors.name}</span>}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error" style={{ color: "red" }}>{errors.email}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error" style={{ color: "red" }}>{errors.subject}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <textarea
                placeholder="Enter Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error" style={{ color: "red" }}>{errors.message}</span>}
            </div>
          </div>

          <div className="col-xxl-12">
            <div className="contact__form-agree  align-items-center mb-20">
              <div className="d-flex">
                <input
                  className="e-check-input"
                  type="checkbox"
                  id="e-agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label className="e-check-label" htmlFor="e-agree">
                  I agree to the
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </label>
              </div>
              {errors.agree && (
                <div className="error" style={{ color: "red" }}>
                  {errors.agree}
                </div>
              )}
            </div>
          </div>

          <div className="col-xxl-12">
            <div className="contact__btn">
              <button type="submit" className="e-btn">
                Send your message
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;

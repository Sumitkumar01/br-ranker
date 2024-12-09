"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogCommentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
    agree: false, // Add agree to formData
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
    agree: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked, // Explicitly casting to HTMLInputElement
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      website: '',
      comment: '',
      agree: '',
    };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = '* Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = '* Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '* Email address is invalid';
      isValid = false;
    }

    if (!formData.comment) {
      newErrors.comment = '* Comment is required';
      isValid = false;
    }

    if (!formData.agree) {
      newErrors.agree = '* You must agree to the terms';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm(); // Only call validateForm() once

    if (isValid) {
      console.log('Form data:', formData);
      // alert('Comment submitted successfully!');
      toast.success('Comment submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });

      // Reset the form
      setFormData({
        name: '',
        email: '',
        website: '',
        comment: '',
        agree: false,
      });
      setErrors({
        name: '',
        email: '',
        website: '',
        comment: '',
        agree: '',
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="blog__comment-input">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="blog__comment-input">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-input">
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
              />
              {errors.website && <span style={{ color: 'red' }}>{errors.website}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-input">
              <textarea
                name="comment"
                placeholder="Enter your comment ..."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
              {errors.comment && <span style={{ color: 'red' }}>{errors.comment}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-agree d-flex align-items-center mb-20">
              <input
                className="e-check-input"
                type="checkbox"
                id="e-agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label className="e-check-label" htmlFor="e-agree">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
              {errors.agree && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.agree}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-btn">
              <button type="submit" className="e-btn">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default BlogCommentForm;
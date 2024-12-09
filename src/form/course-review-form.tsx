"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseReviewFrom = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reviewTitle: '',
    rating: 0,
    reviewSummary: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    reviewTitle: '',
    rating: '',
    reviewSummary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRatingClick = (value: number) => {
    setFormData({
      ...formData,
      rating: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', reviewTitle: '', rating: '', reviewSummary: '' };

    if (!formData.name) {
      newErrors.name = '* Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = '* Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '* Email address is invalid';
      valid = false;
    }

    if (!formData.reviewTitle) {
      newErrors.reviewTitle = '* Review Title is required';
      valid = false;
    }

    if (formData.rating === 0) {
      newErrors.rating = '* Rating is required';
      valid = false;
    }

    if (!formData.reviewSummary) {
      newErrors.reviewSummary = '* Review Summary is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();
    console.log('Validation result:', isValid);

    if (isValid) {
      console.log('Form data:', formData);
      // alert('Review submitted successfully!');
      toast.success('Review submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        reviewTitle: '',
        rating: 0,
        reviewSummary: ''
      });
      setErrors({
        name: '',
        email: '',
        reviewTitle: '',
        rating: '',
        reviewSummary: ''
      });
    }
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6">
            <div className="course__form-input">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error" style={{ color: 'red' }}>{errors.name}</span>}
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="course__form-input">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="course__form-input">
              <input
                type="text"
                placeholder="Review Title"
                name="reviewTitle"
                value={formData.reviewTitle}
                onChange={handleChange}
              />
              {errors.reviewTitle && <span className="error" style={{ color: 'red' }}>{errors.reviewTitle}</span>}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="course__form-input">
              <div className="course__form-rating">
                <span>Rating : </span>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <li
                      key={value}
                      onClick={() => handleRatingClick(value)}
                      style={{ cursor: 'pointer', margin: '0 2px' }}
                    >
                      <i
                        className={`fas fa-star ${value <= formData.rating ? 'filled' : 'no-rating'}`}
                        style={{ color: value <= formData.rating ? 'gold' : 'gray', fontSize: '24px' }}
                      ></i>
                    </li>
                  ))}
                </ul>
                {errors.rating && <span className="error" style={{ color: 'red' }}>{errors.rating}</span>}
              </div>
              <textarea
                placeholder="Review Summary"
                name="reviewSummary"
                value={formData.reviewSummary}
                onChange={handleChange}
              ></textarea>
              {errors.reviewSummary && <span className="error" style={{ color: 'red' }}>{errors.reviewSummary}</span>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__form-btn mt-10 mb-55">
              <button type="submit" className="e-btn">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default CourseReviewFrom;

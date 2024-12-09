"use client";
import React, { useEffect, useState } from "react";
import { AppContext } from '@/contextApi/AppProvider';
import { useContext } from 'react';
import { coursesType } from "@/interFace/interFace";

interface Package {
  name: string;
  finalPrice:number
  duration: string;
  lecture: string;
  price: number;
  oldPrice: number;
}

const CheckoutArea = () => {

  const context = useContext(AppContext);
  const [firstSubject, setFirstSubject] = useState<coursesType | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isActiveB, setActiveB] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("context", context);

  const country = context?.country;


  const currencySymbol = country === 'US' ? '$' : '₹';

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    parentName:"",
    // address: "",
    town: "",
    state: "",
    postCode: "",
    email: "",
    phone: "",
  });
  const [formData, setFormData] = useState({
    country: "india",
    firstName: "",
    lastName: "",
    parentName:"",
    // address: "",
    // apartment: "",
    town: "",
    state: "",
    postCode: "",
    email: "",
    phone: "",
    board: "",
    category: "",
    class: "",
    subject: "",
    package: "",
    orderTotal: 0,
    lecture:""
  });

  useEffect(() => {
    if (context?.bookSubject && context.bookSubject.length > 0) {
      setFirstSubject(context.bookSubject[0]);
    }

    const storedPackage = localStorage.getItem("selectedPackage");
    if (storedPackage) {
      setSelectedPackage(JSON.parse(storedPackage));
    }
  }, [context]);

  console.log(selectedPackage);
  

  useEffect(() => {
    if (firstSubject && selectedPackage) {
      setFormData((prevData) => ({
        ...prevData,
        board: firstSubject.board,
        category: firstSubject.category,
        class: firstSubject.classCodeAsOfBoard || "",
        subject: firstSubject.title,
        package: selectedPackage.name,
        orderTotal: selectedPackage.price,
        lecture: selectedPackage.lecture,
      }));
    }
  }, [firstSubject, selectedPackage]);



  // console.log('Context:', context);
  // console.log('Book Subject:', bookSubject);

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.parentName) {
      newErrors.parentName = "Parent name is required";
    }
    // if (!formData.town) {
    //   newErrors.town = "Town/City is required";
    // }
    if (!formData.state) {
      newErrors.state = "State/County is required";
    }
    if (!formData.postCode) {
      newErrors.postCode = "Postcode/Zip is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted successfully", formData);
      alert('Form submitted successfully!');
      setFormData({
        country: "india",
        firstName: "",
        lastName: "",
        parentName:"",
        // apartment: "",
        town: "",
        state: "",
        postCode: "",
        email: "",
        phone: "",
        board: "",
        category: "",
        class: "",
        subject: "",
        package: "",
        orderTotal: 0,
        lecture:"",
      });

      setErrors({
        firstName: "",
        lastName: "",
        parentName:"",
        // address: "",
        town: "",
        state: "",
        postCode: "",
        email: "",
        phone: "",
      });
      // Here you can call an API to submit the form data or show a success message
      // Example: send formData to a backend API
      // fetch('/api/submit-order', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // .then(response => response.json())
      // .then(data => console.log('Success:', data))
      // .catch((error) => console.error('Error:', error));

    } else {
      // If validation fails, errors will be displayed under the input fields
      console.log("Form validation failed");
    }
  };

  return (
    <section className="checkout-area pb-70 pt-70">
      <div className="container">
        {!context ? (
          <div>Loading...</div>
        ) : !firstSubject ? (
          <div>Loading subject details...</div>
        ) : !selectedPackage ? (
          <div>No package selected.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="checkbox-form">
                  <h3>Billing Details of {firstSubject.title}{" "}({firstSubject.classCodeAsOfBoard})</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                          <select name="country"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="algeria">Algeria</option>
                            <option value="afghanistan">Afghanistan</option>
                            <option value="ghana">Ghana</option>
                            <option value="albania">Albania</option>
                            <option value="bahrain">Bahrain</option>
                            <option value="colombia">Colombia</option>
                            <option value="dominicanrepublic">Dominican Republic</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && <span className="error" style={{ color: "red" }}>{errors.firstName}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required"></span>
                        </label>
                        <input
                          type="text"
                          name="lastName"

                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && <span className="error" style={{ color: "red" }}>{errors.lastName}</span>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Parent Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          // required
                          value={formData.parentName}
                          onChange={handleChange}
                          name="parentName"
                          placeholder="Parent Name" />
                        {errors.parentName && <span className="error" style={{ color: "red" }}>{errors.parentName}</span>}
                      </div>
                    </div>
                    {/* <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Apartment <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleChange}
                          placeholder="Apartment, suite, unit etc. (optional)"
                        required
                        />
                      </div>
                    </div> */}
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          // required
                          name="town"
                          value={formData.town}
                          onChange={handleChange}
                          placeholder="Town / City" />
                        {errors.town && <span className="error" style={{ color: "red" }}>{errors.town}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          // required
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State / County" />
                        {errors.state && <span className="error" style={{ color: "red" }}>{errors.state}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          // required
                          name="postCode"
                          value={formData.postCode}
                          onChange={handleChange}
                          placeholder="Postcode / Zip" />
                        {errors.postCode && <span className="error" style={{ color: "red" }}>{errors.postCode}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          // required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email address"
                        />
                        {errors.email && <span className="error" style={{ color: "red" }}>{errors.email}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          // required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number" />
                        {errors.phone && <span className="error" style={{ color: "red" }}>{errors.phone}</span>}
                      </div>
                    </div>
                  </div>
                  {/* <ShipBoxAddress /> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="your-order mb-30">
                  <h3>Subject Details</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Board</th>
                          <th className="product-total">{firstSubject.board}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="product-name">Category</th>
                          <th className="product-total">{firstSubject.category}</th>
                        </tr>
                        <tr>
                          <th className="product-name">Class</th>
                          <th className="product-total">{firstSubject.classCodeAsOfBoard}</th>
                        </tr>
                        <tr>
                          <th className="product-name">Subject</th>
                          <th className="product-total">{firstSubject.title}</th>
                        </tr>
                        <tr>
                          <th className="product-name">Lecture</th>
                          <th className="product-total">{selectedPackage.lecture}</th>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">{`${currencySymbol}${selectedPackage.finalPrice}`}</span>
                            </strong>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Package</th>
                          <td>
                            <span className="amount">{selectedPackage.name}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="accordion" id="checkoutAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#payment"
                            aria-expanded="false"
                            aria-controls="payment"
                          >
                            Payment Method
                          </button>
                        </h2>
                        <div
                          id="payment"
                          className="accordion-collapse collapse"
                          aria-labelledby="paymentTwo"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            <p>You need to pay it with your prefable methods</p>
                            <div className="payment-option mb-10">
                              <label htmlFor="pay_later_payment">
                                <input type="radio" id="pay_later_payment" name="payment_method" /> Pay later
                              </label>
                            </div>
                            <div className="payment-option mb-10">
                              <label htmlFor="mollie_payment">
                                <input type="radio" id="mollie_payment" name="payment_method" /> Mobile Payment
                              </label>
                            </div>
                            <div className="payment-option mb-10">
                              <label htmlFor="paypal_payment">
                                <input type="radio" id="paypal_payment" name="payment_method" /> Pay with Paypal
                              </label>
                            </div>
                            <div className="payment-option mb-10">
                              <label htmlFor="stripe_payment">
                                <input type="radio" id="stripe_payment" name="payment_method" /> Pay with Visa/Mastercard
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment mt-20">
                      <button type="submit" className="e-btn e-btn-border">
                        Get Free Trailer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CheckoutArea;

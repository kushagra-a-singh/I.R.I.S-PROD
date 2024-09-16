import React, { useState } from 'react';
import { supabase } from '../supabase'; // Import the Supabase client
import './event2.css'; // Make sure this file includes necessary styles

import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthWeakPasswordError } from '@supabase/supabase-js';


const Event2 = () => {
  const [formData, setFormData] = useState({
    team_name: '',
    leader_name: '',
    leader_phone: '',
    leader_email: '',
    leader_prn: '',
    leader_branch: '',
    member2_name: '',
    member2_phone: '',
    member2_email: '',
    member2_prn: '',
    member2_branch: '',
    member3_name: '',
    member3_phone: '',
    member3_email: '',
    member3_prn: '',
    member3_branch: '',
    member4_name: '',
    member4_phone: '',
    member4_email: '',
    member4_prn: '',
    member4_branch: '',
    //upi_transaction_id: ''
  });
  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  // const pay = async () => {
  //   let amount = 255;
  //   const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return false; // Payment failed due to SDK not loading
  //   }

  //   return new Promise((resolve, reject) => {
  //     const options = {
  //       key: "rzp_test_DEvIsmgNnBeEH2", // API key from Razorpay dashboard
  //       amount: parseInt(amount * 100), // Amount in paise
  //       currency: "INR", // Currency code
  //       name: "I.R.I.S. MIT WPU", // Project or transaction name
  //       description: "Hackathon Registration Fee",
  //       image: "https://avatars.githubusercontent.com/u/160888318?v=4", // Logo
  //       handler: function (response) {
  //         // This function will be called after successful payment
  //         if (response.razorpay_payment_id) {
  //           resolve(true); // Payment successful
  //         } else {
  //           resolve(false); // Payment failed
  //         }
  //       },
  //       prefill: {
  //         name: "IRIS MIT WPU ",
  //         email: "iris@mitwpu.edu.in",
  //         //contact: "7715959053",
  //       },
  //       notes: {
  //         address: "India",
  //       },
  //       theme: {
  //         color: "#000000",
  //       },
  //     };

  //     const paymentObject = new window.Razorpay(options);
  //     paymentObject.on('payment.failed', (response) => {
  //       resolve(false); // Payment failed
  //     });
  //     paymentObject.open();
  //   });
  // };

  const [errors, setErrors] = useState({});
  // const [showModal, setShowModal] = useState(false); // Add state for modal visibility

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\d{10}$/;
    const prnRegex = /^\d{10}$/;
    //const upiRegex = /^\d{12}$/;

    // Basic required fields
    const requiredFields = [
      'team_name', 'leader_name', 'leader_phone', 'leader_email', 'leader_prn',
      'leader_branch', 'member2_name', 'member2_phone', 'member2_email', 'member2_prn',
      'member2_branch', 'member3_name', 'member3_phone', 'member3_email', 'member3_prn',
      'member3_branch', 'member4_name', 'member4_phone', 'member4_email', 'member4_prn',
      'member4_branch', //'upi_transaction_id'
    ];

    requiredFields.forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = 'This field is required';
      }
    });

    // Validate PRN fields
    ['leader_prn', 'member2_prn', 'member3_prn', 'member4_prn'].forEach((key) => {
      if (!prnRegex.test(formData[key])) {
        newErrors[key] = 'Enter valid PRN';
      }
    });

    // Validate phone numbers
    ['leader_phone', 'member2_phone', 'member3_phone', 'member4_phone'].forEach((key) => {
      if (!phoneRegex.test(formData[key])) {
        newErrors[key] = 'Enter valid 10 digits number';
      }
    });

    // Validate UPI transaction ID
    // if (!upiRegex.test(formData.upi_transaction_id)) {
    //   newErrors.upi_transaction_id = 'Enter valid UPI Transaction ID';
    // }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector(`input[name="${Object.keys(newErrors)[0]}"], select[name="${Object.keys(newErrors)[0]}"]`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const paymentStatus = await pay();
  //   if (paymentStatus == true) {
  //     console.log("Payment successful!");
  //   } else {
  //     console.log("Payment failed.");
  //   }

  //   if (!validate()) {
  //     return;
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      // Insert form data into Supabase
      const { data, error } = await supabase
        .from('event2_registrations') // Ensure this matches your Supabase table name
        .insert([{ ...formData, created_at: new Date().toISOString() }]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Registration successful:', data);
        setFormData({
          team_name: '',
          leader_name: '',
          leader_phone: '',
          leader_email: '',
          leader_prn: '',
          leader_branch: '',
          member2_name: '',
          member2_phone: '',
          member2_email: '',
          member2_prn: '',
          member2_branch: '',
          member3_name: '',
          member3_phone: '',
          member3_email: '',
          member3_prn: '',
          member3_branch: '',
          member4_name: '',
          member4_phone: '',
          member4_email: '',
          member4_prn: '',
          member4_branch: '',
          //upi_transaction_id: ''
        });
        setErrors({});
        // setShowModal(true); // Show modal on successful registration
        navigate('/checkoutPayment', { state: { formData } });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <div className="event2">
      <Header>
        {/* Include Header component here */}
      </Header>
      <main>
        <h1 className="title">Upcoming Event: September Hackathon</h1>
        <p>This is a short description of the event.</p>
        <div className="image-container">
          <img src="/sephackathon.jpg" alt="Event 2 Image" className="event-image" />
        </div>
        <div className="checkout-box">
          <h2 className="title2">*Registration Fee: INR 250*</h2>
          <form onSubmit={handleSubmit}>
            <h3 className="centered-header">Team Information:</h3>
            {errors.team_name && <div className="error-text">{errors.team_name}</div>}
            <input
              type="text"
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Team Name"
            />

            <h3 className="centered-header">Leader:</h3>
            {errors.leader_name && <div className="error-text">{errors.leader_name}</div>}
            <input
              type="text"
              name="leader_name"
              value={formData.leader_name}
              onChange={handleChange}
              placeholder="Leader Name"
            />
            {errors.leader_phone && <div className="error-text">{errors.leader_phone}</div>}
            <input
              type="tel"
              name="leader_phone"
              value={formData.leader_phone}
              onChange={handleChange}
              placeholder="Leader Phone Number"
            />
            {errors.leader_email && <div className="error-text">{errors.leader_email}</div>}
            <input
              type="email"
              name="leader_email"
              value={formData.leader_email}
              onChange={handleChange}
              placeholder="Leader Email ID"
            />
            {errors.leader_prn && <div className="error-text">{errors.leader_prn}</div>}
            <input
              type="text"
              name="leader_prn"
              value={formData.leader_prn}
              onChange={handleChange}
              placeholder="Leader PRN"
            />
            <input
              type="text"
              name="leader_branch"
              value={formData.leader_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3 className="centered-header">Member 2:</h3>
            {errors.member2_name && <div className="error-text">{errors.member2_name}</div>}
            <input
              type="text"
              name="member2_name"
              value={formData.member2_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member2_phone && <div className="error-text">{errors.member2_phone}</div>}
            <input
              type="tel"
              name="member2_phone"
              value={formData.member2_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member2_email && <div className="error-text">{errors.member2_email}</div>}
            <input
              type="email"
              name="member2_email"
              value={formData.member2_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.member2_prn && <div className="error-text">{errors.member2_prn}</div>}
            <input
              type="text"
              name="member2_prn"
              value={formData.member2_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member2_branch"
              value={formData.member2_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3 className="centered-header">Member 3:</h3>
            {errors.member3_name && <div className="error-text">{errors.member3_name}</div>}
            <input
              type="text"
              name="member3_name"
              value={formData.member3_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member3_phone && <div className="error-text">{errors.member3_phone}</div>}
            <input
              type="tel"
              name="member3_phone"
              value={formData.member3_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member3_email && <div className="error-text">{errors.member3_email}</div>}
            <input
              type="email"
              name="member3_email"
              value={formData.member3_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.member3_prn && <div className="error-text">{errors.member3_prn}</div>}
            <input
              type="text"
              name="member3_prn"
              value={formData.member3_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member3_branch"
              value={formData.member3_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3 className="centered-header">Member 4:</h3>
            {errors.member4_name && <div className="error-text">{errors.member4_name}</div>}
            <input
              type="text"
              name="member4_name"
              value={formData.member4_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member4_phone && <div className="error-text">{errors.member4_phone}</div>}
            <input
              type="tel"
              name="member4_phone"
              value={formData.member4_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member4_email && <div className="error-text">{errors.member4_email}</div>}
            <input
              type="email"
              name="member4_email"
              value={formData.member4_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.member4_prn && <div className="error-text">{errors.member4_prn}</div>}
            <input
              type="text"
              name="member4_prn"
              value={formData.member4_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member4_branch"
              value={formData.member4_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            {/* <h3 className="centered-header">UPI Transaction Details:</h3>

            {errors.upi_transaction_id && <div className="error-text">{errors.upi_transaction_id}</div>}
            <input
              type="text"
              name="upi_transaction_id"
              value={formData.upi_transaction_id}
              onChange={handleChange}
              placeholder="Enter UPI Transaction ID"
            /> */}

            {/* <button type="submit" className="submit-btn" onClick={() => {
              let valid = validate();
              if (valid == true) {
                pay();
              }
              else {

              }
            }}> Save & Proceed to Checkout</button> */}

            <button type="submit" className="submit-btn">Save & Proceed to Checkout</button>


          </form>

          {/* {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Registration Successful!</h2>
                <p>Your team has been successfully registered for the event. Leader will receive an email shortly.</p>
                <button onSubmit={redirectToHome} className="close-btn">Go to Home</button>
              </div>
            </div>
          )} */}
        </div>
      </main>
    </div>
  );
};

export default Event2;
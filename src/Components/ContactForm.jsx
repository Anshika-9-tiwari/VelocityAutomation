
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  //const url = new URL("http://localhost:3000/api/table/tbloAvsE5WVET744Lpb/record");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
   
    try {
      const response = await fetch("http://localhost:3000/api/table/tbloAvsE5WVET744Lpb/record", {
        method: "GET",
        headers: {
          "Authorization": "Bearer teable_accQjLJ2Mu3KI5DZlk2_olPLUKERHZjBnI4trVQbAIkSG68bcnbv2wWoLsJyAWY=",
          "Accept": "application/json"
        },
         // body: JSON.stringify(formData),
      })
      
      // .then(response => response.json())
      // .then(fomrData => console.log(fomrData))
      // .catch(error => console.error('Error:', error));
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', number:'', message: '' }); 
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error sending message: ${errorData.message || response.statusText}`); 
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };
 

  return (
    <>
      <div className='contact-container d-flex gap-5 justify-evenly '>
        <div className=' contact-box' >
            <h2>Address:</h2>
            <p style={{borderBottom:'1px solid black', marginBottom:'35px'}}>Plot No. 23/34 , Faridabad Sector 28 ,  Haryana 121003</p>
            <h2>Phone:</h2>
            <p style={{borderBottom:'1px solid black', marginBottom:'35px'}}>+91-9582793686</p>
            <h2>Office Hours:</h2>
            <p style={{borderBottom:'1px solid black', marginBottom:'35px'}}>Monday - Saturday: 9AM - 6PM</p>        
        </div>

        <div className="contact-form-container ">
        <h2>Get in touch with Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group"> 
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="name">Phone No:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-button"> 
            {isSubmitting ? 'Submitting...' : 'Submit'} 
          </button>
          {submitMessage && <p className="message">{submitMessage}</p>}
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;

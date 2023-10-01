import React, { useRef } from 'react';
import './Contact.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { MdCall } from 'react-icons/md';

function Contact() {
  const form = useRef(); // Create a ref for the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can use email.js here to send the email
    // Example code here
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    // Reset the form after submission if needed
    form.current.reset();
  };

  return (
    <section id='Contact'>
      <h1 className='head'>Get in Touch with me</h1>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <a href='mailto:ayeshafaz90@gmail.com'>send a message</a>
          </article>
          <article className='contact_option'>
            <MdCall className='contact_option-icon' />
            <h4>Call</h4>
            <a href='tel:+94772250929'>Make a Call</a>
          </article>
          <article className='contact_option'>
            <SiWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone=94772250929'>send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full name' required />
          <input type='email' name='email' placeholder='your email' required />
          <textarea name='message' rows='7' placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            send a message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
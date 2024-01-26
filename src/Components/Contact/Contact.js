import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { MdCall } from 'react-icons/md';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef(); // Create a ref for the form element

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rll19on',
        'template_ss219e6',
        e.target,
        'LUUo7dJ0R4xr9ejcN'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          Swal.fire({
            title: "E-mail Successfully sent!",
            text: "I will get back to you shortly",
            icon: "success"
          });
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
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
        <input type='text' name='from_name' placeholder='your full name' required />
        <input type='email' name='email' placeholder='your email' required />
        <textarea name='message' rows='7' placeholder='your message' required></textarea>
        <input type='hidden' name='to_name' value='Ayesha Fazly' />
        <button type='submit' className='send-button'>
          send a message
        </button>
      </form>

      </div>
    </section>
  );
}

export default Contact;
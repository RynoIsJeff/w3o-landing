import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';
import logo from './web3logo-white.png'; // Import the logo

function ContactForm() {
  const [state, handleSubmit] = useForm('xknldybw');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="partnership-form">
      <div className="input-wrapper">
        <label htmlFor="name">Your Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          aria-label="name"
          placeholder="Your name*"
          required
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          id="email"
          name="email"
          aria-label="email"
          placeholder="Email address*"
          required
          className="input-field"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          aria-label="subject"
          placeholder="Subject"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="message">Your Message...*</label>
        <textarea
          id="message"
          name="message"
          aria-label="message"
          placeholder="Your message...*"
          required
          className="input-field"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Web3 Logo" className="logo" />
        <h1>Coming Soon!</h1>
        <p>We are working on something awesome. Stay tuned!</p>
        <h2>Partnership Inquiry</h2>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;

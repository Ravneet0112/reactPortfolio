import React, { useState} from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, set the state for that input value
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // check if form has everything (as per our requirements)
    if (!userName) {
      setErrorMessage('Name is required.');
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
    }
    if (!message) {
      setErrorMessage('Message is required.');
    }

    if (!errorMessage) {
      alert(`Hello ${userName}`);
      // clear form
      setUserName('');
      setEmail('');
      setMessage('');
    }
  };

  const styles = {
    formStyle: {
      display: 'flex',
      flexDirection: 'rows',
      width: '60%',
      alignItems: 'center',
      margin: 'auto',
      background: 'lightgrey',
      color: 'black',
      padding: '10px',
    },
    messageStyle: {
      height: '200px',
      width: '400px',

    },
    btnStyle:{
      margin: '10px 0px',

    }
  };

  return (
    <section >
      <div>
      <h2 style={styles.formStyle}>Contact me</h2>
      </div>
        <div classname="mx-auto" style={styles.formStyle} >
        <form id="contact-form">
          <div class="form-row">
            <h5>Name</h5>
            <div class="form-group mp-6">
          <input value={userName} name="userName" class="form-control" onChange={handleInputChange} type="text" placeholder="Name" /> </div>
          <h5>Email</h5>
          <div class="form-group  mp-6">
          <input value={email} name="email" class="form-control" onChange={handleInputChange} type="email" placeholder="Email address" /></div>
          <h5>Message</h5>
          <div class="form-group  mp-3">
          <input value={message} name="message" class="form-control" style={styles.messageStyle} onChange={handleInputChange} type="text" placeholder="Message" /></div>
          
          <button type="submit" onClick={handleFormSubmit} class="btn btn-primary" style={styles.btnStyle}>Submit</button>
          </div>

          </form>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div> )}
        
        </section>
        );
}


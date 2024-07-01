import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container-2">
        <h2>Let's Create Something Amazing</h2>
        <p>Ready to captivate your audience? Contact us today and let's bring your vision to life.</p>
      </div>
      <div className="contact-us" id="contact-us">
        <div className="container-3">
          <h2>Get in touch</h2>
          <p>At Bridge, we transform ideas into compelling stories. Specializing in advertising Post-production, video editing, and animation services.</p>
          <h4><i className="ri-mail-fill"></i>brijesh@bridgecommunication.in</h4>
          <h4><i className="ri-phone-fill"></i>+91 868446565</h4>
        </div>
        <form className="form" action="" method="">
          <div className="form__item">
            <label for="givennames" className="form__label">Your Name</label>
            <input type="text" className="form__input" name="givennames" id="givennames" placeholder="Enter your name"/>
            <span className="form__error">A sample error message</span>
          </div>
          <div className="form__item">
            <label for="email" className="form__label">Your Email</label>
            <input type="email" className="form__input " name="email" id="email" min="1" max="5" placeholder="Enter your E-mail"/>
            <span className="form__error">A sample error message</span>
          </div>
          <div className="form__item">
            <label for="expirydate" className="form__label">Phone Number</label>
            <input type="number" className="form__input " name="expirydate" id="expirydate" placeholder="Enter Your phone number"/>
            <span className="form__error">A sample error message</span>
          </div>
          <div className="form__item">
            <label for="message" className="form__label">Bio</label>
            <textarea maxlength="500" className="form__input" name="message" id="message" placeholder="Enter your project in detail"></textarea>
            <span className="form__error">A sample error message</span>
          </div>
          <div className="form__item">
            <button className="form__btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer

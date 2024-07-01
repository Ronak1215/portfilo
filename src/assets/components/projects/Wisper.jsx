import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Wisper = () => {
  useEffect(() => {
    // $(document).ready(function () {
    window.scrollTo(0, 0);
    // });
    // console.log("window scrolled to top");
  }, []);
  return (
    <div>
      <Navigation/>
        <div className='projectcomponent'>
          <Link to="/">
            <div className='back-button'>
                <button><i class="ri-arrow-left-line"></i></button>
            </div>
          </Link>
          <h2>Whisper</h2>
          <p>Our collaboration with Whisper India project aimed to refresh their social media presence. The redesigned campaign features vibrant aesthetics, relatable content, and an empowering message. Through multimedia elements and interactive features, we created a more engaging online space, fostering inclusivity and open conversations around feminine hygiene. The revamped social media strategy reflects Whisper India's commitment to celebrating femininity, empowering women, and breaking taboos surrounding menstrual health.</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.1ae93ab9.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.ff4e4e13.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.822c71b2.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Wisper

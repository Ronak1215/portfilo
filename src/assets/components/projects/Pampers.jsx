import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Pampers = () => {
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
          <h2>Pampers</h2>
          <p>Our design team spun creativity into reality for Pampers India, seamlessly blending charm with functionality for social media and mainline creatives.

          From visually stunning graphics to captivating print ads, we ensured Pampers stood out in every frame. It's not just design; it's a visual love letter to parenthood! 💛👶 #PampersPerfection #DesignExcellence</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.4395ee96.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.634d07f2.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.0d463bcb.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Pampers

import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Tvs = () => {
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
          <h2>Ronin</h2>
          <p>At Bridge, we transform ideas into compelling stories. Specializing in advertising solutions, we offer top-notch production, post-production, video editing, and animation services.</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.e6dbd818.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.72b89799.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.5976b268.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Tvs

import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Nycil = () => {
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
          <h2>Nycil</h2>
          <p>Our team revamped NYCIL India's social media presence with compelling, brand-centric designs. Each visual was crafted for impact, resonating with the audience and setting the stage for increased engagement and stronger connections. The result? A transformed digital identity that authentically reflects NYCIL's values.</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3535c4bf.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.974e1edf.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.c537d38d.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Nycil

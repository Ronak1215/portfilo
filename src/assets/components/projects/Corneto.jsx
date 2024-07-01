import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Corneto = () => {
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
          <h2>Cornetto</h2>
          <p>Embark on a delightful journey with Cornetto Moments in India, a captivating social media project that aims to celebrate the joy, connections, and sweet moments that Cornetto brings to the lives of ice cream enthusiasts across the country. Our project revolves around crafting engaging and visually appealing content that showcases the unique and heartwarming experiences people share while indulging in Cornetto.

          From capturing the sheer bliss of savoring a delicious Cornetto under the vibrant Indian sun to highlighting the creative ways individuals personalize their Cornetto moments, our social media initiative is a tribute to the diverse and colorful tapestry of Indian culture. Through a mix of captivating visuals, relatable stories, and interactive content, we invite Cornetto lovers to join the conversation, share their own #CornettoMoments, and become part of a community that cherishes life's sweetest pleasures.</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a1e75e23.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.d7e9e9c1.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.80d96e57.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Corneto

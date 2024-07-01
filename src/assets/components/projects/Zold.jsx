import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Zold = () => {
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
          <h2>Zold</h2>
          <p>We recently embarked on a captivating branding journey for an innovative jewelry brand tailored for Gen Z consumers who value both style and investment. The project began with the creation of the brand name: ZOLD. This distinct and memorable name perfectly captures the essence of a youthful, luxurious brand that combines the appeal of fine jewelry with the smart investment mindset of the younger generation.

Our strategic approach was guided by the desire to establish a brand that seamlessly blends the cool, modern aesthetic of Gen Z with the timeless allure of luxury jewelry. We curated a sophisticated and edgy visual identity for ZOLD, featuring sleek designs and an elegant color palette of muted metallics and rich jewel tones.

The logo we designed is a modern interpretation of classic elegance, with clean lines and subtle detailing that hints at the brand's opulent offerings. This logo serves as the brand's signature mark, symbolizing ZOLD's commitment to quality and style.

Throughout the branding process, we paid careful attention to every detail, from the luxurious packaging that elevates the unboxing experience to the cohesive visual assets that enhance ZOLD's online presence. The brand's look and feel exude confidence and exclusivity, appealing to a generation that seeks to make a statement with their choices.

The ZOLD branding project was a thrilling opportunity to merge innovation and tradition, creating a captivating brand that resonates with Gen Z's desire for luxury and investment. The final result is a brand poised to make waves in the jewelry industry and leave a lasting impression on its discerning audience.</p>

          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b639f50d.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.798d6e6f.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.75768111.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Zold

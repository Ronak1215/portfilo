import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Tresemme = () => {
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
          <h2>Tresemme</h2>
          <p>Professional Journey at Tresemme: Crafting Social Media Brilliance

          My voyage into the world of design reached new heights as I embarked on a thrilling project with Tresemme, an iconic name in the beauty industry. My role was to infuse life into their digital presence through captivating social media design.

          At Tresemme, I was entrusted with the task of translating brand essence into visual storytelling. I breathed life into static images, transforming them into dynamic narratives that resonated with the brand's core values and audience. With each pixel, I aimed to weave a tapestry of beauty, confidence, and style, perfectly encapsulating Tresemme's ethos.

          Collaborating with a team of creative maestros, I embarked on a journey of innovation. Together, we conceptualized and executed captivating campaigns that left a mark on the digital landscape. We were the architects of intrigue, consistently engaging our audience and fostering a loyal following.

          My time at Tresemme was an enriching experience, not only nurturing my design prowess but also providing me with profound insights into the ever-evolving beauty and personal care industry. I was proud to contribute my skills to Tresemme's ongoing success story, and I eagerly anticipate the opportunity to apply these newfound skills and insights in my future endeavors.

          Tresemme, with its commitment to excellence, has been a milestone in my professional journey. It has been a privilege to be part of a brand that champions creativity and style, and I'm excited to carry the knowledge and expertise gained here into the next chapter of my career.</p>

          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.316967c4.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.b9360dd6.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.27e7ece2.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Tresemme

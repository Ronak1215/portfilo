import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Dove = () => {
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
          <h2>Dove</h2>
          <p>I had the privilege of working on an exciting project for Dove India, where I was responsible for social media design. This experience was not only professionally rewarding but also personally fulfilling, as Dove is a brand known for its commitment to promoting self-confidence and positive body image.During my time on this project, I had the opportunity to collaborate with a talented team and contribute to the visual identity of Dove India's social media presence. I worked on creating visually appealing and engaging content that resonated with Dove's core values and connected with the target audience.

          One of the most rewarding aspects of this project was witnessing the positive impact our designs had on the brand's online community. Dove India's social media platforms became a hub for meaningful conversations and empowerment, and I'm proud to have played a role in fostering such a supportive digital environment.

          Overall, my experience working on the Dove India social media design project was a valuable chapter in my career. It allowed me to combine my creative skills with a brand that stands for positivity and inclusivity, making it a truly enriching and memorable experie</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.dc1dfcc0.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.579f0c3d.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.c713a32d.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Dove

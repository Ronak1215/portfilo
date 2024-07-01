import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Linenclub = () => {
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
          <h2>Linen Club</h2>
          <p>I had the privilege of working on the Linen Club Design project, a dynamic venture that blended creativity and craftsmanship to revolutionise the linen industry. Our team aimed to redefine the way linen products were perceived and utilised by infusing contemporary design sensibilities into this timeless fabric.

          Throughout the project, we collaborated with talented designers, artisans, and textile experts to craft a diverse range of linen products that catered to modern tastes while honouring the fabric's rich heritage. From fashion-forward clothing collections to innovative home decor items, Linen Club Design sought to inspire a new generation to embrace the elegance and versatility of linen.

          My role involved contributing to the design process, facilitating cross-functional communication, and ensuring the project's creative vision aligned with market demands. It was an exciting journey of reimagining an age-old material, bringing it to life in fresh and exciting ways, and ultimately, redefining the future of linen.</p>
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8fb6c579.png&w=3840&q=100" alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.31f844ee.png&w=3840&q=100 "alt="" srcset="" />
          <img src="https://bridge-comm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.94cd15e4.png&w=3840&q=100" alt="" srcset="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Linenclub

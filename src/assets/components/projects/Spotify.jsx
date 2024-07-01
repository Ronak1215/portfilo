import React, { useEffect } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
Link


const Spotify = () => {
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
          <h2>Spotify</h2>
          <video width="600" controls autoPlay loop muted>
            <source src="https://bridge-comm.vercel.app/images/projects/spotify/spotify.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Footer/>
    </div>
  )
}

export default Spotify

import React from 'react'
import './style.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image -mb-10' src='https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg' alt=' ' />

            <div className="home-content">
            <div className='home_row'>
                <Product />
                <Product />
            </div>

            <div className='home_row'>
                {/*Product*/}
                {/*Product*/}
                {/*Product*/}
            </div>

            <div className='home_row'>
                {/*Product*/}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home;
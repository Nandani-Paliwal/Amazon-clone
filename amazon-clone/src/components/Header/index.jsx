import React from 'react';
import './style.css'

function Header() {
  return (
    < div className='header'>
      <img className='header_logo' src='https://cdn.discordapp.com/attachments/1012814107994509353/1040922413455654952/unknown.png' alt='amazon_logo' 
      />

      <div className='header_search'>
        <input className="header_searchInput" type="text" />
        {/* Logo */}
      </div>
      
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>

        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
          
        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
          
        </div>
      </div>
      
    </div>

  )
}

export default Header

import React from 'react';
import './style.css'
import { IoBasketOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    < div className='header'>
      <img className='header_logo' src='https://cdn.discordapp.com/attachments/1012814107994509353/1040922413455654952/unknown.png' alt='amazon_logo' 
      />

      <div className='header_search'>
        <input className="header_searchInput" type="text" />
        <IoSearch className='header_searchIcon' />
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

      <div className='header_optionBasket'>
        <IoBasketOutline />
        <span className='header_optionLineTwo header_basketCount'>0</span>
      </div>
      
    </div>

  )
}

export default Header

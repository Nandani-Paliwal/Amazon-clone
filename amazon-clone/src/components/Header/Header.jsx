import React from "react";
import { IoBasketOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <div className="header h-16 flex items-center sticky inset-0 z-100 bg-headerbg">
      <img
        className="header_logo w-24 object-contain my-0 mx-3.5 mt-5"
        src="https://cdn.discordapp.com/attachments/1012814107994509353/1040922413455654952/unknown.png"
        alt="amazon_logo"
      />

      <div className="header_search flex flex-1 items-center rounded-3xl w-6">
        <input
          className="header_searchInput p-3 h-6 w-full border-none"
          type="text"
        />
        <IoSearch className="header_searchIcon p-1 w-6 h-7 bg-searchicon rounded-tl-none rounded-br" />
      </div>

      <div className="header_nav flex justify-evenly ">
        <div className="header_option flex flex-col mx-3 my-3 text-white">
          <span className="header_optionLineOne text-xs">Hello Guest</span>
          <span className="header_optionLineTwo text-sm font-extrabold">
            Sign In
          </span>
        </div>

        <div className="header_option flex flex-col mx-3 my-3 text-white">
          <span className="header_optionLineOne text-xs">Returns</span>
          <span className="header_optionLineTwo text-sm font-extrabold">& Orders</span>
        </div>

        <div className="header_option flex flex-col mx-3 my-3 text-white">
          <span className="header_optionLineOne text-xs">Your</span>
          <span className="header_optionLineTwo text-sm font-extrabold">Prime</span>
        </div>
      </div>

      <div className="header_optionBasket flex items-center text-white">
        <IoBasketOutline />
        <span className="header_optionLineTwo header_basketCount mx-3 my-3">
          0
        </span>
      </div>
    </div>
  );
}

export default Header;

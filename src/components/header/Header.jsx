import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderCenter from "./HeaderCenter";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <div className="fixed w-full z-[999] bg-[#f8f7f3]">
      <div className="border-b">
        <HeaderTop />
      </div>
      <div className="border-b">
        <HeaderCenter />
      </div>
      <div className="border-b">
        <HeaderBottom />
      </div>
    </div>
    // </div>
  );
};

export default Header;

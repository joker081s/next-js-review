import Image from "next/image";
import React from "react";
import logo from "@/app/(assets)/logoGoogle.png";
const Logo = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="logo"
        className="w-60 h-60 object-cover rounded-full shadow-md "
      />
    </div>
  );
};
export default Logo;

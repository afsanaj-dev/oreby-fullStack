import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import ColorCategory from "./ColorCategory";

const ShopbyColor = () => {
  let [ShopbyColor, setShopbyColor] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShopbyColor(!ShopbyColor);
        }}
        className="font-bold text-xl font-dmSans text-black mb-6 mt-10 flex justify-between items-center w-full"
      >
        Shop by Color
        {ShopbyColor ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </button>
      {ShopbyColor && (
        <div>
          <ColorCategory colorname="color 1" colorcode="#FF0000"/>
          <ColorCategory colorname="color 2" colorcode="#0000FF"/>
          <ColorCategory colorname="color 3" colorcode="#FFFF00"/>
          <ColorCategory colorname="color 4" colorcode="#008000"/>
        </div>  

      )}
    </div>
  );
};

export default ShopbyColor;

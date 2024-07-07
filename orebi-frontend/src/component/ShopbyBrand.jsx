import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import BrandCategory from "./BrandCategory";

const ShopbyBrand = () => {
    let [ShopbyBrand, setShopbyBrand] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShopbyBrand(!ShopbyBrand);
        }}
        className="font-bold text-xl font-dmSans text-black mb-6 mt-10 flex justify-between items-center w-full"
      >
        Shop by Brand
        {ShopbyBrand ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </button>
      {ShopbyBrand && 
        (<div>
          <BrandCategory brandname="Brand 1"/>
          <BrandCategory brandname="Brand 2" />
          <BrandCategory brandname="Brand 3" />
          <BrandCategory brandname="Brand 4"/>
        </div>)
      }
    </div>
  );
};

export default ShopbyBrand;

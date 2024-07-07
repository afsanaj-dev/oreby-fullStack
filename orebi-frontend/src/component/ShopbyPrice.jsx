import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import PriceCategory from "./PriceCategory";

const ShopbyPrice = () => {
  let [ShopbyPrice, setShopbyPrice] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShopbyPrice(!ShopbyPrice);
        }}
        className="font-bold text-xl font-dmSans text-black mb-6 mt-10 flex justify-between items-center w-full"
      >
        Shop by Price
        {ShopbyPrice ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </button>
      {ShopbyPrice && (
        <div>
          <PriceCategory pricerange="$0.00 - $9.99" />
          <PriceCategory pricerange="$10.00 - $19.99" />
          <PriceCategory pricerange="$20.00 - $29.99" />
          <PriceCategory pricerange="$30.00 - $39.99" />
        </div>
      )}
    </div>
  );
};

export default ShopbyPrice;

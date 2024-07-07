import React from "react";
import Images from "./Images";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";

const Product = ({
  pimage,
  pitem,
  ProductPrice,
  ProductColor,
  isNew,
  className,
  pinfo,
  ProductStock
}) => {
  return (
    <div className="w-25% sm:w-[290px] md:w-[300px] lg:w-25%">
      <div className="relative group">
        <div className="w-full">
          <Images className="object-cover" src={pimage} alt="product" />
        </div>
        {isNew && (
          <h4 className="font-bold text-sm text-white py-2 px-6 bg-black inline-block absolute top-5 left-5">
            New
          </h4>
        )}
        {pinfo && (
          <h4 className="font-bold text-sm text-white py-2 px-4 bg-black inline-block absolute top-5 left-5 rounded">
            Stock: {ProductStock}
          </h4>
        )}
        <div className="bg-white w-full absolute bottom-0 right-0 py-4 pr-5 hidden group-hover:block">
          <Flex className="flex-col items-end gap-5">
            <Flex className="gap-4 text-lightAsh text-base font-normal hover:text-black hover:font-bold duration-300">
              <h4>Add to Wish List</h4>
              <span className="mt-1">
                <FaHeart />
              </span>
            </Flex>
            <Flex className="gap-4 text-lightAsh text-base font-normal hover:text-black hover:font-bold duration-300">
              <h4>Compare</h4>
              <span className="mt-1">
                <GrPowerCycle />
              </span>
            </Flex>
            <Flex className="gap-4 text-lightAsh text-base font-normal hover:text-black hover:font-bold duration-300">
              <h4>Add to Cart</h4>
              <span className="mt-1">
                <FaShoppingCart />
              </span>
            </Flex>
          </Flex>
        </div>
      </div>
      <Flex className="justify-between mt-6">
        <h3 className="text-black font-bold text-xl">{pitem}</h3>
        <span className="text-base font-normal text-lightAsh leading-[30px] mr-1">
          {ProductPrice}
        </span>
      </Flex>
      <h5 className="text-base font-normal text-lightAsh leading-[30px] mt-3">
        {ProductColor}
      </h5>
    </div>
  );
};

export default Product;

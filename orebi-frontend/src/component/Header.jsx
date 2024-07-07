import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import List from "./List";
import ListItem from "./ListItem";
import Input from "./Input";
import { IoSearchOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GoTriangleUp } from "react-icons/go";

const Header = () => {
  let [categoryModal, setCategoryModal] = useState(false);
  let [userModal, setUserModal] = useState(false);
  let [cartModal, setCartModal] = useState(false);

  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  // let handleCategoryModal=()=>{
  //     setCategoryModal(!categoryModal)
  // }

  // -------------------NOTE----------------
  // It's not a good practice to take reference for multiple times. we can use the same reference for several times
  // --------------------------------
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoryRef.current.contains(e.target)) {
        setCategoryModal(!categoryModal);
        console.log(e.target);
      } else {
        setCategoryModal(false);
      }
      if (userRef.current.contains(e.target)) {
        setUserModal(!userModal);
      } else {
        setUserModal(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartModal(true);
      } else {
        setCartModal(false);
      }
    });
    //if the dependency is empty in useEffect it will render only one time,but here we can use it for several times
    // because we can click the categoryModal it turns true from false or flase from true
    //  and each time for the dependency categoryModal the useEffect will render and make change to the 
    // current state of the categoryModal
  }, [categoryModal]);

  return (
    <header className="bg-headerBg py-6">
      <Container>
        <Flex className="justify-between">
          <Flex catref={categoryRef} className="items-center gap-2 relative">
            <RiBarChartHorizontalFill />
            <p className="hidden md:block font-normal text-sm text-black">
              Shop by Category
            </p>
            <div>
              {categoryModal && (
                <List className="absolute top-10 left-0 bg-black w-[260px] z-50">
                  <ListItem className="border-b border-[#2D2D2D]">
                    <Link className="text-sm font-normal text-white pl-5 py-3 inline-block hover:font-bold hover:ml-7 duration-200">
                      Accesories
                    </Link>
                  </ListItem>
                  <ListItem className=" border-b border-[#2D2D2D]">
                    <Link className="text-sm font-normal text-white pl-5 py-3 inline-block hover:font-bold hover:ml-7 duration-200">
                      Furniture
                    </Link>
                  </ListItem>
                  <ListItem className=" border-b border-[#2D2D2D]">
                    <Link className="text-sm font-normal text-white pl-5 py-3 inline-block hover:font-bold hover:ml-7 duration-200">
                      Electronics
                    </Link>
                  </ListItem>
                  <ListItem className=" border-b border-[#2D2D2D]">
                    <Link className="text-sm font-normal text-white pl-5 py-3 inline-block hover:font-bold hover:ml-7 duration-200">
                      Clothes
                    </Link>
                  </ListItem>
                  <ListItem className=" border-b border-[#2D2D2D]">
                    <Link className="text-sm font-normal text-white pl-5 py-3 inline-block hover:font-bold hover:ml-7 duration-200">
                      Bags
                    </Link>
                  </ListItem>
                  <ListItem className=" border-b border-[#2D2D2D]">
                    <Link className="text-sm font-normal text-white pl-5 py-3 inline-block hover:font-bold hover:ml-7 duration-200">
                      Home appliances
                    </Link>
                  </ListItem>
                </List>
              )}
            </div>
          </Flex>
          <div className="relative w-[600px]">
            <Input
              className="w-full bg-white h-[50px] rounded-none placeholder:text-xs lg:placeholder:text-base placeholder:pl-3 lg:placeholder:pl-5"
              placeholder="Search Products"
            ></Input>
            <IoSearchOutline className="absolute top-4 right-4 text-xl" />
          </div>
          <Flex className="items-center gap-5 lg:gap-8">
            <Flex catref={userRef} className="relative  pl-2 lg:pl-0">
              <div>
                <IoPerson />
                {userModal && (
                  <Flex className="w-[200px] flex-col shadow-lg absolute top-6 right-2 z-50">
                    <Link className="w-full py-4 text-center hover:font-bold text-black hover:text-white bg-white hover:bg-black">
                      My Account
                    </Link>
                    <Link className="w-full py-4 text-center hover:font-bold text-black hover:text-white bg-white hover:bg-black">
                      Log Out
                    </Link>
                  </Flex>
                )}
              </div>
              <div>
                {userModal ? (
                  <FaSortDown className="mt-[-3px]" />
                ) : (
                  <GoTriangleUp className=" text-lg"/>
                )}
              </div>
            </Flex>
            <div ref={cartRef} className="relative">
              <FaShoppingCart />
              {cartModal && (
                <div className="w-[300px] absolute top-7 right-0 z-50">
                  <Flex className=" justify-between items-center py-4 shadow-sm  bg-headerBg px-3">
                    <div>
                      <img src="images/cartpop.png" alt="cartpop" />
                    </div>
                    <div>
                      <h2 className="text-sm text-black font-bold">
                        Black Smart Watch
                      </h2>
                      <h3 className="text-sm text-black font-bold">$44.00</h3>
                    </div>
                    <div className="text-xl">
                      <IoClose />
                    </div>
                  </Flex>
                  <div className="py-4 bg-white shadow-sm px-4">
                    <h2 className="text-sm text-black font-bold">
                      <span className="text-lightAsh">Subtotal:</span>
                      $44.00
                    </h2>
                    <Flex className="gap-5 mt-4 items-center justify-center">
                      <Link className="px-6 py-4 border-solid border-black border-[1px] bg-white hover:bg-black text-black hover:text-white text-sm font-bold">
                        View Cart
                      </Link>
                      <Link className="px-6 py-4 border-solid border-black border-[1px] bg-white hover:bg-black text-black hover:text-white text-sm font-bold">
                        Checkout
                      </Link>
                    </Flex>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

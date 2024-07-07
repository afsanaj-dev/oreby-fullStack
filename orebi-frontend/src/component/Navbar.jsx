import React, { useEffect, useState } from "react";
import Images from "./Images";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  let [menu, setMenu] = useState(true);
  let handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function navbarMenu(e) {
      console.log(window.innerWidth);
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navbarMenu();
    window.addEventListener("resize", navbarMenu);
  }, []);

  return (
    <nav className="bg-white py-8 relative z-50">
      <Container>
        <Flex className="items-center justify-between">
          <Images src="images/logo.png" alt="logo" />
          {menu ? (
            <IoMdCloseCircleOutline
              onClick={handleMenu}
              className="lg:hidden  absolute top-8 right-5"
            />
          ) : (
            <FaBars
              onClick={handleMenu}
              className="lg:hidden  absolute top-8 right-5"
            />
          )}

          {menu && (
            // we can omit the above {menu &&( )} and use the below style for slowly popping the nav menu in sm device
            // -----------------------------------------------------------------------------------------
            // <List
            //   className={`${
            //     menu
            //       ? "w-full lg:w-auto lg:flex gap-10 lg:static absolute top-14 left-0 bg-lightAsh lg:bg-transparent pl-6 py-2 mt-1 duration-500"
            //       : "w-full lg:w-auto lg:flex gap-10 lg:static absolute top-14 duration-500 left-[-100%] bg-lightAsh lg:bg-transparent pl-6 py-2 mt-1"
            //   }`}
            // >
              <List className="w-full lg:m-auto lg:w-auto lg:flex gap-10 lg:static absolute top-14 left-0 bg-lightAsh lg:bg-transparent pl-6 py-2 mt-1">
              <ListItem>
                <Link to={"/"} className="text-white text-sm lg:text-black font-normal hover:font-bold hover:text-black duration-100">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link to={"/shop"} className="text-white text-sm lg:text-ash  font-normal hover:font-bold hover:text-black duration-100 ">
                  Shop
                </Link>
              </ListItem>
              <ListItem>
                <Link className="text-white text-sm lg:text-ash font-normal hover:font-bold hover:text-black duration-100">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link className="text-sm text-white  lg:text-ash font-normal hover:font-bold hover:text-black duration-100">
                  Journal
                </Link>
              </ListItem>
              <ListItem>
                <Link className="text-sm text-white  lg:text-ash font-normal hover:font-bold hover:text-black duration-100">
                  Contacts
                </Link>
              </ListItem>
            </List>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;

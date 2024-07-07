import React from 'react'
import Flex from './Flex'
import { MdArrowForwardIos } from "react-icons/md";
import Container from './Container';
// here we use title instead of {window.location.pathname.split("/")[1]}
const Breadcrumb = ({title}) => {
  return (
    <Container>
        {/* ------------Below code we want to remove the "/" symbol. first style shows the split method */}
        {/* <h3 className='font-bold text-5xl text-black'>{window.location.pathname.split("/")[1]}</h3> */}
        {/* -------------------------------------------- */}
        {/* -------------second we use the slice method for removing "/" from pathname, index 1 character capitalized and then slice the rest character from index 2 to last 
        'window.location.pathname.charAt(1).toUpperCase()+window.location.pathname.slice(2)'*/}
        {/* ============================ */}
        {/* <h3 className='font-bold text-5xl text-black mt-24 capitalize'>{window.location.pathname.split("/")[1]}</h3>
        <Flex className=" my-4"> */}
        <h3 className='font-bold text-5xl text-black mt-20 capitalize'>{title}</h3>
        <Flex className=" my-4">
            <h4 className='text-xs text-lightAsh font-normal'>Home </h4>
            <h4 className='text-xs text-lightAsh mt-0.5 font-normal'><MdArrowForwardIos /></h4>
            {/*  here we can use title instead of {window.location.pathname.split("/")[1]} */}
            <h4 className='text-xs text-lightAsh font-normal capitalize'>{window.location.pathname.split("/")[1]}</h4>
        </Flex>
    </Container>
  )
}

export default Breadcrumb
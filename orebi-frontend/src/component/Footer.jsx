import React from "react";
import Section from "./Section";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Title from "./Title";
import Images from "./Images";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Section className="bg-headerBg py-10 mt-24">
      <Container>
        <Flex className="justify-between pr-40 flex-wrap md:flex-nowrap">
          <List className="pb-16">
            <Title
              className="mb-4 text-base leading-6 uppercase"
              heading="Menu"
            />
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Home</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Shop</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>About</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Contact</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Journal</Link>
            </ListItem>
          </List>
          <List className="pb-16">
            <Title
              className="mb-4 text-base leading-6 uppercase"
              heading="Shop"
            />
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Category1</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Category2</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Category3</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Category4</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Category15</Link>
            </ListItem>
          </List>
          <List className="pb-16">
            <Title
              className="mb-4 text-base leading-6 uppercase"
              heading="help"
            />
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Privacy Policy</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Terms & Conditions</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Special E-Shop</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Shipping</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>Secure Payments</Link>
            </ListItem>
          </List>
          <List className="pb-16">
            <ListItem className="text-black text-base font-bold leading-6 mb-[6px]">
              <Link>(052) 611-5711 <br/> company@domain.com</Link>
            </ListItem>
            <ListItem className="text-[#6D6D6D] text-sm font-normal leading-5 mb-[6px]">
              <Link>575 Crescent Ave. Quakertown, PA 18951</Link>
            </ListItem>
          </List>
          <List className="pb-16">
            <Images src="images/FooterLogo.png" alt="footer logo"/>
          </List>
        </Flex>
        <Flex className="justify-between">
            <Flex className="gap-4">
                <Link><FaFacebookF /></Link>
                <Link><FaLinkedinIn /></Link>
                <Link><FaInstagram /></Link>
            </Flex>
            <p className="text-[#6D6D6D] text-sm font-normal leading-5">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;

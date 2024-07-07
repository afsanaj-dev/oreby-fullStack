import React, { useEffect, useState } from "react";
import Breadcrumb from "../component/Breadcrumb";
import Flex from "../component/Flex";
import Container from "../component/Container";
import Section from "../component/Section";
import ShopbyCategory from "../component/ShopbyCategory";
import ShopbyColor from "../component/ShopbyColor";
import ShopbyBrand from "../component/ShopbyBrand";
import ShopbyPrice from "../component/ShopbyPrice";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import Product from "../component/Product";
import axios from "axios";
import Paginate from "../component/Paginate";
const Shop = ({ title }) => {
  let [products, setProducts] = useState([]);
  let [perPageProduct, setPerPageProduct]= useState(6);
  useEffect(() => {
    function getProducts() {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
      });
    }
    getProducts();
  }, []);
  console.log(products);
  let handlePerPageProduct=(e)=>{
   setPerPageProduct(e.target.value)
  }
  console.log(perPageProduct);
  return (
    <Section>
      <Container>
        <Breadcrumb title={title} />
        <Flex className="gap-10 pt-28">
          <div className=" w-[20%] ">
            <ShopbyCategory />
            <ShopbyColor />
            <ShopbyBrand />
            <ShopbyPrice />
          </div>
          <div className=" w-[80%]">
            <Flex className="justify-between mb-10">
              <Flex className="gap-5">
                <RiLayoutGridFill className="w-9 h-9 bg-black text-sm  p-2 text-white rounded-sm " />
                <FaList className="w-9 h-9 bg-black text-sm  p-2 text-white rounded-sm " />
              </Flex>
              <Flex className="gap-4">
                <Flex className="gap-2 items-center">
                  <label className="font-normal text-lightAsh text-lg font-dmSans">
                    Short by:
                  </label>
                  <select className="font-normal text-lightAsh text-base font-dmSans w-[239px] rounded-sm border-[1px] border-[#F0F0F0] py-1">
                    <option className="py-3" value="">
                      Featured
                    </option>
                    <option value="">Featured</option>
                    <option value="">Featured</option>
                    <option value="">Featured</option>
                  </select>
                </Flex>
                <Flex className="gap-2 items-center">
                  <label className="font-normal text-lightAsh text-lg font-dmSans">
                    Show:
                  </label>
                  <select onChange={handlePerPageProduct} className="font-normal text-lightAsh text-base font-dmSans w-[199px] rounded-sm border-[1px] border-[#F0F0F0] py-1">
                    <option className="py-3" value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                  </select>
                </Flex>
              </Flex>
            </Flex>
            {/* ==================Product Start===================== */}
            <Paginate itemsPerPage={perPageProduct} products={products}/>
            {/*--------------------------the below code can be used whithout pagination---------------- */}
            {/* <Flex className="flex-wrap mt-14 justify-between">
              {products.map((pItem) => (
                <Product
                  pinfo={pItem}
                  pimage={pItem.thumbnail}
                  pitem={pItem.title}
                  ProductPrice={pItem.price}
                  ProductStock={pItem.stock}
                />
              ))}
            </Flex> */}
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Shop;

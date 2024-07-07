import React, { useState } from "react";
import List from "./List";
import Category from "./Category";

const ShopbyCategory = () => {
  let [SubCategoryShow, setSubCategoryShow] = useState(false);
  return (
    <div>
      <h2 className="font-bold text-xl font-dmSans text-black mb-6">
        Shop by Category
      </h2>
      <List>
        {/* <ListItem
          onClick={() => setSubCategoryShow(!SubCategoryShow)}
          className="text-base font-normal text-lightAsh"
        >
          <Flex className="justify-between leading-8 items-center border-b border-[#F0F0F0] p-3">
            Category 1{SubCategoryShow ? : <FiPlus />}
          </Flex>
          {SubCategoryShow && (
            <SubCategory/>
          )}
        </ListItem> */}
        <Category categoryName="Category 1" subCategory={true}/>
        {/* The same process for category showed be applied to subcategory as we aren't sure about the number of subcategory items. it's a HW will complete after completing due work */}
        <Category categoryName="Category 2" subCategory={false}/>
        <Category categoryName="Category 3" subCategory={false}/>
        <Category categoryName="Category 4" subCategory={true}/>
      </List>
    </div>
  );
};

export default ShopbyCategory;

import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const SubCategory = () => {
  return (
    <div>
      <List>
        <ListItem className="text-base font-normal text-lightAsh border-b border-[#F0F0F0] p-3 ml-5">
          SubCategory One
        </ListItem>
        <ListItem className="text-base font-normal text-lightAsh border-b border-[#F0F0F0] p-3 ml-5">
          SubCategory One
        </ListItem>
        <ListItem className="text-base font-normal text-lightAsh border-b border-[#F0F0F0] p-3 ml-5">
          SubCategory One
        </ListItem>
      </List>
    </div>
  );
};

export default SubCategory;

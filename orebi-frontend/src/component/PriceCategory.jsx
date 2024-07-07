import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const PriceCategory = ({pricerange}) => {
  return (
    <div>
      <List>
        <ListItem className="text-base font-normal text-lightAsh border-b border-[#F0F0F0] p-3 flex items-center gap-5">
          {pricerange}
        </ListItem>
      </List>
    </div>
  )
}

export default PriceCategory
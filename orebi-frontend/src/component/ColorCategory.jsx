import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const ColorCategory = ({ colorcode, colorname }) => {
  return (
    <div>
      <List>
        <ListItem >
          <Link className="text-base font-normal text-lightAsh border-b border-[#F0F0F0] p-3 flex items-center gap-5">
            <div
              style={{ background: `${colorcode}` }}
              className="w-3 h-3 rounded-full"
            ></div>{" "}
            {colorname}
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default ColorCategory;

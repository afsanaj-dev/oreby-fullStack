import React, { useState } from 'react'
import List from './List'
import ListItem from './ListItem'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import SubCategory from './SubCategory';

const Category = ({categoryName,subCategory}) => {
    let [SubCategoryShow, setSubCategoryShow] = useState(false);
  return (
    <div>
        <List>
        <ListItem onClick={() => setSubCategoryShow(!SubCategoryShow)} className="text-base font-normal text-lightAsh border-b border-[#F0F0F0] p-3 leading-8 relative">
            {categoryName}
            {subCategory && 
            (SubCategoryShow ?
                <FiMinus className='absolute top-6 right-0'/>
                :
                <FiPlus className='absolute top-6 right-0'/>               
            )}
            {SubCategoryShow &&(
             (subCategory && (<SubCategory/>))
            )}
        </ListItem>
        </List>
    </div>
  )
}

export default Category
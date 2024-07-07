import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Flex from './Flex';

const Paginate = ({itemsPerPage,products }) => {
    const items = products;

    function Items({ currentItems }) {
      return (
        <Flex className="flex-wrap justify-between">
          {currentItems &&
            currentItems.map((item) => (
              <div>
                <Product pinfo={item}
                  pimage={item.thumbnail}
                  pitem={item.title}
                  ProductPrice={item.price}
                  ProductStock={item.stock}/>
              </div>
            ))}
        </Flex>
      );
    }
    // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
    <Items currentItems={currentItems} />
    <div className='flex justify-between mt-10'>
    <ReactPaginate
      breakLabel="..."
      nextLabel={null}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={null}
      renderOnZeroPageCount={null}
      containerClassName="flex gap-7"
      pageClassName="px-3 py-1 border border-lightAsh"
      activeClassName="bg-black text-white"
    />
    <p>Products from {itemOffset+1} to {endOffset} from {products.length}</p>
    </div>
  </>
  )
}

export default Paginate
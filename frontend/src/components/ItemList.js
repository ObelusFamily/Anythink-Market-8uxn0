import React, { useState } from "react";
import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";

const ItemList = (props) => {
  const { searchTitle, items, filteredItems } = props;

  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }
  return (
    <div className="container py-2">
      <div className="row">
        {searchTitle && searchTitle.length > 2 && filteredItems ? (
          filteredItems.map((item) => (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          ))
        ) : (
          <>
            {items.map((item) => {
              return (
                <div className="col-sm-4 pb-2" key={item.slug}>
                  <div>
                    <ItemPreview item={item} />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;

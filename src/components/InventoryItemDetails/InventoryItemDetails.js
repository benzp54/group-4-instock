import React from "react";

export default function InventoryItemDetails(props) {
  const itemDetails = props.info;

  return (
    <section className="inventory-item-detail-wrapper">
      <h2 className="itemName">{itemDetails.itemName}</h2>
      <br />
      <p className="itemDescriptionHeading">ITEM DESCRIPTION</p>
      <p className="itemDescription">{itemDetails.description}</p>
      <br />
      <p className="itemCategoryHeading">CATEGORY</p>
      <p className="itemCategory">{itemDetails.category}</p>
      <p className="itemStatusHeading">STATUS</p>
      <p className="itemStatus">{itemDetails.status}</p>
      <p className="warehouseHeading">WARHOUSE</p>
      <p className="warhouse">{itemDetails.warehouseName}</p>
      <p className="quantityHeading">QUANTITY</p>
      <p className="quantity">{itemDetails.quantity}</p>
    </section>
  );
}

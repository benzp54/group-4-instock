import React from "react";
import React, { Component } from "react";
import ReactDOM from "react";
import axios from "axios";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      inventoryItemDetails: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventory")

      .then((result) => {
        this.setState({
          inventory: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="inventory">
        <h1 className="inventory__title">Inventory</h1>
        <form className="inventory__form">
          <input placeholder="Search"></input>
          <button>+ Add New Inventory</button>
        </form>
        <div>
          {this.state.inventory.map((inventoryMain) => {
            return (
              <div className="inventory">
                <div className="inventory_left">
                  <h2 className="item-title">INVENTORY ITEM</h2>
                  <p className="item">{inventoryMain.itemName}</p>
                  <h2 className="category-title">CATEGORY</h2>
                  <p className="category">{inventoryMain.caegory}</p>
                  <img src={deleteIcon} alt="Delete symbol"></img>
                </div>
                <div className="warehouse__right">
                  <h2 className="status-title">STATUS</h2>
                  <p className="status">{inventoryMain.status}</p>
                  <h2 className="quantity-title">QTY</h2>
                  <p quantity>{inventoryMain.quantity}</p>
                  <h2 className="warhouse-title">WAREHOUSE</h2>
                  <p className="warehouse">{inventoryMain.warehouseName}</p>
                  <img src={editIcon} alt="Edit symbol"></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Inventory;

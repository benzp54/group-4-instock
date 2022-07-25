import React, { Component } from "react";
import ReactDOM from "react";
import axios from "axios";
import "./WarehouseDetails.scss";
import InventoryItemBuilder from "../InventoryItemBuilder/InventoryItemBuilder";
import EditLogo from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:8080";

class WarehouseDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      warehouseList: [],
      inventoryList: [],
      warehouseContact: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${apiUrl}/warehouse/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data[0]);
        console.log(response.data[0].contact);
        this.setState({
          warehouseList: response.data[0],
          warehouseContact: response.data[0].contact,
        });
        console.log(this.state.warehouseList.address);
      })
      .catch((error) => {
        console.log("Error");
      });
    axios
      .get(`${apiUrl}/warehouses/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          inventoryList: response.data,
        });
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  render() {
    return (
      <section className="warehouse-details-section">
        <div className="header-container">
          <button></button>
          <h1 className="header-container__header">
            {this.state.warehouseList.name}
          </h1>
          <div className="header-container__edit-container">
            <Link to="/warehouse/edit-warehouse">
              <img
                className="nav-container__edit-logo"
                src={EditLogo}
                alt={"edit logo"}
              />
            </Link>
          </div>
          <div className="details-container">
            <div className="address-wrapper">
              <p className="address-title">WAREHOUSE ADDRESS:</p>
              <p className="address-content">
                {this.state.warehouseList.address}
              </p>
            </div>
            <div className="contact-name-wrapper">
              <p className="contact-title">CONTACT NAME:</p>
              <p className="contact-content">
                {this.state.warehouseContact.name}
                {this.state.warehouseContact.position}
              </p>
            </div>
            <div className="contact-info-wrapper">
              <p className="contact-title">CONTACT INFORMATION:</p>
              <p className="contact-content">
                {this.state.warehouseContact.phone}
                {this.state.warehouseContact.email}
              </p>
            </div>
          </div>
        </div>
        <div className="column-titles-container">
          <p className="item-detail-label">INVENTORY ITEM</p>
          <p className="item-detail-label">CATEGORY</p>
          <p className="item-detail-label">STATUS</p>
          <p className="item-detail-label">QUANTITY</p>
          <p className="item-detail-label">ACTIONS</p>
        </div>
        <div>
          <ul className="inventory-items-list">
            {this.state.inventoryList.map((inventoryNames, index) => (
              <InventoryItemBuilder
                key={inventoryNames.itemName + index}
                itemName={inventoryNames.itemName}
                category={inventoryNames.category}
                status={inventoryNames.status}
                quantity={inventoryNames.quantity}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default WarehouseDetails;

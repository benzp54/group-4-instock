import './EditWarehouse.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import React from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:8080";

class EditWarehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            warehouseList: null,
            editActiveWarehouse: this.props.match.params.id
        }
    };

    componentDidMount() {
        axios
            .get(`${apiUrl}/warehouse/edit/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response.data[0]);
                this.setState({
                editActiveWarehouse: response.data,
                });
            })
            .catch((error) => {
                console.log("Error");
            });

        axios
        .get(`${apiUrl}/warehouses/${this.props.match.params.id}`)
        .then((response) => {
            console.log(response.data);
            this.setState({
            warehouseList: response.data,
            });
        })
        .catch((error) => {
            console.log("Error");
        })
    };

    render() {
        return (
            <>
            {this.state.warehouseList !== null ?
            <section className="editWarehouse">
                {/* Component Title */}
                <div className="editWarehouse__heading">
                    <img src={arrowBack} alt="back arrow" className="icon__arrowBack"/>
                    <h1 className="editWarehouse__title">Edit Warehouse</h1>
                </div>

                {/* Form Section*/}
                <div className="editWarehouse__content">
                    <h3 className="editWarehouse__formTitle"></h3>
                    <form id="formEditWarehouse" className="editWarehouseForm">
                        <div className="editWarehouseForm__partOne">
                            <h3>Warehouse Details</h3>
                            <label for="warehouseName">Warehouse Name</label>
                                <input type="text" name="warehouseName" className="editWarehouseForm__input" 
                                id="warehouseName"
                                placeholder={this.state.activeWarehouse.name}
                                required>
                                </input>
                            <label for="streetAddress">Street Address</label>
                                <input type="text" name="streetAddress" className="editWarehouseForm__input" 
                                id="streetAddress"
                                placeholder={this.state.activeWarehouse.address}
                                required>
                                </input>
                            <label for="city">City</label>
                                <input type="text" name="city" className="editWarehouseForm__input" 
                                id="city"
                                placeholder={this.state.activeWarehouse.city}
                                required>
                                </input>
                            <label for="country">Country</label>
                                <input type="text" name="country" className="editWarehouseForm__input" 
                                id="country"
                                placeholder={this.state.activeWarehouse.country}
                                required>
                                </input>
                        </div>
                        <div className="editWarehouseForm__partTwo">
                            <h3>Contact Details</h3>
                            <label for="contactName">Contact Name</label>
                                <input type="text" name="contactName" className="editWarehouseForm__input" 
                                id="contactName" 
                                placeholder={this.state.activeWarehouse.contact.name}
                                required>
                                </input>
                            <label for="position">Position</label>
                                <input type="text" name="position" className="editWarehouseForm__input" 
                                id="position" 
                                placeholder={this.state.activeWarehouse.contact.position}
                                required>
                                </input>
                            <label for="phoneNumber">Phone Number</label>
                                <input type="tel" name="phoneNumber" className="editWarehouseForm__input" 
                                id="phoneNumber" 
                                placeholder={this.state.activeWarehouse.contact.phone}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required>
                                </input>
                            <label for="email">Email</label>
                                <input type="email" name="email" className="editWarehouseForm__input" 
                                id="email" 
                                placeholder={this.state.activeWarehouse.contact.email}
                                required>
                                </input>
                        </div>
                        <div className="editWarehouseForm__footer">
                            <button className="btn btn__cancel">Cancel</button>
                            <input type="submit" value="Save" className="btn btn__save"></input>
                        </div>
                    </form>
                </div>
            </section> :
            null
            }
            </>
        )
    }
};

export default EditWarehouse

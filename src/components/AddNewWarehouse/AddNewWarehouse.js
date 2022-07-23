import './AddNewWarehouse.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import React from 'react';
import axios from 'axios';

class AddNewWarehouse extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            id: '',
            name:'',
            address: '',
            city:'',
            country:'',
            contact: '',
            positon: '',
            phone: '',
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewWarehouse = this.addNewWarehouse.bind(this);
    }

    addNewWarehouse = (e) => {
        e.preventDefault();
        if (this.state.id !== '' && this.state.name !== '' && this.state.address !== '' && this.state.city !== '' && this.state.country !== '' && this.state.contact !== '' && this.state.positon !== '' && this.state.phone !== '' && this.state.email !== '' ){
            axios.post('http://localhost:8080/warehouses',{
            warehouseId: this.state.id,
            warehouseName: this.state.name,
            address: this.state.address,
            city: this.state.city,
            country: this.state.country,
            contact: this.state.contact,
            positon: this.state.positon,
            phone: this.state.phone,
            email: this.state.email
        })
        .then(res => {
            console.log(res);
            alert('New Warehouse Added');
        })  
        .catch(err => console.log(err))
    } else {
        alert('Enter value for all fields')
    }
           
    }

    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name] : value
        });
    }
    render() {
        return (
            <section className="addWarehouse">
                {/* Component Title */}
                <div className="addWarehouse__heading">
                    <img src={arrowBack} alt="back arrow" className="icon__arrowBack"/>
                    <h1 className="addWarehouse__title">Add Warehouse</h1>
                </div>
    
                {/* Form Section*/}
                <div className="addWarehouse__content">
                    <h3 className="addWarehouse__formTitle"></h3>
                    <form id="addWarehouseForm">
                        <div className="addWarehouseForm__partOne">
                            <h3>Warehouse Details</h3>
                            <label for="warehouseName">Warehouse Name</label>
                                <input type="text" name="warehouseName" className="addWarehouseForm__input" 
                                id="warehouseName"
                                placeholder="Warehouse Name"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                            <label for="streetAddress">Street Address</label>
                                <input type="text" name="streetAddress" className="addWarehouseForm__input" 
                                id="streetAddress"
                                placeholder="Street Address"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                            <label for="city">City</label>
                                <input type="text" name="city" className="addWarehouseForm__input" 
                                id="city"
                                placeholder="City"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                            <label for="country">Country</label>
                                <input type="text" name="country" className="addWarehouseForm__input" 
                                id="country"
                                placeholder="Country"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                        </div>
                        <div className="addWarehouseForm__partTwo">
                            <h3>Contact Details</h3>
                            <label for="contactName">Contact Name</label>
                                <input type="text" name="contactName" className="addWarehouseForm__input" 
                                id="contactName" 
                                placeholder="Contact Name"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                            <label for="position">Position</label>
                                <input type="text" name="position" className="addWarehouseForm__input" 
                                id="position" 
                                placeholder="Position"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                            <label for="phoneNumber">Phone Number</label>
                                <input type="tel" name="phoneNumber" className="addWarehouseForm__input" 
                                id="phoneNumber" 
                                placeholder="Phone Number"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                            <label for="email">Email</label>
                                <input type="email" name="email" className="addWarehouseForm__input" 
                                id="email" 
                                placeholder="Email"
                                onChange={this.handleInputChange}
                                required>
                                </input>
                        </div>
                        <div className="addWarehouseForm__footer">
                            <button className="btn__cancel">Cancel</button>
                            <button className="btn__save" onClick={this.addNewWarehouse} type= "submit" id="addWarehouse">+ Add Warehouse</button>
                        </div>
                    </form>
                </div>
            </section>
        )

    }
   
}

export default AddNewWarehouse;
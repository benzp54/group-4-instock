import './EditWarehouse.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg'

function EditWarehouse() {

    return (
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
                            placeholder="Warehouse Name"
                            required>
                            </input>
                        <label for="streetAddress">Street Address</label>
                            <input type="text" name="streetAddress" className="editWarehouseForm__input" 
                            id="streetAddress"
                            placeholder="Street Address"
                            required>
                            </input>
                        <label for="city">City</label>
                            <input type="text" name="city" className="editWarehouseForm__input" 
                            id="city"
                            placeholder="City"
                            required>
                            </input>
                        <label for="country">Country</label>
                            <input type="text" name="country" className="editWarehouseForm__input" 
                            id="country"
                            placeholder="Country"
                            required>
                            </input>
                    </div>
                    <div className="editWarehouseForm__partTwo">
                        <h3>Contact Details</h3>
                        <label for="contactName">Contact Name</label>
                            <input type="text" name="contactName" className="editWarehouseForm__input" 
                            id="contactName" 
                            placeholder="Contact Name"
                            required>
                            </input>
                        <label for="position">Position</label>
                            <input type="text" name="position" className="editWarehouseForm__input" 
                            id="position" 
                            placeholder="Position"
                            required>
                            </input>
                        <label for="phoneNumber">Phone Number</label>
                            <input type="tel" name="phoneNumber" className="editWarehouseForm__input" 
                            id="phoneNumber" 
                            placeholder="Phone Number"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required>
                            </input>
                        <label for="email">Email</label>
                            <input type="email" name="email" className="editWarehouseForm__input" 
                            id="email" 
                            placeholder="Email"
                            required>
                            </input>
                    </div>
                    <div className="editWarehouseForm__footer">
                        <button className="btn__cancel">Cancel</button>
                        <button className="btn__save">Save</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default EditWarehouse

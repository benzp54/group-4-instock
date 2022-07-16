import 'EditWarehouse.scss'

function EditWarehouse() {

    return (
        <section className="editWarehouse">
            {/* Component Title */}
            <div className="editWarehouse__heading">
                <h1 className="editWarehouse__title">Edit Warehouse</h1>
            </div>

            {/* Form Section*/}
            <div className="editWarehouse__content">
                <h3 className="editWarehouse__formTitle"></h3>
                <form id="editWarehouseForm">
                    <div className="editWarehouseForm__partOne">
                        <h3>Warehouse Details</h3>
                        <label for="warehouseName">Warehouse Name</label>
                            <input type="text" name="warehouseName" className="editWarehouseForm__input" id="warehouseName" required></input>
                        <label for="streetAddress">Street Address</label>
                            <input type="text" name="streetAddress" className="editWarehouseForm__input" id="streetAddress" required></input>
                        <label for="city">City</label>
                            <input type="text" name="city" className="editWarehouseForm__input" id="city" required></input>
                        <label for="country">Country</label>
                            <input type="text" name="country" className="editWarehouseForm__input" id="country" required></input>
                    </div>
                    <div className="editWarehouseForm__partTwo">
                        <h3>Contact Details</h3>
                        <label for="contactName">Contact Name</label>
                            <input type="text" name="contactName" className="editWarehouseForm__input" id="contactName" required></input>
                        <label for="position">Position</label>
                            <input type="text" name="position" className="editWarehouseForm__input" id="position" required></input>
                        <label for="phoneNumber">Phone Number</label>
                            <input type="tel" name="phoneNumber" className="editWarehouseForm__input" id="phoneNumber" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required>
                            </input>
                        <label for="email">Email</label>
                            <input type="email" name="email" className="editWarehouseForm__input" id="email" required></input>
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
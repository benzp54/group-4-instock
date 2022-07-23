import './EditInventory.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

function EditInventory() {

    return(
        <section>
            <div className="editInventory__heading">
                <img src={arrowBack} alt="back arrow" className="icon__arrowBack"/>
                <h1 className="editInventory__title">Edit Inventory Item</h1>
            </div>
            <form>
                <h2>Item Details</h2>
                <input placeholder='Television'></input>
                <h2>Description</h2>
                <input placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'></input>
                <h2>Category</h2>
                <DropDownListContainer>
                    <DropDownList>
                        <ListItem>Electronics</ListItem>
                        <ListItem>Gear</ListItem>
                        <ListItem>Apparel</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>Health</ListItem>
                    </DropDownList>
                </DropDownListContainer>
                <h1>Item Availability</h1>
                <h2>Status</h2>
                <h2>Warehouse</h2>
                <DropDownListContainer>
                    <DropDownList>
                        <ListItem>Manhattan</ListItem>
                        <ListItem>Washington</ListItem>
                        <ListItem>Jersey</ListItem>
                        <ListItem>San Fran</ListItem>
                        <ListItem>Santa Monica</ListItem>
                        <ListItem>Miami</ListItem>
                        <ListItem>Boston</ListItem>
                    </DropDownList>
                </DropDownListContainer>
                <div>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </form>
        </section>
    )
}
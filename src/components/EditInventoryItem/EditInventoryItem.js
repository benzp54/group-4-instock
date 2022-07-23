import './EditInventory.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

function EditInventory() {

    return(
        <div className="editInventory__heading">
                <img src={arrowBack} alt="back arrow" className="icon__arrowBack"/>
                <h1 className="editInventory__title">Edit Inventory Item</h1>
        </div>
    )
}
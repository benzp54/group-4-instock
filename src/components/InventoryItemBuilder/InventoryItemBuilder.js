import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronRightIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function InventoryItemDetails(props) {
  return (
    <li className="inventory-item-card">
      <div></div>
      <p className="item-detail__label">INVENTORY ITEM</p>
      <Link>
        <p className="item-detail__content">{props.itemName}</p>
        <img className="item-detail-icon" src={ChevronRightIcon}></img>
      </Link>
      <p className="item-detail__label">CATEGORY</p>
      <p>{props.category}</p>
      <p className="item-detail__label">STATUS</p>
      <p>{props.status}</p>
      <p className="item-detail__label">QTY</p>
      <p>{props.quantity}</p>
      <button className="column-delete-button">
        <img className="column-delete-icon" src={DeleteIcon}></img>
      </button>
      <button className="column-edit-button">
        <img className="column-edit-icon" src={EditIcon}></img>
      </button>
    </li>
  );
}

export default InventoryItemDetails;

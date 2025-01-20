import { handleEquipmentClick } from "../../hooks/useEquipmentApi";
import EquipmentModel from "../../types/equipment.model";
import './equipment.css';
const Equipment = ({ equipmentSelected }: { equipmentSelected: EquipmentModel }) => {

    if(!equipmentSelected) return null; 

    const { name, claim, image, pricePerMinute } = equipmentSelected;

    return (
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{claim}</p>
            <img src={image} alt="" width="150" height="150" />
            <p className="card-text">{pricePerMinute} €</p>
            <button className="card-button" onClick={() => handleEquipmentClick(name || '')}>Book</button>
        </div>
    );
};

export default Equipment;   
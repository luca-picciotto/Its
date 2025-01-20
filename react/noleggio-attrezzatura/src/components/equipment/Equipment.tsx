import EquipmentModel from "../../types/equipment.model";
import './equipment.css';

const Equipment = ({ equipmentSelected }: { equipmentSelected: EquipmentModel }) => {

    if(!equipmentSelected) return null; 

    const { name, claim, image, pricePerMinute } = equipmentSelected;

    return (
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{claim}</p>
            <img src={image} alt="" width="100" height="100" />
            <p className="card-text">{pricePerMinute} €</p>
            <button className="card-button">Book</button>
        </div>
    );
};

export default Equipment;   
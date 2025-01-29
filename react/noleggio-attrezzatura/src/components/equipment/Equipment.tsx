import {  useState } from "react";
import EquipmentModel from "../../types/equipment.model";
import { calculatePrice } from "../../hooks/useEquipmentApi";
import useBookEquipmentApi from "../../hooks/useBookEquipmentApi";
import parseSvgIcon from "../../assets/utils/parseSvgIcon";

import './equipment.css';

const Equipment = ({ equipmentSelected }: { equipmentSelected: EquipmentModel }) => {
    const {id, name, claim, image, pricePerMinute, icon } = equipmentSelected;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
    const [duration, setDuration] = useState(0);
    const autToken = localStorage.getItem('authToken') || "";
    const {result, error, bookEquipment } = useBookEquipmentApi();
    const toggleModal = () => setIsModalVisible(!isModalVisible);



    if(!equipmentSelected) return null; 


    return (
        <>
            <div className="card" style={{ display: isModalVisible ? "block" : "none" }}>
                <h2 className="card-title">{id} {name} </h2>
                <p className="card-text">{claim}</p>
                <img src={image} alt="" width="200" height="150" />
                <p className="card-text">{pricePerMinute} €</p>
                <p>{parseSvgIcon(icon || "")}</p>
                <button type="submit" className="card-button" onClick={toggleModal}>Book</button>
            </div>
            <div className="card" style={{ display: isModalVisible ? "none" : "block" }}>
                <h2 className="card-title">{name}</h2>
                <button onClick={toggleModal} className="card-button" style={{width: 50}}> ← </button>
                <p className="card-text">{pricePerMinute} € </p>
                <input type="number" placeholder="Duration /minutes" value={duration || ""} onChange={(d) => {setDuration(d.target.valueAsNumber); }} />
                <p className="cart-text">{(calculatePrice(duration, pricePerMinute)?.toFixed(2))} €</p>
                <p>{result}</p>
                {error && <p>Duration must be between 1 and 20 minutes.</p>}
                <button type="submit" className="card-button" onClick={() => {  bookEquipment(id , duration, autToken ); }}>Send Book</button>
            </div>
        </>
    );
};

export default Equipment;   
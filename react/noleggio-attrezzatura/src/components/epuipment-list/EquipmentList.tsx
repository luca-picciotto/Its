import Equipment from "../equipment/Equipment";
import useEquipmentApi from "../../hooks/useEquipmentApi";
import './equipmentList.css';

const EquipmentList = () => {
    const { result, loading, error } = useEquipmentApi();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (result && result.length > 0) {
        console.log(result);
        return (
            <div className="equipment-list">
                {result.map((equipment) => (
                    <Equipment key={equipment.id} equipmentSelected={equipment} />
                ))}
            </div>
        );
    }

    return <div>No equipment found.</div>;
};
    
export default EquipmentList;

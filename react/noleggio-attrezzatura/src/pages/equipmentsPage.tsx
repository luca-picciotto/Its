import Navbar from '../components/navbar/Navbar';
import EquipmentList from '../components/epuipment-list/EquipmentList';
import '../assets/styles/equipmantsPage.css';

const EquipmentsPage = () => {
    return (
        <>
            <Navbar />
            <div className="equipments-page">
                <EquipmentList />
                
            </div>
            
        </>
    );
}

export default EquipmentsPage;

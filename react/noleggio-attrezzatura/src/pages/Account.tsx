import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import '../assets/styles/account.css';
import '../components/equipment/equipment.css';
const Account = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('userName');
        return (
            <>
                <Navbar />
                <div className="account">
                    <div className="card">
                        <p>Ciao utente, {user}!</p>
                        <button className="card-button" onClick={() => {
                            localStorage.setItem('authToken', '')
                            console.log(localStorage.getItem('authToken'));
                            navigate('/login');
                            }}> Log out
                        </button>
                    </div>
                </div>
            </>
        )
}

export default Account;
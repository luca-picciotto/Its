import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import '../assets/styles/account.css';
const Account = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('userName');
        return (
            <>
                <Navbar />
                <div className="account">
                    <p>Ciao utente, {user}!</p>
                    <button onClick={() => {
                        localStorage.setItem('authToken', '')
                        console.log(localStorage.getItem('authToken'));
                        navigate('/login');
                        }}> Log out
                    </button>
                </div>
            </>
        )
}

export default Account;
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Account = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('userName');
        return (
            <>
                <Navbar />
                <p>Ciao utente, {user}!</p>
                <button onClick={() => {
                    localStorage.setItem('authToken', '')
                    console.log(localStorage.getItem('authToken'));
                    navigate('/login');
                    }}> Log out
                </button>
            </>
        )
}

export default Account;
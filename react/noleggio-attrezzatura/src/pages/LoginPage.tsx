import { useEffect } from 'react';
import Login from '../components/login/Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        const token = localStorage.getItem('authToken');
        if(token && token.trim() !== ""){
            navigate('/');
        }
    }, [navigate]);
    return (
        <>
            <h1>Accedi</h1>
            <h3>Non sei registrato? Crea un profilo</h3>
            <Login />
        </>
    );
}

export default LoginPage;
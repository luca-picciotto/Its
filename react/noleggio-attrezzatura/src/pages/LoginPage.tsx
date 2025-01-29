import { useEffect } from 'react';
import Login from '../components/login/Login';
import { useNavigate } from 'react-router-dom';
import '../components/login/login.css';

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
            <div className="login-page">
                <Login />
            </div>
        </>
    );
}

export default LoginPage;
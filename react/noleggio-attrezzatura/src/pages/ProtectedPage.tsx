import { PropsWithChildren, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({children}:PropsWithChildren) => {
    const [authorized, setAuthorized] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(()=> {
        const token = localStorage.getItem('authToken');
        if(!token || token.trim() === ""){
            navigate('/login');
            
        } else {
            setAuthorized(true);
        }
    }, [navigate]);
    if(!authorized){
        return <p>Loading...</p>;
    } else {
        return children;
    }
}

export default ProtectedPage;
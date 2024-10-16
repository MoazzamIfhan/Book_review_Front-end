import React from "react"; 
import { useNavigate } from "react-router-dom";


const Navbar = (props: any) => { 
    let navigate = useNavigate();
    

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        navigate('/login');

    }
return ( 
    <div>
        Navbar
        <button onClick={()=> handleLogout()}>Logout</button>
    </div>
) 
}

export default Navbar;
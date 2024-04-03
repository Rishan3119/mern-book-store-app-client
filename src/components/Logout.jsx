import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

function Logout() {
    const {logout} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () =>{
        logout().then(() => {
            // Sign-out successful.
            alert("Logout Succesfull!!");
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='h-screen d-flex align-items-center bg-info justify-content-center'>
        <button className='bg-danger text-light rounded p-3' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
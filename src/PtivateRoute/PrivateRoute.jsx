import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='text-center'>
            <Spinner variant='secondary' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    if(user){
        return children;
    }


  return (
    <Navigate to="/login" state={{from: location}} replace ></Navigate>
  )
}

export default PrivateRoute
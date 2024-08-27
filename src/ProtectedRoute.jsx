import React from 'react'
import { useAuth } from './context/authContext'
import { Navigate, Outlet } from 'react-router-dom';
export function ProtectedRoute() {

    const { loading, isAuthenticated } = useAuth();

    
    if(loading) return <h1>loading...</h1>; 

    if(!loading && !isAuthenticated) return <Navigate to='/' replace/>;

  return <Outlet/>;
}

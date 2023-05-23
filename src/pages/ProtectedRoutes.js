import { Navigate } from "react-router";
import { useState } from "react";
import React from 'react'
import { useSelector } from "react-redux";



const ProtectedRoutes = ({children}) => {

 const {user} = useSelector((store)=> store.user);
 if(!user){
    return <Navigate to='/landing' />
 }


  return children;
  
}

export default ProtectedRoutes
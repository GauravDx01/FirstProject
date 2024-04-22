import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function Private() {
    let  userid = localStorage.getItem("data") == null ? false : true;
  return (
   <>
    {userid ? <Outlet  /> : <Navigate to="/signup" />};
   </>
  )
}

export default Private
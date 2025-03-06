import React from "react";
import { Navigate , useLocation  } from "react-router-dom";



const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const data = JSON.parse(localStorage.getItem("data") || '{}');

    if (!data) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;  
};

export default ProtectedRoute;

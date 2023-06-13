import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const DetallesPersonajes  = () => {
    const {actions, store} = useContext (Context)
    const params = useParams();

    
    return (
        
        <div className="col-12">
        {actions.getPeopleDetails ? <h1>{actions.getPeopleDetails.id}</h1> : <h3>Cargando...</h3>}
        
        </div> 
    );
};


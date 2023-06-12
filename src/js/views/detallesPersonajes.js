import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const DetallesPersonajes  = () => {
    const {actions, store} = useContext (Context)
    const params = useParams();

    useEffect(() =>  {
                actions.getPeopleDetails(params.id)
    }, [])

    return (
        
        <div className="col-12">
        {store.getPeopleDetails ? <h1>{store.getPeopleDetails.name}</h1> : <h3>Cargando...</h3>}
        </div> 
    );
};


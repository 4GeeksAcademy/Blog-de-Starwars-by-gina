import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';


const DetallesPersonajes = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const { peopleDetails } = store; 

  useEffect(() => {
    actions.getPeopleDetails(id);
  }, [id, actions]);
  
  return (
    <div className="container d-flex justify-content-center align-items-center">
    <div className="col-10 ">
      {peopleDetails ? (
        <div className="card mb-3">
            <div className="col-md-4 "style={{ width: '1200px', height: '800px' }}>
              <img src="https://images.reporteindigo.com/wp-content/uploads/2023/04/personajes-star-wars.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-10 ">
              <div className="card-body ">
                <h1 className="card-title">{peopleDetails.name}</h1>
                <p className="card-text">Birth Year: {peopleDetails.birth_year}</p>
                <p className="card-text">Eye Color: {peopleDetails.eye_color}</p>
                <p className="card-text">Gender: {peopleDetails.gender}</p>
                <p className="card-text">Hair Color: {peopleDetails.hair_color}</p>
                <p className="card-text">Height: {peopleDetails.height} cm</p>
                
              </div>
            </div>
          </div>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
    </div>
  );
};

export default DetallesPersonajes;
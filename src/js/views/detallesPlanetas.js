import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';

const DetallesPlanetas = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const { planetDetails } = store;

  useEffect(() => {
    actions.getPlanetDetails(id);
  }, [id, actions]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
    <div className="col-10 ">
        {planetDetails ? (
          <div className="card mb-3">
            <div className="col-md-4" style={{ width: '930px', height: '500px' }}>
              <img src="https://i.pinimg.com/originals/6d/51/5e/6d515e811db5ac8ac0bb104bc27f2592.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h1 className="card-title">{planetDetails.name}</h1>
                <p className="card-text">Climate: {planetDetails.climate}</p>
                <p className="card-text">Diameter: {planetDetails.diameter}</p>
                <p className="card-text">Gravity: {planetDetails.gravity}</p>
                <p className="card-text">Orbital Period: {planetDetails.orbital_period}</p>
                <p className="card-text">Population: {planetDetails.population}</p>
                <p className="card-text">Rotation Period: {planetDetails.rotation_period}</p>
                <p className="card-text">Surface Water: {planetDetails.surface_water}</p>
                <p className="card-text">Terrain: {planetDetails.terrain}</p>
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

export default DetallesPlanetas;
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';

const DetallesVehiculos = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const { vehicleDetails } = store;

  useEffect(() => {
    actions.getVehicleDetails(id);
  }, [id, actions]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="col-10">
        {vehicleDetails ? (
          <div className="card mb-3">
            <div className="col-md-4" style={{ width: '930px', height: '500px' }}>
              <img src="https://i.pinimg.com/originals/6d/51/5e/6d515e811db5ac8ac0bb104bc27f2592.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h1 className="card-title">{vehicleDetails.name}</h1>
                <p className="card-text">Cargo Capacity: {vehicleDetails.cargo_capacity}</p>
                <p className="card-text">Consumables: {vehicleDetails.consumables}</p>
                <p className="card-text">Cost in Credits: {vehicleDetails.cost_in_credits}</p>
                <p className="card-text">Crew: {vehicleDetails.crew}</p>
                <p className="card-text">Length: {vehicleDetails.length}</p>
                <p className="card-text">Manufacturer: {vehicleDetails.manufacturer}</p>
                <p className="card-text">Max Atmosphering Speed: {vehicleDetails.max_atmosphering_speed}</p>
                <p className="card-text">Model: {vehicleDetails.model}</p>
                <p className="card-text">Passengers: {vehicleDetails.passengers}</p>
                <p className="card-text">Vehicle Class: {vehicleDetails.vehicle_class}</p>
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

export default DetallesVehiculos;
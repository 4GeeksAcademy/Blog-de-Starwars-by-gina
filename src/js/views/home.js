import React, { useState, useEffect, useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardPlanetas from "../component/CardPlanetas";
import CardPersonajes from "../component/CardPersonajes";
import CardVehiculos from "../component/CardVehiculos";



export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();

	},[])
  
	return (
		<div className="container">
			<div className="col-12">
				<h1 className="text-danger">Characters</h1>
			</div>
			<div className="row overX">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<CardPersonajes
								key={index}
								name={item.name}
								uid={item.uid}
								url={item.url}
								
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 mt-5">
				<h1 className="text-danger">Planets</h1>
			</div>
			<div className="row overX">
				{store.planetas.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<CardPlanetas
								key={index}
								name={item.name}
								uid={item.uid}
								url={item.url}
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 mt-5">
			<h1 className="text-danger">Vehicles</h1>
			</div>
			<div className="row overX">
				{store.vehiculos.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<CardVehiculos
								key={index}
								name={item.name}
								uid={item.uid}
								url={item.url}
								
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
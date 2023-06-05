import React, { useState, useEffect, useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";

export const Home = () => {
	const { store } = useContext(Context);
  
	return (
		<div className="container">
			<div className="col-12">
				<h1 className="text-danger">Personajes</h1>
			</div>
			<div className="row overX">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<Card
								key={index}
								personaje={item.nombre}
								genero={item.genero}
								Hair_Color={item.Hair_Color}
								eye={item.eye}
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 mt-5">
				<h1 className="text-danger">Planetas</h1>
			</div>
			<div className="row overX">
				{store.planetas.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<CardPlanetas
								key={index}
								url={item.url}
								name={item.name}
								diameter={item.diameter}
								population={item.population}
								terrain={item.terrain}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
	
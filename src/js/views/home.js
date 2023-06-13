import React, { useState, useEffect, useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardPlanetas from "../component/CardPlanetas";
import CardPersonajes from "../component/CardPersonajes";



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
								gender={item.gender}
								hair_color={item.hair_color}
								Eye color={item.Eye_color}
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
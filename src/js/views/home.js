import React, { useState, useEffect, useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardPlanetas from "../component/planetas";
import CardPersonajes from "../component/personajes";



export const Home = () => {
	const { store } = useContext(Context);
  
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
								Hair Color={item.Hair_Color}
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
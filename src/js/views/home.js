import React, { useState, useEffect, useContext } from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="container">
		  <div className="row">
			<h2>listad de personajes</h2>
			{store.personajes.map((personajes, index) => {
			  return (
				<div className="col-12 col-md-4" key={index}>
				  <div className="card">
					<img src={personajes.url} className="card-img-top" alt="..." />
					<div className="card-body">
					  <h5 className="card-title">{personajes.name}</h5>
					  <Link to={`/personajes/${personajes.id}`} className="btn btn-primary">
						Ver más...
						</Link>
					</div>
				  </div>
				</div>
			  );
			})}
		  </div>
		</div>
	  );
	};